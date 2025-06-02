import {Container,Row,Col} from 'react-bootstrap';

const Pagination=()=>{
    return(
        <>
        <Container fluid>
            <Row>
                <Col sm={3}>
                  <h1>Basic</h1>
                  <ul className='pagination'>
                    <li className='page-item'>
                        <a className='page-link' href="#">Previous</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href="#">1</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href="#">2</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href="#">Next</a>
                    </li>
                  </ul>
                </Col>

                <Col sm={3}>
                  <h1>Active</h1>
                   <ul className='pagination'>
                    <li className='page-item'>
                        <a className='page-link' href="#">Previous</a>
                    </li>
                    <li className='page-item active'>
                        <a className='page-link' href="#">1</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href="#">2</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href="#">Next</a>
                    </li>
                  </ul>
                </Col>

                <Col sm={3}>
                  <h1>Size</h1>
                  <ul className='pagination pagination-lg'>
                    <li className='page-item'>
                        <a className='page-link' href="#">Previous</a>
                    </li>
                    <li className='page-item active'>
                        <a className='page-link' href="#">1</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href="#">2</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href="#">Next</a>
                    </li>
                  </ul>
                </Col>

                <Col sm={3}>
                  <h1>Breadcrumbs</h1>
                  <ul className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <a href="#">web</a>
                    </li>
                    <li className='breadcrumb-item'>
                        <a href="#">design</a>
                    </li>
                    <li className='breadcrumb-item active'>
                        markup
                    </li>
                  </ul>
                </Col>
            </Row>
        </Container>
        </>
    );
}


export default Pagination;

