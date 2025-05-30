import { Container, Row, Col } from "react-bootstrap";

const Alerts = () => {
    return(
        <>
        <Container fluid>{/* class="container-fluid" */}
            <Row>
                <Col lg={12} md={12} sm={6}>
                    <div className="alert alert-success alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>★ alert-success ★</h1>
                        </strong>
                    </div>
                    <div className="alert alert-info alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>♠ alert-info ♠</h1>
                        </strong>
                    </div>
                    <div className="alert alert-warning alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>♥ alert-warning ♥</h1>
                        </strong>
                    </div>
                    <div className="alert alert-danger alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>♣ alert-danger ♣</h1>
                        </strong>
                    </div>
                    <div className="alert alert-primary alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>♬ alert-primary ♬</h1>
                        </strong>
                    </div>
                    <div className="alert alert-secondary alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>☆ alert-secondary ☆</h1>
                        </strong>
                    </div>
                    <div className="alert alert-dark alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>♡ alert-dark ♡</h1>
                        </strong>
                    </div>
                    <div className="alert alert-light alert-dismissible fade show text-center">
                        <button className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>
                            <h1>♧ alert-light ♧</h1>
                        </strong>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} sm={6}>
                    <div className="alert alert-success text-center">
                        <strong>
                            <h1>★ alert-success ★</h1>
                        </strong>
                    </div>
                    <div className="alert alert-info text-center">
                        <strong>
                            <h1>♠ alert-info ♠</h1>
                        </strong>
                    </div>
                    <div className="alert alert-warning text-center">
                        <strong>
                            <h1>♥ alert-warning ♥</h1>
                        </strong>
                    </div>
                    <div className="alert alert-danger text-center">
                        <strong>
                            <h1>♣ alert-danger ♣</h1>
                        </strong>
                    </div>
                    <div className="alert alert-primary text-center">
                        <strong>
                            <h1>♬ alert-primary ♬</h1>
                        </strong>
                    </div>
                    <div className="alert alert-secondary text-center">
                        <strong>
                            <h1>☆ alert-secondary ☆</h1>
                        </strong>
                    </div>
                    <div className="alert alert-dark text-center">
                        <strong>
                            <h1>♡ alert-dark ♡</h1>
                        </strong>
                    </div>
                    <div className="alert alert-light text-center">
                        <strong>
                            <h1>♧ alert-light ♧</h1>
                        </strong>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Alerts;
//Alert은 경고창입니다