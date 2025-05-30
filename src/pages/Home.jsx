import {Container, Row, Col} from "react-bootstrap";

const Home = () => {
    return(
        <>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={6}> {/* 각각 해상도에 따라서 바꿔주는 설정 | PC, Tablet, Mobile */}
                    <h1 className="mt-3 mb-2">What is React?</h1>
<pre>
- javascript 라이브러리 입니다<br/>
- facebook 엔지니어 조던 워크가 개발<br/>
- reactjs와 네이티브 두가지 종류가 있음<br/>
- UI 구성요소를 구축하기 위한 도구<br/>
- SPA(Single Page Application)<br/>
- 필요한 것만 변경하여 메모리 소요가 적다<br/>
- 리액트를 사용하려면 npm(Node Package Memory)이 필요합니다<br/>
- 리액트 18버전 설치<br/>
npm i react@latest react-dom@latest
<br/>
</pre>
<code>
import ReactDOM from 'react-dom';<br/>
ReactDOM.render(, document.getElementById('root'));<br/>
</code>
<code>
// After<br/>
import ReactDOM from 'react-dom/client';<br/>
const root = ReactDOM.createRoot(document.getElementById('root'));<br/>
root.render();
</code>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Home;