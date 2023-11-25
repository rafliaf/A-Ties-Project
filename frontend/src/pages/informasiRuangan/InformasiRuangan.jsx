import { useEffect, useState } from 'react';
import axios from 'axios';

import SideBar from '../../components/SideBar';
import DateTimeDisplay from '../../components/DateTimeDisplay';
import { ac } from '../../assets/images/images';
import { useNavigate } from 'react-router-dom';

const InformasiRuangan = () => {
  const [_dataRuangan, setDataRuangan] = useState([]);

  const getRuanganData = async () => {
    const dataRuangan = await axios({
      method: 'get',
      url: 'http://localhost:8080/rooms',
      responseType: 'json',
    });

    setDataRuangan(dataRuangan.data);
  };

  useEffect(() => {
    getRuanganData();
  }, []);

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] h-[2036px] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>
        <div>
          <div className='flex flex-col items-center mt-[5px] gap-[48px]'>
            <h1 className='font-medium text-[40px] uppercase'>
              Informasi Ruangan
            </h1>
            <div className='flex flex-wrap gap-[34px] items-center w-[130vh] mx-auto'>
              {_dataRuangan.map((it) => {
                return (
                  <InformasiRuanganCard
                    key={it.id}
                    name={it.name}
                    acs={it.ac}
                    id={it.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InformasiRuanganCard = ({ name, acs, id }) => {
  const navigate = useNavigate();

  const onInformasiClick = () => {
    localStorage.setItem('idRuangan', id);
    navigate(`/ruangan/${id}`, {
      state: {
        name,
      },
    });
  };

  return (
    <div
      className='flex flex-col items-center cursor-pointer gap-[12px] px-[20px] py-[24px] w-[524px] h-[363px] bg-[#C9DCE2] rounded-lg shadow-md'
      onClick={onInformasiClick}
    >
      <h3 className='font-medium text-[20px]'>{name}</h3>
      <div className='flex flex-wrap gap-[24px] justify-center'>
        {acs.map((it) => {
          return (
            <AcListCard
              key={it.id}
              status={it.status}
              isOn={it.isOn}
              modelName={it.model}
            />
          );
        })}
      </div>
    </div>
  );
};

const AcListCard = ({ modelName, isOn, status }) => {
  const acModel = modelName.replaceAll('_', ' ');
  const indicatorBg = isOn ? 'bg-[#B8E115]' : 'bg-[#b2c3c9]';

  return (
    <div className='flex gap-[12px] border border-[#b2c3c9] rounded-md p-[18px]'>
      <div className='flex flex-col items-center gap-[12px]'>
        <img className='w-[45px]' src={ac} alt='air conditioner' />
        <p className='text-[12px] font-normal w-[90px] text-center'>
          {acModel}
        </p>
      </div>
      <div>
        <div className={`rounded-[50%] ${indicatorBg} w-[12px] h-[12px]`}></div>
      </div>
    </div>
  );
};

export default InformasiRuangan;
