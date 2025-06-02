import {Container,Row,Col} from 'react-bootstrap';

const Collapse=()=>{
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                  <h1>Accordion</h1>
                  <div className="" id="accordion">
                    <div className="card">
                        <div className="card-header">
                            <a className='btn' data-bs-toggle="collapse" href="#collapseOne">
                               one
                            </a>
                        </div>
                        <div className="collapse show" id="collapseOne" data-bs-parent="#accordion">
                            <div className="card-body">
                                one은 숫자 1
                            </div>
                        </div>
                    </div>

                    <div className="card mt-5">
                        <div className="card-header">
                            <a className='collapsed btn' data-bs-toggle="collapse" href="#two">
                                two
                            </a>
                        </div>
                        <div className="collapse" data-bs-parent="#accordion" id="two">
                            <div className="card-body">
                                two는 숫자2
                            </div>
                        </div>
                    </div>
                  </div>
                </Col>

                <Col md={3}>
                  <h1>Basic</h1>
                  <button data-bs-toggle="collapse" data-bs-target="#demo" className='btn' >누르면 아래에 텍스트가 .....</button>
                  <div className="collapse" id="demo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, ducimus!
                  </div>
                </Col>

                <Col md={3}>
                  <h1></h1>
                </Col>

                <Col md={3}>
                  <h1></h1>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Collapse;


