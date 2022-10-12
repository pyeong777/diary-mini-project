/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const MyHeader = ({ headText, leftChild, rightChild }) => {
    return (
        <header css={headerWrap}>
            <div css={leftWrap}>{leftChild}</div>
            <div css={midText}>{headText}</div>
            <div css={rightWrap}>{rightChild}</div>
        </header>
    )
}

export default MyHeader;

const leftWrap = css({
    display: 'flex',
    width: '25%',
    justifyContent: 'start',
})

const rightWrap = css({
    display: 'flex',
    width: '25%',
    justifyContent: 'end',
})

const headerWrap = css({
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e2e2e2',
});

const midText = css({
    fontSize: '25px',
    width: '50%',
    justifyContent: 'center',
    textAlign: 'center'
})
