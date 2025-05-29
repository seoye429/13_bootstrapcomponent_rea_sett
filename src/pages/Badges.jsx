import { Container,Row,Col } from "react-bootstrap";

const Bedges=()=>{
    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                  <h1>뱃지</h1>
                  <span className="badge bg-primary">bg-primary</span><br/>
                  <span className="badge rounded-pill bg-secondary">bg-secondary</span><br/>
                  <span className="badge bg-success">bg-success</span><br/>
                  <span className="badge bg-danger">bg-danger</span><br/>
                  <span className="badge bg-warming">bg-warming</span><br/>
                  <span className="badge bg-info">bg-info</span><br/>
                  <span className="badge bg-light">bg-light</span><br/>
                  <span className="badge bg-dark">bg-dark</span><br/>
                </Col>
            </Row>

            <Row>
                <Col>
                  <button className="btn btn-primary">
                    messages <span className="badge bg-danger rounded-circle">4</span>
                  </button>
                </Col>
            </Row>
        </Container>
        
        </>
    );
}

export default Bedges;
