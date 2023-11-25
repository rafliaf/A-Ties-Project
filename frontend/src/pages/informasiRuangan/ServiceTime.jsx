import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles
import { useLocation } from 'react-router-dom';

import SideBar from '../../components/SideBar';
import DateTimeDisplay from '../../components/DateTimeDisplay';
import { service } from '../../assets/images/images';

const ServiceTime = () => {
  const { state: {ac} } = useLocation();
  
  const now = new Date();
  const serviceDate = new Date(ac.lastService);
  const nextService = new Date(serviceDate.setMonth(serviceDate.getMonth() + 1));

  const tileClassName = ({ date, view }) => {
    if (date.toLocaleString() === nextService.toLocaleString()) {
      if (now > nextService) {
        return 'bg-[#E11515] text-white';
      }
      return 'bg-[#B8E115] text-white';
    }

  };

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>

        <div className='flex flex-col gap-2 justify-center p-[32px] shadow-lg w-[900px] mx-auto mt-[20px]'>
          <div className='flex gap-2 justify-center'>
            <img src={service} alt="service" />
            <h1 className='font-semibold text-[36px]'>Service</h1>
          </div>
          
          <Calendar
            className='p-[24px] w-[900px] h-[450px] text-[20px] border-0'
            locale='id-ID'
            tileClassName={tileClassName}
          />

          <div className='flex gap-[8px]'>
            <div className='rounded-[50%] bg-[#B8E115] h-[20px] w-[20px]'></div>
            <p>Service Rutin</p>
          </div>

          <div className='flex gap-[8px]'>
            <div className='rounded-[50%] bg-[#577883] h-[20px] w-[20px]'></div>
            <p>Riwayat Perawatan</p>
          </div>

          <div className='flex gap-[8px]'>
            <div className='rounded-[50%] bg-[#E11515] h-[20px] w-[20px]'></div>
            <p>Perlu Diservice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTime;
