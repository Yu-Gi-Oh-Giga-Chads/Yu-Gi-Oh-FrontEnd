import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Play from './pages/play';
import Login from './pages/login';
import Register from './pages/register';

const Home = React.lazy(() => import('./pages/home'));

const loading = (
  <div>
    <p>Loading ...</p>
  </div>
)

const DequeBuilding = React.lazy(() => import('./pages/dequebuilding'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path='/play' element={<Play/>} />
          <Route path="/dequebuilding" element={<DequeBuilding/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
