import { Link, useLocation } from 'react-router-dom';

import { logo, navLink1, navLink2, navLink3 } from '../assets/images/images';
import '../assets/css/SideBar.css';

const sideLinks = [
  {
    id: 1,
    text: 'Dashboard',
    img: navLink1,
    to: '/',
  },
  {
    id: 2,
    text: 'Informasi Ruangan',
    img: navLink2,
    to: '/informasi',
  },
  {
    id: 3,
    text: 'Atur Ruangan',
    img: navLink3,
    to: '/manage',
  },
];

const SideBar = () => {

  return (
    <div className='fixed w-[20%] h-[100vh] bg-primary'>
      <div className='flex flex-col mt-[35px] ml-[37px] mb-[99px] gap-[64px]'>
        <Link to='/'>
          <div className='flex text-white items-center justify-center hover:opacity-60 gap-[8px] ml-[42px] mt-[63px] mr-[79px] cursor-pointer'>
            <img src={logo} alt='logo images' />
            <h3 className='font-bold text-[20px]'>A-TIES</h3>
          </div>
        </Link>
        <div>
          <ul className='flex flex-col gap-[53px]'>
            {sideLinks.map((it) => {
              return (
                <SideLink key={it.id} text={it.text} img={it.img} to={it.to} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;

const SideLink = ({ img, text, to }) => {
  const location = useLocation()
  let active = '';

  if (location.pathname === to) {
    active = 'sb-active';
  }

  return (
    <Link
      className='flex gap-[7px] items-center text-white cursor-pointer hover:opacity-60'
      to={to}
    >
      <img src={img} alt={text} />
      <p className={`text-[14px] sb-underline-animation ${active}`}>{text}</p>
    </Link>
  );
};
