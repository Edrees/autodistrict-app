import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OverOns from './pages/OverOns'
import Diensten from './pages/Diensten'
import Airco from './pages/Airco'
import Wielopslag from './pages/Wielopslag'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="over-ons/" element={<OverOns />} />
        <Route path="diensten/" element={<Diensten />} />
        <Route path="airco/" element={<Airco />} />
        <Route path="wielopslag/" element={<Wielopslag />} />
        <Route path="contact/" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
