/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import MyButton from './MyButton'

const DiaryItem = ({ id, emotion, content, date }) => {
    const imgWrapper = css({
        cursor: 'pointer',
        minWidth: '120px',
        height: '80px',
        borderradius: '5px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: emotionBgColor[emotion],
    })

    const navigate = useNavigate();

    const goDetail = () => {
        navigate(`/diary/${id}`);
    }

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    return (
        <div css={itemWrapper} >
            <div css={imgWrapper} onClick={goDetail}>
                <img css={emotionImg} src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
            </div>
            <div css={infoWrapper} onClick={goDetail}>
                <div css={dateWrapper}>{date}</div>
                <div css={contentWrapper}>{content.slice(0, 25)}</div>
            </div>
            <div css={btnWrapper}>
                <MyButton text={"수정하기"} onClick={goEdit} />
            </div>
        </div >
    )

}

export default DiaryItem;

const emotionBgColor = {
    1: '#64c964',
    2: '#9dd772',
    3: '#fdce17',
    4: '#fd8446',
    5: '#fd565f',
}

const itemWrapper = css({
    padding: '15px 0',
    borderBottom: '1px solid #e2e2e2',
    display: 'flex',
    justifyContent: 'space-between',
})

const emotionImg = css({
    width: '50%',
})

const infoWrapper = css({
    flexGrow: '1',
    marginLeft: '20px',
    cursor: 'pointer',
})

const dateWrapper = css({
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '10px 0',
})

const contentWrapper = css({
    fontSize: '15px',
})

const btnWrapper = css({
    minWidth: '70px',
})
