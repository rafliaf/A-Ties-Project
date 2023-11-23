import { Route, Routes } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import InformasiRuangan from './pages/informasiRuangan/InformasiRuangan';
import AturRuangan from './pages/AturRuangan';
import Ruangan from './pages/informasiRuangan/Ruangan';
import AcDashboard from './pages/informasiRuangan/AcDashboard';
import ServiceTime from './pages/informasiRuangan/ServiceTime';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/manage' element={<AturRuangan />} />
        <Route path='/informasi' element={<InformasiRuangan />} />
        <Route path='/ruangan/'>
          <Route path=':roomId' element={<Ruangan />} />
        </Route>
        <Route path='/ac-dashboard' element={<AcDashboard />}>
          <Route path=':acId' element={<Ruangan />} />
        </Route>
        <Route path='/ac-dashboard/service' element={<ServiceTime />} />
      </Routes>
    </>
  );
}

export default App;
