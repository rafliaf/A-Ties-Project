import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SideBar from '../../components/SideBar';
import DateTimeDisplay from '../../components/DateTimeDisplay';

const Ruangan = () => {
  const { roomId } = useParams();
  const [ruangan, setRuangan] = useState([]);
  const { state } = useLocation();

  const getRuanganDataById = async () => {
    const dataRuangan = await axios({
      method: 'get',
      url: `http://localhost:8080/rooms/${roomId}`,
      responseType: 'json',
    });

    setRuangan(dataRuangan.data.data.acs);
  };

  useEffect(() => {
    getRuanganDataById();
  }, []);

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] h-[2036px] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>
        <div className='flex flex-col items-center mt-[5px] gap-[48px]'>
          <h1 className='font-medium text-[40px] uppercase'>{state.name}</h1>
          <div className='flex flex-wrap gap-[34px] justify-center mx-[150px]'>
            {ruangan.map((it) => {
              return <RuanganCard key={it._id} ac={it} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const RuanganCard = ({ ac }) => {
  const navigate = useNavigate();

  const onAcCardClick = () => {
    localStorage.setItem('idAc', ac._id);
    navigate(`/ac-dashboard/${ac._id}`, {
      state: {
        ac,
      },
    });
  };

  const nextMonth = new Date(ac.lastService);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const now = new Date();

  const totalKwh = Object.values(ac.timestamp).reduce((total, it) => {
    return total += it;
  }, 0);

  const indicatorBg = ac.status === 'Normal' ? 'bg-[#B8E115]' : 'bg-[#E11515]';
  const dateBg = now < nextMonth ? 'bg-[#B8E115]' : 'bg-[#E11515]';

  return (
    <div
      className='flex flex-col items-center cursor-pointer gap-[24px] px-[52px] py-[38px]  bg-[#C9DCE2] rounded-lg shadow-md'
      onClick={onAcCardClick}
    >
      <h3 className='font-medium text-[20px]'>{ac.model}</h3>
      <ul className='flex self-start flex-col gap-[12px]'>
        <div className='flex gap-[8px] items-center'>
          <div className={`rounded-[50%] bg-[#B8E115] w-[12px] h-[12px]`}></div>
          <li>
            Suhu: {ac.suhu}
            <sup>o</sup>C
          </li>
        </div>
        <div className='flex gap-[8px] items-center'>
          <div className={`rounded-[50%] bg-[#B8E115] w-[12px] h-[12px]`}></div>
          <li>Total Pengunaan: {totalKwh} Kwh</li>
        </div>
        <div className='flex gap-[8px] items-center'>
          <div
            className={`rounded-[50%] ${indicatorBg} w-[12px] h-[12px]`}
          ></div>
          <li>Status: {ac.status}</li>
        </div>
        <div className='flex gap-[8px] items-center'>
          <div className={`rounded-[50%] ${dateBg} w-[12px] h-[12px]`}></div>
          <li>Service Selanjutnya: {nextMonth.toLocaleDateString('id-ID', options)}</li>
        </div>
      </ul>
    </div>
  );
};

export default Ruangan;
