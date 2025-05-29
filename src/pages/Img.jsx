import { Container,Row,Col } from "react-bootstrap";


const Img=()=>{
    return(
        <>
<Container>
    <Row>
        <Col md={4}>
          <img src=".././img/img.jpg" alt="이미지 입니다" className="rounded"/>
        </Col>
        <Col md={4}>
          <img src=".././img/img.jpg" alt="이미지 입니다" className="rounded-circle"/>
        </Col>
        <Col md={4}>
          <img src=".././img/img.jpg" alt="이미지 입니다" className="img-thumnail"/>
        </Col>
    </Row>
</Container>
        </>
    );
}




export default Img;


