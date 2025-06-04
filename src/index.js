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
import Pagination from './pages/Pagination';
import List from './pages/List';
import Collapse from './pages/Collapse';
import Form from './pages/Form';
import Flex from './pages/Flex';
import Flex2 from './pages/Flex2';
import Hooks from './pages/Hooks';
import Effect from './pages/Effect';
import Buttons from './boot/Buttons';
import Tabss from './boot/Tabss';
import Ref from './pages/Ref';
import Fig from './boot/Fig';
import Tb from './boot/Tb';
import Modals from './boot/Modals';


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
          <Route path="pagination" element={<Pagination/>}/>
          <Route path="list" element={<List/>}/>
          <Route path="collapse" element={<Collapse/>}/>
          <Route path="form" element={<Form/>}/>
          <Route path="flex" element={<Flex/>}/>
          <Route path="flex2" element={<Flex2/>}/>
          <Route path="hooks" element={<Hooks/>}/>
          <Route path="effect" element={<Effect/>}/>
          <Route path="buttons" element={<Buttons/>}/>
          <Route path="tabss" element={<Tabss/>}/>
          <Route path="ref" element={<Ref/>}/>
          <Route path="fig" element={<Fig/>}/>
          <Route path="tb" element={<Tb/>}/>
          <Route path="modals" element={<Modals/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
//DOM = Document Object Model 의 준말
/* 위에 이 문법은 리엑트 18버전부터 */
