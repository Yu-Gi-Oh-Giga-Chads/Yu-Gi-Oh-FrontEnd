import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
          <Route path="/dequebuilding" element={<DequeBuilding/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
