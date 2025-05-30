import { Container, Row, Col } from "react-bootstrap";

const TableRef = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3} className="border"> 
                    <h1 className="my-3">Basic</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Striped</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Bordered</h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Hover</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody> {/* hover할 시에는 body만 hover된다 */}
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="border"> 
                    <h1 className="my-3">Dark</h1>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Dark Striped</h1>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Hoverable Dark</h1>
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Borderless</h1>
                    <table className="table table-dark table-borderless">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="border">
                    <h1 className="my-3">Primary</h1>
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Success</h1>
                    <table className="table table-success">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Danger</h1>
                    <table className="table table-danger">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Info</h1>
                    <table className="table table-info">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="border">
                    <h1 className="my-3">Warning</h1>
                    <table className="table table-warning">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Secondary</h1>
                    <table className="table table-secondary">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Light</h1>
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>john</td>
                                <td>corner</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className="border">
                    <h1 className="my-3">Sinamonroll</h1>
                    <table className="table table-info table-hover">
                        <thead>
                            <tr>
                                <th>first</th>
                                <th>last</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Moca</td>
                                <td>burn</td>
                            </tr>
                            <tr>
                                <td>sinamon</td>
                                <td>roll</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h1 className="my-3">그 외 class</h1>
<pre className="text-secondary">
- table-primary : 라이트 스카이블루색 배경 테이블<br/>
- table-success : 라이트 그린색 배경 테이블<br/>
- table-danger : 핑크색 배경 테이블<br/>
- table-info : 연한 하늘색 배경 테이블<br/>
- table-warning : 연한 노란 배경 테이블<br/>
- table-secondary : 연한 회색 배경 테이블<br/>
- table-light : 엄청 연한 회색 배경 테이블<br/>
- table-dark : 검정 배경 테이블<br/>
</pre>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default TableRef;//함수명