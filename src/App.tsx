import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OverOns from './pages/OverOns'
import Diensten from './pages/Diensten'
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
        <Route path="contact/" element={<Contact />} />

        {/* New nested Diensten routes */}
        <Route path="diensten/" element={<Diensten />} />
        <Route path="diensten/onderhoud/" element={<Onderhoud />} />
        <Route path="diensten/reparatie/" element={<Reparatie />} />
        <Route path="diensten/storingen/" element={<Storingen />} />
        <Route path="diensten/dsg/" element={<DSG />} />
        <Route path="diensten/airco/" element={<Airco />} />
        <Route path="diensten/bandenopslag/" element={<Bandenopslag />} />
        <Route
          path="diensten/autosleutels-inleren/"
          element={<AutoSleutels />}
        />

        {/* Redirects from old flat URLs (already indexed by Google) */}
        <Route
          path="onderhoud/"
          element={<Navigate to="/diensten/onderhoud/" replace />}
        />
        <Route
          path="reparatie/"
          element={<Navigate to="/diensten/reparatie/" replace />}
        />
        <Route
          path="storingen/"
          element={<Navigate to="/diensten/storingen/" replace />}
        />
        <Route path="dsg/" element={<Navigate to="/diensten/dsg/" replace />} />
        <Route
          path="airco/"
          element={<Navigate to="/diensten/airco/" replace />}
        />
        <Route
          path="bandenopslag/"
          element={<Navigate to="/diensten/bandenopslag/" replace />}
        />
        <Route
          path="autosleutels-inleren/"
          element={<Navigate to="/diensten/autosleutels-inleren/" replace />}
        />
      </Route>
    </Routes>
  )
}

export default App
