import data from '../../assets/test.json'
import {useEffect, useState} from "react";
import {Box, Button, Container, List, ListItem, Navbar, Tag, Text} from "../../components";
import lodash from 'lodash';
import {useNavigate, useSearchParams} from "react-router-dom";
import {ArrowBack} from "@styled-icons/material-rounded";

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
            return 'blue';
        case '辨析题':
            return 'green';
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
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [sequence, setSequence] = useState<string[]>([]);
    const [cursor, setCursor] = useState(0);
    const question = data[parseInt(sequence[cursor])] as question;

    const [submit, setSubmit] = useState(false);
    const [answer, setAnswer] = useState('');

    const [correctlyNum, setCorrectlyNum] = useState(0);
    const [wrongNum, setWrongNum] = useState(0);

    useEffect(() => {
        let sequence = Object.keys(data);
        if (searchParams.get('order') === '2') {
            sequence = lodash.shuffle(sequence);
        }
        setSequence(sequence);
        setCursor(0);
    }, []);

    const onBack = () => {
        navigate('/');
    }

    const onClick = (option: string) => {
        setSubmit(true);
        setAnswer(option);
        if ((question.type === '选择题' || question.type === '辨析题') && option === question?.answer) {
            setCorrectlyNum(correctlyNum + 1);
        } else {
            setWrongNum(wrongNum + 1);
        }
    }

    const onNext = () => {
        let nextCursor = cursor + 1
        if (nextCursor >= sequence.length) {
            if (searchParams.get('order') === '2') {
                setSequence(lodash.shuffle(sequence));
            }
            nextCursor = 0;
        }
        setCursor(nextCursor);
        setSubmit(false);
        setAnswer('');
    }

    return (
        <Container>
            {question &&
                <>
                    <Navbar>
                        <ArrowBack size={24} onClick={onBack}/>
                        <List direction={"row"}>
                            <Text>{cursor + 1}/{sequence.length}</Text>
                            <Text color="green">答对: {correctlyNum}</Text>
                            <Text color="red">答错: {wrongNum}</Text>
                            <Text>
                                正确率:
                                {
                                    (sum => sum ? lodash.round(correctlyNum / sum * 100) : sum)(correctlyNum + wrongNum)
                                }
                                %
                            </Text>
                        </List>
                    </Navbar>

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