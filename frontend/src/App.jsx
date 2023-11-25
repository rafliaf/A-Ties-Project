import { Route, Routes } from 'react-router-dom';

import InformasiRuangan from './pages/informasiRuangan/InformasiRuangan';
import AturRuangan from './pages/AturRuangan';
import Ruangan from './pages/informasiRuangan/Ruangan';
import AcDashboard from './pages/informasiRuangan/AcDashboard';
import ServiceTime from './pages/informasiRuangan/ServiceTime';
import RiwayatPerawatan from './pages/informasiRuangan/RiwayatPerawatan';
import FormPerawatan from './pages/informasiRuangan/FormPerawatan';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<InformasiRuangan />} />
        <Route path='/manage' element={<AturRuangan />} />
        <Route path='/ruangan/'>
          <Route path=':roomId' element={<Ruangan />} />
        </Route>
        <Route path='/ac-dashboard' element={<AcDashboard />}>
          <Route path=':acId' element={<Ruangan />} />
        </Route>
        <Route path='/ac-dashboard/service' element={<ServiceTime />} />
        <Route path='/ac-dashboard/riwayat-perawatan' element={<RiwayatPerawatan />} />
        <Route path='/ac-dashboard/form-perawatan' element={<FormPerawatan />} />
      </Routes>
    </>
  );
}

export default App;
