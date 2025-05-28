import React from 'react';
//라우터 선언
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ReactDOM from 'react-dom/client';
// import App from './App';  함수에서 app을 선언해서 필요없어짐
import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';




export default function App(){
  return(
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Header/>}>   {/* 헤더*/}
          <Route index element={<Home/>}/>   {/* 바디*/}
          <Route path="container" element={<Cont/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
// 컴포넌트 만들기,그룹화,페런츠  index.js안에서 한페이지에서 모든걸 처리 가능


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);  /*위에 이 문법은 리액트 18버전부터 */

