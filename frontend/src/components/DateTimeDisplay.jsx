import { useEffect, useState } from 'react';

const DateTimeDisplay = () => {
    const [date, setDate] = useState(new Date())
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })

    return (
        <div className='flex gap-[8px]'>
            <p>{date.toLocaleDateString('id-ID', options)}</p>
            <p>{date.toLocaleTimeString()}</p>
        </div>       
    )
};

export default DateTimeDisplay;
