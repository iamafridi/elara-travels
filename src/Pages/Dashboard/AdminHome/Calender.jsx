// import { useState } from 'react';
// import Calendar from 'react-calendar';


// const Calender = () => {
//     // const [value, onChange] = useState < Value > (new Date());
//     const [date, setDate] = useState(new Date())
//     const onChange = date =>{
//         setDate(date)
//     }
//     return (
//         <div>
//             <Calendar onChange={onChange} value={date} />
//         </div>
//     );
// };



import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const Calender = () => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="landscape" />
            </LocalizationProvider>
        </div>
    );
};




export default Calender;
