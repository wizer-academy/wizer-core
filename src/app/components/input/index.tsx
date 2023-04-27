'use client'
import Styles from 'styled-components'
import theme from '../../../themes';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RxEyeClosed } from 'react-icons/rx';
import { useState } from 'react';


const LoginInputBox = Styles.div`
    box-sizing: border-box;

    margin-top: 30px;
    padding: 0;
    background: #000
`

const LoginInputLabel = Styles.span`
    position: fixed;
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
    height: 25px;
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

const ButtonInputHidde = Styles.button`
    position: fixed;
    margin-top: 14px;
    margin-left: -50px;
    padding: 0px 10px;
    color: #fff;
    border: none;
    /*pointer-events: none;*/
    background: ${theme.BACKGROUND};
`

export default function Button(props: any) {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div style={{ display: "block" }}>
            <LoginInputBox>

                <LoginInput
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    type={showPassword ? 'text' : props.type} required />
                {(props.hasHiddenButton) ?
                <ButtonInputHidde
                    type="button"
                    onClick={handlePasswordToggle}
                >{showPassword ? <MdOutlineRemoveRedEye size={24} /> : <RxEyeClosed size={24} />}
                </ButtonInputHidde> : <></> }
                <LoginInputLabel>{props.children}</LoginInputLabel>

            </LoginInputBox>
        </div>
    )

}