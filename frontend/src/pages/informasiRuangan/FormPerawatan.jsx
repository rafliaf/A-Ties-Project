import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import SideBar from '../../components/SideBar';
import DateTimeDisplay from '../../components/DateTimeDisplay';

import { form, add } from '../../assets/images/images';

const FormPerawatan = () => {
  const [formData, setFormData] = useState({
    tanggal: '',
    riwayat: '',
    note: '',
  });

  const navigate = useNavigate();
  const { state } = useLocation();

  let buttonText = state.mode === 'add'? 'Buat Catatan' : 'Perbarui Data';

  useEffect(() => {
    if (state.mode === 'edit') {
      const date = new Date(state.data.tanggal);
      date.setDate(date.getDate() + 1);

      setFormData({...state.data, tanggal: date.toISOString().slice(0, 10)});
    }
  }, []);


  const postDataApi = async (data) => {
    const idRuangan = localStorage.getItem('idRuangan');
    const idAc = localStorage.getItem('idAc');
    const mode = state.mode === 'add'? 'post' : 'put'; 

    const res = await axios({
      method: mode,
      url: `http://localhost:8080/notes/ruangan/${idRuangan}/ac/${idAc}`,
      data: data,
    });

    if (res.status === 200) {
      navigate('/ac-dashboard/riwayat-perawatan');
    }
  };

  const onTanggalChange = (e) => {
    setFormData({ ...formData, tanggal: e.target.value });
  };

  const onRiwayatChange = (e) => {
    setFormData({ ...formData, riwayat: e.target.value });
  };

  const onCatatanChange = (e) => {
    setFormData({ ...formData, note: e.target.value });
  };

  const addNoteHandle = (e) => {
    const formattedDate = new Date(formData.tanggal).toLocaleDateString();
    postDataApi({ ...formData, tanggal: formattedDate });

    e.preventDefault();
  };

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] h-[2036px] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>
        <div className='flex flex-col gap-[24px] w-[65%] p-[42px] py-[24px] mt-[32px] shadow-md mx-auto'>
          <div className='flex justify-center gap-[12px]'>
            <img src={form} alt='form' />
            <h2 className='font-semibold text-[36px]'>Riwayat Perawatan</h2>
          </div>
          <form className='flex flex-col gap-[12px]' action='submit'>
            <div className='flex flex-col gap-[6px] w-[440px]'>
              <label className='font-medium text-[18px]' htmlFor='dateinput'>
                Tanggal
              </label>
              <input
                className='py-[12px] pl-[24px] pr-[14px] border border-[#D1D1D1] rounded-md'
                type='date'
                onChange={onTanggalChange}
                value={formData.tanggal}
                id='dateinput'
              />
            </div>
            <div className='flex flex-col gap-[6px] w-[900px]'>
              <label className='font-medium text-[18px]' htmlFor='historyinput'>
                Riwayat
              </label>
              <input
                className='py-[12px] pl-[24px] pr-[14px] border border-[#D1D1D1] rounded-md'
                type='text'
                onChange={onRiwayatChange}
                id='historyinput'
                value={formData.riwayat}
              />
            </div>
            <div className='flex flex-col gap-[6px] w-[900px]'>
              <label className='font-medium text-[18px]' htmlFor='noreArea'>
                Catatan
              </label>
              <textarea
                className='py-[12px] h-[170px] pl-[24px] pr-[14px] border border-[#D1D1D1] rounded-md'
                onChange={onCatatanChange}
                value={formData.note}
                id='noreArea'
              />
            </div>
            <button
              className='flex bg-[#577883] self-end p-[8px] font-medium items-center text-white w-[140px] gap-[5px] h-[40px] rounded-xl text-[12px]'
              onClick={addNoteHandle}
            >
              <img src={add} alt='tambah' />
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPerawatan;
