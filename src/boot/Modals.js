import {useState} from 'react';
import {Button,Modal,Container,Row,Col} from 'react-bootstrap';

const Modals=()=>{
    
        const [show,setShow]=useState(false);
        const handleClose=()=>setShow(false);
        const handleShow=()=>setShow(true);
    return(
        <Container className='d-flex justify-content-center mt-10'>
            <Row>
                <Col>
                  <Button variant="primary" onClick={handleShow}>Open</Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Modal Heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Nisi veniam non cillum veniam adipisicing enim labore cillum adipisicing aute duis occaecat.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="warning" onClick={handleClose}>Save change</Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default Modals;