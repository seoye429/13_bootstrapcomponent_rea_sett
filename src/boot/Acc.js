import { Accordion, Container, Row, Col } from "react-bootstrap";

const Acc = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">{/* Accordion item 첫번째 블록 */}
                            <Accordion.Header>Item 1</Accordion.Header>
                            <Accordion.Body>
                                Enim exercitation ullamco consequat ex aliqua Lorem anim laboris.
                                Excepteur minim id cupidatat voluptate exercitation aliquip esse irure duis esse irure. Excepteur elit reprehenderit duis nostrud mollit consectetur tempor nostrud sunt id eu laboris. Anim ea ut proident sint incididunt. Labore incididunt ut id ex amet commodo amet exercitation do culpa eiusmod nisi. Aute pariatur sunt cupidatat consequat nisi consectetur id ex elit nulla nulla sit. Minim Lorem ut labore amet. Magna id et anim occaecat Lorem velit esse enim duis ipsum minim anim.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">{/* Accordion item 두번째 블록 */}
                            <Accordion.Header>Item 2</Accordion.Header>
                            <Accordion.Body>
                                Enim exercitation ullamco consequat ex aliqua Lorem anim laboris.
                                Excepteur minim id cupidatat voluptate exercitation aliquip esse irure duis esse irure. Excepteur elit reprehenderit duis nostrud mollit consectetur tempor nostrud sunt id eu laboris. Anim ea ut proident sint incididunt. Labore incididunt ut id ex amet commodo amet exercitation do culpa eiusmod nisi. Aute pariatur sunt cupidatat consequat nisi consectetur id ex elit nulla nulla sit. Minim Lorem ut labore amet. Magna id et anim occaecat Lorem velit esse enim duis ipsum minim anim.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Acc;