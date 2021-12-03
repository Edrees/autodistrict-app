import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="over-ons/" element={<AboutUs />} />
            <Route path="diensten/" element={<Service />} />
            <Route path="contact/" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
