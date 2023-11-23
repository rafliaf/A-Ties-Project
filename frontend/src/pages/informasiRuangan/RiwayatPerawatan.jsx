import { useState } from 'react';

import DateTimeDisplay from '../../components/DateTimeDisplay';
import SideBar from '../../components/SideBar';
import { riwayat, add } from '../../assets/images/images';

const thHeads = [
  {
    title: 'No',
  },
  {
    title: 'Tanngal',
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

  // 9
  // 19
  /// 29

  const onPagingButtonClick = (i) => {
    setPage(page + i);
  };

  const startPaging = page * 9 + page;
  const endPaging = page * 9 + 10 + page;

  const data = [
    {
      tanggal: '11-01-2023',
      riwayat: 'Secara Rutin',
      note: 'Pembersihan filter',
    },
    {
      tanggal: '11-02-2023',
      riwayat: 'Secara Rutin',
      note: 'Kerusakan pada flow AC',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon',
    },
    {
      tanggal: '11-01-2023',
      riwayat: 'Secara Rutin',
      note: 'Pembersihan filter',
    },
    {
      tanggal: '11-02-2023',
      riwayat: 'Secara Rutin',
      note: 'Kerusakan pada flow AC',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon',
    },
    {
      tanggal: '11-01-2023',
      riwayat: 'Secara Rutin',
      note: 'Pembersihan filter',
    },
    {
      tanggal: '11-02-2023',
      riwayat: 'Secara Rutin',
      note: 'Kerusakan pada flow AC',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon',
    },
    {
      tanggal: '11-01-2023',
      riwayat: 'Secara Rutin',
      note: 'Pembersihan filter',
    },
    {
      tanggal: '11-02-2023',
      riwayat: 'Secara Rutin',
      note: 'Kerusakan pada flow AC',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon',
    },
    {
      tanggal: '11-01-2023',
      riwayat: 'Secara Rutin',
      note: 'Pembersihan filter',
    },
    {
      tanggal: '11-02-2023',
      riwayat: 'Secara Rutin',
      note: 'Kerusakan pada flow AC',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon',
    },
    {
      tanggal: '11-01-2023',
      riwayat: 'Secara Rutin',
      note: 'Pembersihan filter',
    },
    {
      tanggal: '11-02-2023',
      riwayat: 'Secara Rutin',
      note: 'Kerusakan pada flow AC',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon',
    },
    {
      tanggal: '11-03-2023',
      riwayat: 'Kerusakan tidak terduga',
      note: 'Ganti freon perusak alam',
    },
  ];

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-[80%] ml-[20%]'>
        <div className='ml-[48px] mt-[43px]'>
          <h3 className='text-[20px] font-medium'>Monitoring AC Kampus</h3>
          <DateTimeDisplay />
        </div>
        <div className='flex-col mt-[10px] p-[16px] shadow-md w-[70%] mx-auto'>
          <div className='flex justify-center gap-[12px]'>
            <img src={riwayat} alt='riwayat' />
            <h2 className='font-semibold text-[36px]'>Riwayat Perawatan</h2>
          </div>
          <div className='flex flex-col gap-[8px] border-collapse m-[20px] overflow-hidden'>
              <button className='flex bg-[#577883] self-end p-[8px] font-medium items-center text-white w-[140px] gap-[5px] h-[40px] rounded-xl text-[12px]'>
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
                        className='hover:bg-[#f5f5f5] transition-all duration-300'
                        key={i}
                      >
                        <td className='px-[12px] py-[15px] border-b border-[#ddd]'>
                          {++i}
                        </td>
                        <td className='px-[12px] py-[15px] border-b border-[#ddd]'>
                          {it.tanggal}
                        </td>
                        <td className='px-[12px] py-[15px] border-b border-[#ddd]'>
                          {it.riwayat}
                        </td>
                        <td className='px-[12px] py-[15px] border-b border-[#ddd]'>
                          {it.note}
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
