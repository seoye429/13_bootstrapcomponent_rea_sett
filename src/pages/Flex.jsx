import { Container,Row,Col } from "react-bootstrap";
//익스플로러 8,9는 flex가 적용이 안됨

const Flex=()=>{
    return(
        <>
        <Container fluid>
             <Row><Col><h1>크기 성장 수축</h1></Col></Row>
            <Row className="p-3 border">
                <Col md={3}>
                  <h1>Equals Widths</h1>
                  <div className="d-flex">
                    <div className="p-2 bg-info flex-fill">one</div>
                    <div className="p-2 bg-warning flex-fill">two</div>
                    <div className="p-2 bg-primary flex-fill">three</div>
                  </div>
                </Col>

                 <Col md={3}>
                  <h1>flex-grow-1</h1>
                  <div className="d-flex">
                    <div className="p-2 bg-info">one</div>
                    <div className="p-2 bg-warning">two</div>
                    <div className="p-2 bg-primary">three</div>
                  </div>
                </Col>

                <Col md={3}>
                  <h2>order:숫자가 낮은것이 내림차순</h2>
                  <div className="d-flex bg-secondary">
                    <div className="p-2 bg-info order-3">three</div>
                    <div className="p-2 bg-info order-2">two</div>
                    <div className="p-2 bg-info order-1">one</div>
                  </div>
                </Col>
            </Row>


            <Row><Col><h1>콘텐츠 정당화</h1></Col></Row>
            <Row className="p-3 border">
                <Col md={3}>
                  <h1>justify-content-start</h1>
                  <div className="d-flex fustify-content-start bg-secondary">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>
                <Col md={3}>
                  <h1>justify-content-end</h1>
                  <div className="d-flex justify-content-end bg-secondary">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>
                <Col md={3}>
                  <h1>justify-content-center</h1>
                  <div className="d-flex justify-content-center bg-secondary">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>
            </Row>
            <Row className="p-3 border">
                <Col md={3}>
                  <h1>justify-content-between</h1>
                  <div className="d-flex justify-content-between bg-secondary">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>
                <Col md={3}>
                  <h1>justify-content-around</h1>
                  <div className="d-flex justify-content-around bg-secondary">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>

            </Row>


            <Row className="p-3 border">
                <Col md={4}>
                  <h1>row-reverse</h1>
                  <div className="d-flex flex-row-reverse bg-secondary">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>

                <Col md={4}>
                  <h1>flex-column:내림차 순</h1>
                  <div className="d-flex flex-column">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>

                <Col md={4}>
                  <h1>flex-column-reverse: 오른차 순</h1>
                  <div className="d-flex flex-column-reverse">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>
            </Row>


            <Row className="p-3 border">
                <Col md={4}>
                  <h1>Basic</h1>
                  <div className="d-flex p-3 bg-secondary text-white">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>

                <Col md={4}>
                  <h1>inline-flex</h1>
                  <div className="d-inline-flex p-3 bg-secondary text-white">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>

                <Col md={4}>
                  <h1>Flex-row</h1>
                  <div className="d-flex p-3 flex-row bg-secondary">
                    <div className="p-2 bg-info">Flex item 1</div>
                    <div className="p-2 bg-warning">Flex item 2</div>
                    <div className="p-2 bg-primary">Flex item 3</div>
                  </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Flex;
