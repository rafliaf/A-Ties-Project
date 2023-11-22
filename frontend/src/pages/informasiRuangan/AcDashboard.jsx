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
import { useLocation } from 'react-router-dom';

import SideBar from '../../components/SideBar';
import DateTimeDisplay from '../../components/DateTimeDisplay';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AcDashboard = ({ acData }) => {
  const { state } = useLocation();

  const labels = Object.keys(state.ac.timestamp);
  const data = Object.values(state.ac.timestamp);

  const cardItemList = [
    {
        id: 1,
        title: 'Status',
        content: state.ac.status,
    },
    {
        id: 2,
        title: 'Service',
        content: state.ac.lastService,
    },
    {
        id: 3,
        title: 'Riwayat Perawatan',
        content: state.ac.lastService,
    }
]
  console.log(state.ac);

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
      <SideBar />
      <div className='flex flex-col gap-[32px] w-[80%] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>
        <div className='flex flex-col gap-[52px] h-[50vh] w-[1280px] mx-auto'>
          <Line
            className='shadow-md px-[32px] py-[20px]'
            height='200px'
            width='200px'
            options={{ maintainAspectRatio: false }}
            data={_data}
          />
          <div className='flex gap-[32px]'>
            {cardItemList.map((it) => {
                return <DashBoardCard key={it.id} title={it.title} content={it.content}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashBoardCard = ({title, content}) => {
  return (
    <div className='flex flex-col shadow-md p-[22px] flex-1 h-[240px] gap-4 cursor-pointer'>
      <div>
        <h3 className='font-semibold'>{title}</h3>
      </div>
      <div className='flex gap-[8px] items-center'>
      <div className={`rounded-[50%] bg-[#B8E115] w-[12px] h-[12px]`}></div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AcDashboard;
