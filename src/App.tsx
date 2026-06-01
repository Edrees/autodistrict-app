import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OverOns from './pages/OverOns'
import Onderhoud from './pages/Onderhoud'
import Reparatie from './pages/Reparatie'
import Storingen from './pages/Storingen'
import DSG from './pages/DSG'
import Airco from './pages/Airco'
import Bandenopslag from './pages/Bandenopslag'
import AutoSleutels from './pages/AutoSleutels'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="over-ons/" element={<OverOns />} />
        <Route path="onderhoud/" element={<Onderhoud />} />
        <Route path="reparatie/" element={<Reparatie />} />
        <Route path="storingen/" element={<Storingen />} />
        <Route path="dsg/" element={<DSG />} />
        <Route path="airco/" element={<Airco />} />
        <Route path="bandenopslag/" element={<Bandenopslag />} />
        <Route path="autosleutels-inleren/" element={<AutoSleutels />} />
        <Route path="contact/" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
