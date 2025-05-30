import { Container, Row, Col } from "react-bootstrap";

const Btn = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                    <h1 className="my-5">일반버튼</h1>
                    <button className="btn mb-2">btn</button><br/>
                    <button className="btn btn-primary mb-2">btn-primary</button><br/>
                    <button className="btn btn-secondary mb-2">btn-secondary</button><br/>
                    <button className="btn btn-success mb-2">btn-success</button><br/>
                    <button className="btn btn-info mb-2">btn-info</button><br/>
                    <button className="btn btn-warning mb-2">btn-warning</button><br/>
                    <button className="btn btn-danger mb-2">btn-danger</button><br/>
                    <button className="btn btn-light mb-2">btn-light</button><br/>
                    <button className="btn btn-link mb-2">btn-link</button><br/>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">테두리버튼</h1>
                    <button className="btn btn-outline-primary mb-2">btn-outline-primary</button>
                    <button className="btn btn-outline-secondary mb-2">btn-outline-secondary</button>
                    <button className="btn btn-outline-warning mb-2">btn-outline-warning</button>
                    <button className="btn btn-outline-danger mb-2">btn-outline-danger</button>
                    <button className="btn btn-outline-success mb-2">btn-outline-success</button>
                    <button className="btn btn-outline-dark mb-2">btn-outline-dark</button>
                    <button className="btn btn-outline-info mb-2">btn btn-outline-info</button>
                    <button className="btn btn-outline-light text-dark mb-2">btn-outline-light</button>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">블록버튼</h1>
                    <div className="d-grid">
                        <button className="btn btn-danger btn-block mb-2">블록버튼</button>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-warning btn-block mb-2">블록버튼</button>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-success btn-block mb-2">블록버튼</button>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-info btn-block mb-2">블록버튼</button>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-block mb-2">블록버튼</button>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-secondary btn-block mb-2">블록버튼</button>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-light btn-block mb-2">블록버튼</button>
                    </div>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">버튼사이즈</h1>
                    <button className="btn btn-danger mb-2">nomal</button><br/>
                    <button className="btn btn-warning btn-lg mb-2">big</button><br/>
                    <button className="btn btn-success btn-sm mb-2">small</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>버튼 그룹</h1>
                    <div className="d-flex justify-content-end my-5">
                        <div className="btn-group">
                            <div className="btn btn-outline-primary">쓰기</div>
                            <div className="btn btn-outline-warning">수정</div>
                            <div className="btn btn-outline-danger">삭제</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Btn;