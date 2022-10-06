/** @jsxImportSource @emotion/react */

const btnBgColors = {
    default: '#ececec',
    positive: '#64c964',
    negative: '#fd565f',
}

const btnTextColors = {
    default: 'black',
    positive: 'white',
    negative: 'white'
}

const MyButton = ({ text, type, onClick }) => {
    return (
        <button
            css={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '18px',
                whiteSpace: 'nowrap',
                backgroundColor: btnBgColors[type],
                color: btnTextColors[type],
            }}
            onClick={onClick} >
            {text}
        </button >
    )
};


export default MyButton;