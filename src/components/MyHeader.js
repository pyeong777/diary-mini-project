/** @jsxImportSource @emotion/react */

const MyHeader = ({ headText, leftChild, rightChild }) => {
    return (
        <header
            css={{
                padding: '20px 0',
                margin: '0px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #e2e2e2',
            }}>
            <div>{leftChild}</div>
            <div
                css={{ fontSize: '25px', }}>{headText}</div>
            <div>{rightChild}</div>
        </header>
    )
}

export default MyHeader;