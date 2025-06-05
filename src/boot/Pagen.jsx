import {Pagination,Container,Row,Col} from 'react-bootstrap';


let active=2;   //변수 active에 index 2를 대입시키고
let items=[];   //변수 item은 비워짐

for(let number=1;number <=10;number++){
    items.push(
        <Pagination.Item key={number} active={number===active}>
            {number}
        </Pagination.Item>,
    )
}

const Pagen=()=>{
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 className='mt-4 mb-2 text-center'>페이지네이션</h1>
                    <div className="d-flex justify-content-center">
                        <Pagination>{items}</Pagination>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Pagination size="lg">{items}</Pagination>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Pagination size="sm">{items}</Pagination><br/>
                    </div>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Pagen;