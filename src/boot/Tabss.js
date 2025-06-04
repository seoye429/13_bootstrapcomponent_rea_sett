//useState는 기분과 같이 상태관리
import { useState } from "react";
import { Container, Row, Col, Nav, Tab, Tabs } from "react-bootstrap"; {/* 불러내는 모듈하고 함수 네임이 같으면 안됨 */}

function Tabss(){ {/* 함수형 컴포넌트 */}
//상태관리는 최상단에 사용해야 합니다
    const [key, setKey] = useState('home');
    return(
        <>{/* 한가지 요소 이상을 쓸때는 꼭 쓰기 */}
        <Container>
            <Row>
                <Col md={4}>
                    <h1>Basic</h1>
                    <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className='mb-3'
                    >{/* 임의 변수 k | 어떤 걸 선택할 때 */}
                        <Tab eventKey="home" title="Home">
                            Home Sweet h...
                        </Tab>

                        <Tab eventKey="profile" title="Profile">
                            Sweet P...
                        </Tab>

                        <Tab eventKey="contact" title="Contact">
                            Sweet C...
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={4}>
                    <h1 className="mt-4 mb-3">Justify</h1>
                    <Tabs
                    defaultActivekey="profile"
                    className="mb-3"
                    fill
                    >
                        <Tab eventKey="home" title="home">Home</Tab>
                        <Tab eventKey="profile" title="profile">Profile</Tab>
                        <Tab eventKey="longer" title="longer">Longer</Tab>
                        <Tab eventKey="contact" title="contacte">Contact</Tab>
                    </Tabs>
                </Col>
                <Col md={4}>
                    <h1 className="mt-4 mb-3">pills</h1>
                    <Tab.Container defaultActivekey='first'>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">first content</Tab.Pane>
                                    <Tab.Pane eventKey="second">second content</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>

        </>
    );
}
export default Tabss;