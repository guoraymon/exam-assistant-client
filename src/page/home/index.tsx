import {useNavigate} from "react-router-dom";
import {Button, Container} from "../../components";

function Home() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('exercise');
    }

    return (
        <Container justifyContent="center">
            <Button color="blue" size='lg' onClick={onClick}> 开始练习</Button>
        </Container>
    )
}

export default Home