import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Title,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import SideBar from '../../components/SideBar';
import DateTimeDisplay from '../../components/DateTimeDisplay';
import { status, service, riwayat } from '../../assets/images/images';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AcDashboard = () => {
  const [_acs, setData] = useState([]);
  const [_display, setDisplay] = useState('hidden');

  const { state } = useLocation();
  const navigate = useNavigate();

  const idRuangan = localStorage.getItem('idRuangan');

  const dropDownClick = () => {
    const display = _display === 'hidden' ? 'flex' : 'hidden';
    setDisplay(display);
  };

  const ddHandle = (acData) => {
    localStorage.setItem('idAc', acData._id)
    navigate(`/ac-dashboard/${acData._id}`, {
      state: {
        ac: acData
      }
    })
  };

  const getAcData = async () => {
    const res = await axios({
      method: 'get',
      url: `http://localhost:8080/rooms/${idRuangan}`,
      responseType: 'json',
    });
    setData(res.data.data.acs);
  };

  useEffect(() => {
    getAcData();
  }, []);

  const now = new Date();
  const nextMonth = new Date(state.ac.lastService);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  const totalKwh = Object.values(state.ac.timestamp).reduce((total, it) => {
    return (total += it);
  }, 0);

  const indicatorBg =
    state.ac.status === 'Normal' ? 'bg-[#B8E115]' : 'bg-[#E11515]';
  const dateBg = now < nextMonth ? 'bg-[#B8E115]' : 'bg-[#E11515]';

  const labels = Object.keys(state.ac.timestamp);
  const data = Object.values(state.ac.timestamp);

  const cardItemList = [
    {
      id: 1,
      title: 'Status',
      content: state.ac.status,
      to: '/ac-dashboard/service',
      _class: 'bg-[#B8E115]',
      img: status,
    },
    {
      id: 2,
      title: 'Service',
      content: state.ac.lastService,
      to: '/ac-dashboard/service',
      _class: `${dateBg}`,
      img: service,
    },
    {
      id: 3,
      title: 'Riwayat Perawatan',
      content: state.ac.lastService,
      to: '/ac-dashboard/riwayat-perawatan',
      _class: 'bg-[#B8E115]',
      img: riwayat,
    },
  ];

  const _data = {
    labels,
    datasets: [
      {
        label: 'Kwh',
        data: data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className='flex'>
      <SideBar>
        <div className='flex flex-col w-[75%]'>
          <div
            className='flex items-center justify-between px-[16px] py-[8px] border rounded-full text-white text-center cursor-pointer hover:opacity-60'
            onClick={dropDownClick}
          >
            <p>AC</p>
            <p className='text-[22px]'>&#8681;</p>
          </div>
          <ul
            className={`${_display} flex-col gap-[16px] w-[85%] rounded-b-md self-center bg-[#425f69] p-[12px]`}
          >
            {_acs.map((it) => {
              // console.log(it);
              return (
                <li
                onClick={() => ddHandle(it)}
                  className='text-white cursor-pointer hover:opacity-70'
                  key={it._id}
                >
                  {it.model}
                </li>
              );
            })}
          </ul>
        </div>
      </SideBar>
      <div className='flex flex-col gap-[32px] w-[80%] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>
        <div className='flex flex-col gap-[52px] w-[1280px] mx-auto'>
          <div className='flex h-[50vh] shadow-md'>
            <div className='w-[75%]'>
              <Line
                className='px-[32px] py-[20px]'
                height='200px'
                options={{ maintainAspectRatio: false }}
                data={_data}
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-semibold'>{state.ac.model}</h3>
              <ul className='flex self-start flex-col gap-[12px]'>
                <div className='flex gap-[8px] items-center'>
                  <div
                    className={`rounded-[50%] bg-[#B8E115] w-[12px] h-[12px]`}
                  ></div>
                  <li>
                    Suhu: {state.ac.suhu}
                    <sup>o</sup>C
                  </li>
                </div>
                <div className='flex gap-[8px] items-center'>
                  <div
                    className={`rounded-[50%] bg-[#B8E115] w-[12px] h-[12px]`}
                  ></div>
                  <li>Total Pengunaan: {totalKwh} Kwh</li>
                </div>
                <div className='flex gap-[8px] items-center'>
                  <div
                    className={`rounded-[50%] ${indicatorBg} w-[12px] h-[12px]`}
                  ></div>
                  <li>Status: {state.ac.status}</li>
                </div>
                <div className='flex gap-[8px] items-center'>
                  <div
                    className={`rounded-[50%] ${dateBg} w-[12px] h-[12px]`}
                  ></div>
                  <li>
                    Service Selanjutnya:{' '}
                    {nextMonth.toLocaleDateString('id-ID', options)}
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className='flex gap-[32px]'>
            {cardItemList.map((it) => {
              return (
                <DashBoardCard
                  key={it.id}
                  title={it.title}
                  content={it.content}
                  _class={it._class}
                  to={it.to}
                  img={it.img}
                  data={state}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashBoardCard = ({ title, content, to, img, data, _class }) => {
  return (
    <Link to={to} className='flex flex-1' state={data}>
      <div className='flex flex-col shadow-md p-[22px] flex-1 h-[240px] gap-4 cursor-pointer hover:opacity-60'>
        <div className='flex gap-[8px] items-center'>
          <img className='w-[18px]' src={img} alt={title} />
          <h3 className='font-semibold'>{title}</h3>
        </div>
        <div className='flex gap-[8px] items-center'>
          <div className={`rounded-[50%] ${_class} w-[12px] h-[12px]`}></div>
          <p>{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default AcDashboard;
