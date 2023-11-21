import { Route, Routes } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import InformasiRuangan from './pages/InformasiRuangan';
import AturRuangan from './pages/AturRuangan';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/manage' element={<AturRuangan />} />
        <Route path='/informasi' element={<InformasiRuangan />} />
      </Routes>
    </>
  );
}

export default App;
