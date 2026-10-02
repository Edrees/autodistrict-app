import type { ReactNode } from 'react'
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
import { SERVICE_PAGES_ENABLED } from './constants/features'

// While the service pages are switched off for the demo, every sub-page
// route (including typed URLs) lands on the Diensten overview instead.
const servicePage = (page: ReactNode) =>
  SERVICE_PAGES_ENABLED ? page : <Navigate to="/diensten/" replace />

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="over-ons/" element={<OverOns />} />
        <Route path="contact/" element={<Contact />} />

        {/* New nested Diensten routes */}
        <Route path="diensten/" element={<Diensten />} />
        <Route path="diensten/onderhoud/" element={servicePage(<Onderhoud />)} />
        <Route path="diensten/reparatie/" element={servicePage(<Reparatie />)} />
        <Route path="diensten/storingen/" element={servicePage(<Storingen />)} />
        <Route path="diensten/dsg/" element={servicePage(<DSG />)} />
        <Route path="diensten/airco/" element={servicePage(<Airco />)} />
        <Route path="diensten/bandenopslag/" element={servicePage(<Bandenopslag />)} />
        <Route
          path="diensten/autosleutels-inleren/"
          element={servicePage(<AutoSleutels />)}
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
