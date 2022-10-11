import { useCallback, useEffect, useState } from 'react';
import { nowDate, DiaryStateContext } from './../App';
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import DiaryList from '../components/DiaryList';
import { useContext } from 'react';


const Home = () => {
    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]);
    const [curYear, setCurYear] = useState(nowDate.get('y'));
    const [curMonth, setCurMonth] = useState(nowDate.get('M') + 1);
    const headText = `${curYear}년 ${curMonth}월`

    useEffect(() => {
        const firstDay = nowDate.date(1);
        const lastDay = nowDate.date(31);
        setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay))
    }, [diaryList, curMonth])

    useEffect(() => {
        console.log(data);
    }, [data])

    const increaseMonth = useCallback(() => {
        if (curMonth === 12) {
            setCurYear(curYear + 1);
            setCurMonth(1);
        } else {
            setCurMonth(curMonth + 1);
        }
    }, [curMonth, curYear]);

    const decreaseMonth = useCallback(() => {
        if (curMonth === 1) {
            setCurYear(curYear - 1);
            setCurMonth(12);
        } else {
            setCurMonth(curMonth - 1);
        }
    }, [curMonth, curYear]);


    return (
        <div>
            <MyHeader headText={headText}
                leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
                rightChild={<MyButton text={">"} onClick={increaseMonth} />} />
            <DiaryList diaryList={data} />
        </div>
    )
};

export default Home;