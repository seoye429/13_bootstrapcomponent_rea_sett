import {Container,Row,Col} from 'react-bootstrap';

//hooks
import React,{useState} from 'react';  //함수형 컴포넌트에 함수의 상태를 추적합니다


const Hooks=()=>{
    const[color,setColor]=useState("red");  //상태관리

    const [car,setCar]=useState({
        brand:"빈폴",
        model:"리어카",
        color:"black",
        year:"1960"
    })


    const updateColor=()=>{
        setCar(previousState=>{
            return{...previousState,color:"violet"}
        })
    }
    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                <button onClick={updateColor}>violet</button>


                <h1>리엑트에 이론에 가장 즁요한 메모리 소요방지 ...[...은 자바스트립트의 스프레드 연산자]</h1>
                <p>state가 업데이트 되면 전체 상태를 덮어씌운다,변경되는 것만 덮어씌울때 ...을 사용한다</p>

                
                <h2>My {car.brand}</h2>
                <p><h3>It is a <span className='text-danger'>{car.color}</span>{car.model} from {car.year}.</h3></p>

                <h1>my favorite color is <span className='text-danger'>{color}</span>!</h1>
                <p>
                    <button className='btn btn-primary' onClick={()=>setColor("blue")}>
                    파랑색으로
                    </button>
                </p>
                <p>
                    <button className='btn btn-danger' onClick={()=>setColor("red")}>
                    빨강색으로
                    </button>
                </p>
                <p>
                    <button className='btn btn-warning' onClick={()=>setColor("yellow")}>
                    파랑색으로
                    </button>
                </p>


                  <h1>후크</h1>
                  <pre>
                    - react 16.8버전부터 추가 되였음
                    - hooks를 사용하면 함수령 컴포넌트가 상태 및 기타 react기능에 접근할수 있음<br/>
                    - 이로 인해 클래스형 컴포넌트는 더 이상 팔요하지 않지만 없애지는 않을거임<br/>
                    - 후크에 3가지 규칙
                     1) 함수형 컴포넌트 내부에서만 호출될수 있음
                     2) 구성요소의 최상위 레벨에서만 
                  </pre>
                </Col>
            </Row>
        </Container>
        </>
    );
}


export default Hooks;
