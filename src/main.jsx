import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Layout from './components/Layout'
import MovieDetail from './components/MovieDetail'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render( // 컴포넌트를 브라우저의 실제DOM에 연결하는 라이브러리
  <BrowserRouter> {/* 브라우저 주소창과 컴포넌트를 연결해줌! 히스토리 가능! spa에서 페이지전환을 가능하게 해줌! */}
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<MovieDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
)