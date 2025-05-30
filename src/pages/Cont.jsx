import { Container, Row, Col, Table } from "react-bootstrap";

const Cont = () => {
    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="mt-5 mb-3">Fixed Container</h1>
                    <Table striped className="border table-hover">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Extra Small &lt; 576px</th>{/* 반대는 &gt; */}
                                <th>Small &gt;&#61; 576px</th>
                                <th>Medium &gt;&#61; 768px</th>
                                <th>Large &gt;&#61; 992px</th>
                                <th>Extra Large &gt;&#61; 1200px</th>
                                <th>XXL &gt;&#61; 1400px</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>.container-sm</code></td>
                                <td>100%</td>
                                <td>540px</td>
                                <td>720px</td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td><code>.container-md</code></td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>720px</td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td><code>.container-lg</code></td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>960px</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td><code>.container-xl</code></td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>1140px</td>
                                <td>1320px</td>
                            </tr>
                            <tr>
                                <td><code>.container-xxl</code></td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>1320px</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col lg={6} md={4} className="border">
                    one
                </Col>
                <Col lg={3} md={4} className="border">
                    two
                </Col>
                <Col lg={3} md={4} className="border">
                    three
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Cont;