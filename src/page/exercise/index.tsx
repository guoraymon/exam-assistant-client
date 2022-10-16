import data from '../../assets/test.json'
import {useEffect, useState} from "react";
import {Box, Button, Container, List, ListItem, Tag, Text} from "../../components";
import lodash from 'lodash';
import {useSearchParams} from "react-router-dom";

interface question {
    type: string;
    content: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    }
    answer: string;
    explain: string;
}

const typeColor = (type: string) => {
    switch (type) {
        case '选择题':
            return 'green';
        case '辨析题':
            return 'blue';
        case '简答题':
        case '论述题':
            return 'red';
    }
}

const optionColor = (option: string, answer: string | null, question: question) => {
    if (question && answer) {
        if (answer && answer === option) {
            if (answer === question.answer) {
                return 'green';
            } else {
                return 'red';
            }
        } else {
            return 'gray';
        }
    }
    return 'blue';
}


function Exercise() {
    let [searchParams] = useSearchParams();

    let sequence = Object.keys(data);

    const [cursor, setCursor] = useState(0);
    const [question, setQuestion] = useState<question | null>(null);
    const [submit, setSubmit] = useState(false);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        if (searchParams.get('order') === '2') {
            sequence = lodash.shuffle(sequence);
        }
        fetchQuestion(0);
    }, []);

    const fetchQuestion = (cursor: number) => {
        const question = data[parseInt(sequence[cursor])] as question;
        setCursor(cursor);
        setQuestion(question);
        setSubmit(false);
        setAnswer('');
    }

    const onClick = (key: string) => {
        setSubmit(true);
        setAnswer(key);
    }

    const onNext = () => {
        fetchQuestion(cursor + 1);
    }

    return (
        <Container>
            {question &&
                <>
                    <Box>
                        <Tag color={typeColor(question.type)}>
                            {question.type}
                        </Tag>
                        {question.content}
                    </Box>

                    <List>
                        {
                            question.type === '选择题' && Object.entries(question.options).map(([key, value]) =>
                                <Button
                                    key={key}
                                    color={optionColor(key, answer, question)}
                                    disabled={submit}
                                    onClick={() => onClick(key)}
                                >
                                    {`${key}.${value}`}
                                </Button>
                            )
                        }
                        {
                            question.type === '辨析题' && ['正确', '错误'].map(key =>
                                <Button
                                    key={key}
                                    color={optionColor(key, answer, question)}
                                    disabled={submit}
                                    onClick={() => onClick(key)}
                                >
                                    {key}
                                </Button>
                            )
                        }
                        {
                            (question.type === '简答题' || question.type === '论述题') && !answer &&
                            <Button
                                color={submit ? 'gray' : 'blue'}
                                disabled={submit}
                                onClick={() => onClick('')}
                            >
                                显示答案
                            </Button>

                        }
                    </List>

                    {
                        submit &&
                        <List>
                            {
                                ['选择题', '辨析题'].indexOf(question.type) !== -1 &&
                                <ListItem>
                                    <Text color={answer === question.answer ? 'green' : 'red'}>
                                        {answer === question.answer ? '回答正确' : '回答错误'}
                                    </Text>
                                </ListItem>
                            }
                            <ListItem>
                                {question.answer && `参考答案：${question.answer}`}
                            </ListItem>
                            <ListItem>
                                {question.explain && `答案解析：${question.explain}`}
                            </ListItem>
                            <Button color="blue" onClick={onNext}>下一道题</Button>
                        </List>
                    }
                </>
            }
        </Container>
    )
}

export default Exercise