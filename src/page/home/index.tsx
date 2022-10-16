import {useNavigate} from "react-router-dom";
import {Button, Container} from "../../components";

function Home() {
    const navigate = useNavigate();

    const onClick = (order: number) => {
        navigate(`exercise?order=${order}`);
    }

    return (
        <Container justifyContent="center">
            <Button color="blue" size='lg' onClick={() => onClick(1)}>
                顺序练习
            </Button>
            <Button color="blue" size='lg' onClick={() => onClick(2)}>
                乱序练习
            </Button>
        </Container>
    )
}

export default Home