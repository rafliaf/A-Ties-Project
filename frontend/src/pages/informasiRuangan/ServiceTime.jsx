import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles

import SideBar from '../../components/SideBar';
import DateTimeDisplay from '../../components/DateTimeDisplay';

const dataToDisplay = [
  new Date('11-24-2023'),
  new Date('11-25-2023'),
  new Date('11-26-2023'),
];

const ServiceTime = () => {
  const [value, onChange] = useState(new Date());

  function tileContent({ date, view }) {
    const data = dataToDisplay.find((dtDate) => dtDate === date)
    console.log(data);
  }

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] h-[2036px] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>

        <div className='flex justify-center p-[32px] w-[1200px] mx-auto'>
          <Calendar
            locale='id-ID'
            className='p-[24px] w-[900px] h-[450px] rou shadow-md text-[20px]' // Adjust the width with Tailwind classes
            tileContent={tileContent}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTime;
