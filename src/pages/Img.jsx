import { Container, Row, Col } from "react-bootstrap";

const Img = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={4}>
                    <img src="../img/paris.jpg" alt="이미지 입니다" className="rounded"/> {/* 모서리 부분이 살짝 라운드가 들어감 */}
                </Col>
                <Col md={4}>
                    <img src="../img/paris.jpg" alt="이미지 입니다" className="rounded-circle"/> {/* 달걀을 가로로 눕힌 듯한 형태의 타원 */}
                </Col>
                <Col md={4}>
                    <img src="../img/paris.jpg" alt="이미지 입니다" className="img-thumnail"/> {/* 네모 반듯 직각 */}
                </Col>
            </Row>
<pre>
<br/>
- rounded : 모서리 부분이 살짝 라운드가 들어감<br/>
- rounded-circle : 달걀을 가로로 눕힌 듯한 형태의 타원<br/>
- img-thumnail : 네모 반듯 직각
</pre>
        </Container>
        </>
    );
}
export default Img;