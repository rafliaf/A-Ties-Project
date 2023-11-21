import SideBar from '../components/SideBar';

const DashBoard = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] h-[2036px] ml-[20%]'>
        <p>Dashboard</p>
      </div>
    </div>
  );
};

export default DashBoard;
