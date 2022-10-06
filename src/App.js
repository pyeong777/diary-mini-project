import './App.css';
import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import GlobalStyle from './styles/global';
/** @jsxImportSource @emotion/react */
import dayjs from "dayjs";
import 'dayjs/locale/ko';
dayjs.locale('ko');

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it);
      break;
    }
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  const nowDate = dayjs().format('YYYY-MM-DD ddd HH:mm:ss');

  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE', data: {
        id: dataId.current,
        date: nowDate,
        content,
        emotion,
      }
    });
    dataId.current += 1;
  }

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  }

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: nowDate,
        content,
        emotion,
      }
    });
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
          <GlobalStyle />
          <BrowserRouter>
            <div css={{
              padding: '20px',
              width: '90vw',
              minHeight: '100vh',
              '@media(min-width: 650px)': {
                width: '640px'
              }
            }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/new' element={<New />} />
                <Route path='/edit' element={<Edit />} />
                <Route path='/diary/:id' element={<Diary />} />
              </Routes>
            </div>
          </BrowserRouter>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
