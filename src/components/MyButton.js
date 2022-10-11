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

const btnSize = {
    positive: '100%',
}

const MyButton = ({ text, type, onClick }) => {
    return (
        <button
            css={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '15px',
                whiteSpace: 'nowrap',
                backgroundColor: btnBgColors[type],
                color: btnTextColors[type],
                width: btnSize[type],
                cursor: "pointer",
                fontFamily: 'Nanum Gothic Coding, monospace',
            }}
            onClick={onClick} >
            {text}
        </button >
    )
};


export default MyButton;