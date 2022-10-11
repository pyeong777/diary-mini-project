/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const headerWrap = css({
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e2e2e2',
});

const headBtn = css({
    fontSize: '25px',
})

const MyHeader = ({ headText, leftChild, rightChild }) => {
    return (
        <header css={headerWrap}>
            <div>{leftChild}</div>
            <div css={headBtn}>{headText}</div>
            <div>{rightChild}</div>
        </header>
    )
}

export default MyHeader;