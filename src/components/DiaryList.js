/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';
import DiaryItem from './DiaryItem';

const sortOptionList = [
    { value: 'latest', name: '최신순' },
    { value: 'oldest', name: '오래된순' },

];

const filterOptionList = [
    { value: 'all', name: '전부다' },
    { value: 'good', name: '좋은 감정만' },
    { value: 'bad', name: '안좋은 감정만' },
]

const ControlMenu = ({ value, onChange, optionList }) => {
    return (
        <select css={selectBox} value={value} onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it, idx) => (
                <option key={idx} value={it.value}>
                    {it.name}
                </option>))}
        </select>
    );
}

const DiaryList = ({ diaryList }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState('all');

    const getProcessedDiaryList = () => {

        const filterCallback = (item) => {
            if (filter === 'good') {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        }

        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);

            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));

        const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallback(it));
        const sortedList = filteredList.sort(compare);
        return sortedList;
    }

    return (
        <div>
            <div css={listContainer}>
                <div>
                    <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
                    <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
                </div>
                <div css={btnBox}>
                    <MyButton type={'positive'} text={'새 일기쓰기'} onClick={() => navigate('./new')} />
                </div>
            </div >
            {
                getProcessedDiaryList().map((it) => (
                    <DiaryItem key={it.id} {...it} />
                ))
            }
        </div >
    );
};

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;

const listContainer = css({
    marginTop: '20px',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
})

const selectBox = css({
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ececec',
    padding: '10px 20px',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Nanum Gothic Coding, monospace',
})

const btnBox = css({
    flexGrow: '1',
})