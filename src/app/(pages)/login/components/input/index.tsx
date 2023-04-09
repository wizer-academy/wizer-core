'use client'
import Styles from 'styled-components'
import theme from '../../../../../themes';

const LoginInputBox = Styles.div`
    box-sizing: border-box;

    margin-top: 35px;
    padding: 0;
    background: #000
`

const LoginInputLabel = Styles.span`
    position: absolute;
    margin-top: -20px;
    margin-left: -350px;
    padding: 0px 10px;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    background: ${theme.BACKGROUND};
`

const LoginInput = Styles.input`
    width: 350px;
    height: 30px;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 1);
    background: ${theme.BACKGROUND};
    border-radius: 5px;
    outline: none;
    color: #fff;

    &::placeholder {
    color: #6A6D7178;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
`

export default function Button(props: any) {
    return (
        <LoginInputBox>
            <LoginInput placeholder={props.placeholder} type={props.type} required/>
            <LoginInputLabel>{props.children}</LoginInputLabel>
        </LoginInputBox>
    )
  }