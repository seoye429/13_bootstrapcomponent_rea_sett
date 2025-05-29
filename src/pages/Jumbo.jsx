import {Container,Row,Col} from "react-bootstrap";

const Jumbo=()=>{
    return(
        <>
    <Container>
        <Row>
            <Col>
              <h1 className="my-5">Jumbotron</h1>
              <div className="mt-4 p-5 bg-warning text-white rounded">
                <h1>점보트론 jumbotron</h1>
                <p>부트스트랩4까지 존재했으나 5부터...없어짐</p>
              </div>
            </Col>
        </Row>
    </Container>        

        </>
    );
}

export default Jumbo;