import {Container,Row,Col} from 'react-bootstrap';

const Cards=()=>{
    return(
        <>
        <Container>
            <Row>
                <Col  lg={3} sm={3}>
                  <h1>Basic</h1>
                  <div className="card">
                    <div className="card-body">Basic Card</div>
                  </div>
                </Col>

                <Col  lg={3} sm={3}>
                  <h1 className="h3">Header and Footer</h1>
                  <div className="card">
                    <div className="card-header">header</div>
                    <div className="card-body">Content</div>
                    <div className="card-footer">footer</div>
                  </div>
                </Col>

                <Col  lg={3} sm={3}>
                  <h1 className='h3'>Title text and Links</h1>
                  <div className="card">
                    <div className="card-body">
                        <h4 className='card-title'>Card Title</h4>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, atque.</p>
                        <a href="#" className='card-link'>card link</a>
                        <a href="#" className='card-link'>Another link</a>
                    </div>
                  </div>
                </Col>

                <Col  lg={3} sm={3}>
                  <h1>card image</h1>
                  <div className="card bg-light">
                    <img src="../img/cat.png" alt="" className='card-item'></img>
                    <div className="card-body">
                        <h4 className='card-tetle'>Cat</h4>
                        <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, sequi.</p>
                        <a href="#" className='btn btn-outline-primary'>more</a>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body">
                        <h4 className='card-title'>Cat</h4>
                        <p className='card-text card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolores?</p>
                        <a href="#" className='btn btn-warning'>more</a>
                    </div>
                    <img src="../img/cat.png" alt="" className='card-item'></img>
                    
                  </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Cards;

