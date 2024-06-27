import { useState, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import SecoundPage from './components/secound'





function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Router>
      <div className="App">
        <Routes>
          <Route path="/"  element={<Main/>} />
          <Route path="/SecondPage" element={<SecoundPage/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
