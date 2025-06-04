import {Button,ButtonGroup,Container,Row,Col} from 'react-bootstrap';

const Buttons=()=>{
    return(
        <>
        <Container>
            <Row>
                <Col sm={4}>
                  <Button variant='primary mb-2'>primary</Button><br/>
                  <Button variant='secondaru mb-2'>secondaru</Button><br/>
                  <Button variant='success mb-2'>success</Button><br/>
                  <Button variant='warning mb-2'>warning</Button><br/>
                  <Button variant='danger mb-2'>danger</Button><br/>
                  <Button variant='info mb-2'>info</Button><br/>
                  <Button variant='light mb-2'>light</Button><br/>
                  <Button variant='dark mb-2'>dark</Button><br/>
                  <Button variant='link mb-2'>link</Button><br/>
                </Col>

                <Col sm={4}>
                  <Button variant='outline-primary mb-2'>primary</Button><br/>
                  <Button variant='outline-secondaru mb-2'>secondaru</Button><br/>
                  <Button variant='outline-success mb-2'>success</Button><br/>
                  <Button variant='outline-warning mb-2'>warning</Button><br/>
                  <Button variant='outline-danger mb-2'>danger</Button><br/>
                  <Button variant='outline-info mb-2'>info</Button><br/>
                  <Button variant='outline-light mb-2'>light</Button><br/>
                  <Button variant='outline-dark mb-2'>dark</Button><br/>
                </Col>

                <Col sm={4}>
                  <h1>Button group</h1>   
                  <ButtonGroup>             {/*부트스트랩에서는 btn-grout  */}
                    <Button variant="outline-primary" size='sm'>write</Button>
                    <Button variant="outline-success">edit</Button>
                    <Button variant="outline-danger" size='lg'>delete</Button>
                  </ButtonGroup>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Buttons;
