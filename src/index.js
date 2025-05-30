import React from 'react';
//라우터 선언
import { BrowserRouter, Routes, Route } from "react-router-dom";
//부트스트랩을 사용하기 위한 cdn선언
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import Table from './pages/Table';
import Img from './pages/Img';
import Jumbo from './pages/Jumbo';
import Alerts from './pages/Alerts';
import Btn from './pages/Btn';
import Badges from './pages/Badges';
import Progress from './pages/Progress';
import Cards from './pages/Cards';
import Layer from './pages/Layer';
import ToastM from './pages/ToastM';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>{/*위에 BrowserRouter을 그룹화해줌*/}
        <Route path="/" element={<Header/>}>{/*path는 기본적으로 경로 | header*/}
          <Route index element={<Home/>}/>{/*body*/}
          <Route path="container" element={<Cont/>}/> {/*이친구가 주소라 잡힘*/}
          <Route path="typo" element={<Typo/>}/> 
          <Route path="color" element={<Color/>}/> 
          <Route path="table" element={<Table/>}/>
          <Route path="img" element={<Img/>}/>
          <Route path="jumbo" element={<Jumbo/>}/>
          <Route path="alerts" element={<Alerts/>}/>
          <Route path="btn" element={<Btn/>}/>
          <Route path="badges" element={<Badges/>}/>
          <Route path="progress" element={<Progress/>}/>
          <Route path="cards" element={<Cards/>}/>
          <Route path="layer" element={<Layer/>}/>
          <Route path="toastm" element={<ToastM/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
//DOM = Document Object Model 의 준말
/* 위에 이 문법은 리엑트 18버전부터 */
