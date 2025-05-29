import { Container,Row,Col } from "react-bootstrap";

const Alerts=()=>{
    return(
        <>
        <Container fluid> {/*부트스트랩에서는 원래는 class="container-fluid" */}
                       <Row>
                <Col lg={12} md={12} sm={6}>
                <div className="alert alert-success alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-success
                    </strong>
                </div> 

                <div className="alert alert-info alert-dismissible fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-info
                    </strong>
                </div>

                <div className="alert alert-warning alert-dismissble fade show">
                    <button className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>
                        alert-warning
                    </strong>
                </div>

                <div className="alert alert-danger">
                    <strong>
                        alert-danger
                    </strong>
                </div>

                <div className="alert alert-primary">
                    <strong>
                        alert-primary
                    </strong>
                </div>

                <div className="alert alert-secondary">
                    <strong>
                        alert-secondary
                    </strong>
                </div>

                <div className="alert alert-dark">
                    <strong>
                        alert-dark
                    </strong>
                </div>

                <div className="alert alert-light">
                    <strong>
                        alert-light
                    </strong>
                </div>
                </Col>
            </Row>


            <Row>
                <Col lg={12} md={12} sm={6}>
                <div className="alert alert-success">
                    <strong>
                        alert-success
                    </strong>
                </div>

                <div className="alert alert-info">
                    <strong>
                        alert-info
                    </strong>
                </div>

                <div className="alert alert-warning">
                    <strong>
                        alert-warning
                    </strong>
                </div>

                <div className="alert alert-danger">
                    <strong>
                        alert-danger
                    </strong>
                </div>

                <div className="alert alert-primary">
                    <strong>
                        alert-primary
                    </strong>
                </div>

                <div className="alert alert-secondary">
                    <strong>
                        alert-secondary
                    </strong>
                </div>

                <div className="alert alert-dark">
                    <strong>
                        alert-dark
                    </strong>
                </div>

                <div className="alert alert-light">
                    <strong>
                        alert-light
                    </strong>
                </div>
                </Col>
            </Row>
        </Container>


        </>
    );
}

export default Alerts;