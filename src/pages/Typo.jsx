import { Container, Row, Col } from "react-bootstrap";

const Typo = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <p className="text-break">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="border">
                    <h1>abbr</h1>
                    <p>악어 마우스를 올리면 물음표가 있는 커서 모양을 지정합니다</p>
                    <section>the <abbr title="월트 디즈니">WHO</abbr> was founded in 1948.</section>
                </Col>
                <Col lg={3} className="border">
                    <h1>blockquote</h1>
                    <p>인용문은 짧은 인용과 긴 인용이 있는데 </p>
                    <blockquote className="blockquote">
                        <p>시나모롤은 귀여운 구름 강아지 입니다...토끼가 아니에요..</p>
                        <footer className="blockquote-footer">From 시나모롤</footer>
                    </blockquote>
                </Col>
                <Col lg={3} className="border">
                    <h1>그외</h1>
                    <p className="text-start">왼쪽</p>
                    <p className="text-end">오른쪽</p>
                    <p className="text-center">가운데</p>
                    <p className="text-nowrap">감싸지 않음</p>
                    <p>
                        .lead : 글씨들 사이에서 크기변화가 생겨서 돋보이게...<br/>
                        .text-start : 왼쪽 정렬<br/>
                        .text-break : 가로폭에 맞게 글씨를 끊어줌<br/>
                        .text-center : 가운데 정렬<br/>
                        .text-decoration-none : a태그에서 밑줄 생기는 것 방지<br/>
                        .text-end : 오른 쪽 정렬<br/>
                    </p>
                </Col>
                <Col lg={3} className="border">
                    <h1>그외2</h1>
                    <p>
                        .text-nowrap : 가공을 하지 않은 그 상태 그대로<br/>
                        .text-lowercase : 소문자로<br/>
                        .text-uppercase : 대문자로<br/>
                        .text-capitalize : 각 워딩에 첫 글자만 대문자로<br/>
                        .initialism : 좀 더 폰트를 작게<br/>
                        .list-unstyled : 목록에 여백을 제거하는데 단 클래스 바로 아래부분만<br/>
                        .list-inline : ul,ol 이런 태그에 li를 block이 아닌 inline으로<br/>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="border">{/* 실무에서는 className="border" 쓰면 안됨 */}
                <h1 className="mt-5 mb-3">
                    Typography
                </h1>
                <div className="d-flex">
                    <p className="h1">h1</p>
                    <p className="h2">h2</p>
                    <p className="h3">h3</p>
                    <p className="h4">h4</p>
                    <p className="h5">h5</p>
                    <p className="h6">h6</p>
                </div>
                </Col>
                <Col lg={3} className="border">
                    <h1 className="mt-5 mb-3">
                        h시리즈보다 좀 더 큰 글씨를 사용할 때는 .display
                    </h1>
                    <div className="">
                        <h1 className="display-1">Display 1</h1>
                        <h1 className="display-2">Display 2</h1>
                        <h1 className="display-3">Display 3</h1>
                        <h1 className="display-4">Display 4</h1>
                        <h1 className="display-5">Display 5</h1>
                        <h1 className="display-6">Display 6</h1>
                    </div>
                </Col>
                <Col lg={3} className="border">
                    <h1 className="mt-5 mb-3">
                        키 보 드
                    </h1>
                    <p>use <kbd>Ctrl + p</kbd> to open</p>
                </Col>
                <Col lg={3} className="border">
                    <h1 className="mt-5 mb-3">
                        정의 리스트
                    </h1>
                    <dl>
                        <dt>Coffee</dt>
                        <dd>커피는 싫어</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Typo;