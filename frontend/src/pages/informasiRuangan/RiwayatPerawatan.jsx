import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import DateTimeDisplay from '../../components/DateTimeDisplay';
import SideBar from '../../components/SideBar';
import { riwayat, add } from '../../assets/images/images';

const thHeads = [
  {
    title: 'No',
  },
  {
    title: 'Tanggal',
  },
  {
    title: 'Riwayat',
  },
  {
    title: 'Catatan',
  },
];

const RiwayatPerawatan = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const getNotesData = async () => {
    const idAc = localStorage.getItem('idAc');

    const res = await axios({
      method: 'get',
      url: `http://localhost:8080/acs/${idAc}`,
      responseType: 'json',
    });

    setData(res.data.data.report);
  };

  useEffect(() => {
    getNotesData();
  }, []);

  const navigate = useNavigate();
  // 9
  // 19
  /// 29

  const onPagingButtonClick = (i) => {
    setPage(page + i);
  };

  const onClickAddNote = () => {
    navigate('/ac-dashboard/form-perawatan', {
      state: {
        mode: 'add',
      },
    });
  };

  const onRowClick = (data) => {
    navigate('/ac-dashboard/form-perawatan', {
      state: {
        mode: 'edit',
        data: data,
      },
    });
  };

  const startPaging = page * 9 + page;
  const endPaging = page * 9 + 10 + page;

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>
        <div className='flex-col p-[16px] shadow-md w-[70%] mx-auto'>
          <div className='flex justify-center gap-[12px]'>
            <img src={riwayat} alt='riwayat' />
            <h2 className='font-semibold text-[36px]'>Riwayat Perawatan</h2>
          </div>
          <div className='flex flex-col gap-[8px] border-collapse m-[20px] overflow-hidden'>
            <button
              className='flex bg-[#577883] self-end p-[8px] font-medium items-center text-white w-[140px] gap-[5px] h-[40px] rounded-xl text-[12px]'
              onClick={onClickAddNote}
            >
              <img src={add} alt='tambah' />
              Buat Catatan
            </button>
            <table className='text-center w-[100%]'>
              <thead>
                <tr>
                  {thHeads.map((it, i) => {
                    return (
                      <th
                        key={i}
                        className='px-[12px] py-[15px] border-b border-[#ddd] bg-[#f8f8f8]'
                      >
                        {it.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((it, i) => {
                  if (i >= startPaging && i < endPaging) {
                    return (
                      <tr
                        className='hover:bg-[#f5f5f5] transition-all duration-300 cursor-pointer'
                        key={i}
                        onClick={() =>
                          onRowClick({
                            tanggal: it.tanggal,
                            riwayat: it.riwayat,
                            catatan: it.catatan,
                            _id: it._id,
                          })
                        }
                      >
                        <td className='px-[12px] py-[15px] border-b border-[#ddd]'>
                          {++i}
                        </td>
                        <td className='px-[12px] py-[15px] border-b border-[#ddd] text-left'>
                          {it.tanggal}
                        </td>
                        <td className='px-[12px] py-[15px] border-b border-[#ddd] text-left'>
                          {it.riwayat}
                        </td>
                        <td className='px-[12px] py-[15px] text-clip border-b border-[#ddd] text-left'>
                          {it.catatan}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
            <div className='flex gap-[24px] justify-center'>
              <div
                className='text-center cursor-pointer w-[40px] text-[24px] h-[40px] border border-gray-200'
                onClick={() => {
                  if (page !== 0) onPagingButtonClick(-1);
                }}
              >
                &larr;
              </div>
              <div
                className='text-center cursor-pointer w-[40px] text-[24px] h-[40px] border border-gray-200'
                onClick={() => {
                  if (page !== Math.ceil(data.length / 10) - 1)
                    onPagingButtonClick(1);
                }}
              >
                &rarr;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPerawatan;
