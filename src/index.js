import React from 'react';
//라우터 선언
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
// import App from './App';  함수에서 app을 선언해서 필요없어짐

//부트스트랩을 사용하기 위한 cdn선언
import 'bootstrap/dist/css/bootstrap.min.css';   //혹은 index.html에 선언


import Header from './include/Header';  //라우팅 용
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import Tb from './pages/Tb';   
import Img from './pages/Img'; 
import Jumbo from './pages/Jumbo';
import Alerts from './pages/Alerts';
import Btn from './pages/Btn';
import Badges from './pages/Badges';




export default function App(){
  return(
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Header/>}>   {/* 헤더*/}  {/*컴포넌트용 */}
          <Route index element={<Home/>}/>   {/* 바디*/}
          <Route path="container" element={<Cont/>}/>
          <Route path="typo" element={<Typo/>}/>
          <Route path="color" element={<Color/>}/>
          <Route path="tb" elemnt={<Tb/>}/>
          <Route path="img" elemnt={<Img/>}/>
          <Route path="jumbo" elemnt={<Jumbo/>}/>
          <Route path="alerts" elemnt={<Alerts/>}/>
          <Route path="button" elemnt={<Btn/>}/>
          <Route path="badges" elemnt={<Badges/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
// 컴포넌트 만들기,그룹화,페런츠  index.js안에서 한페이지에서 모든걸 처리 가능


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);  /*위에 이 문법은 리액트 18버전부터 */

