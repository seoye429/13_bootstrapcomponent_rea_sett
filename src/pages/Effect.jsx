import {Container,Row,Col} from 'react-bootstrap';
//hook useEffect를 사용하면 컴포넌트에 부수적인 작용을 수행할수 있다.[예:데티어 가져오기,데이터 타이머 등]
import React,{useState,useEffect} from 'react';  //함수형 컴포넌트에 함수의 상태를 추적합니다

const Effect=()=>{
    const[count,setCount]=useState(0);  //초기값이 0임
    const[calculation,setCalculation]=useState(0);

    useEffect(()=>{
        // setTimeout(()=>{
        //     setCount((count)=>count+1);
        // },1000);  //1초 뒤에 1씩 증가하하는것,즉 1초에 1씩 증가하는것

        setCalculation(()=>count*2);

    },[count]); //[]는 empty 브라켓을 사용해야됨,이걸 사용함으로써 한번만 실행하고 멈춤
    
    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                  <h1>I've rendered {count} times!</h1>
                  <button onClick={()=>setCount((c)=>c+1)} className='btn btn-ontline-success'>
                    +
                  </button>
                  <p className='display-1 text-success'>Calculation:{calculation}</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Effect;