'use client'
import Styles from 'styled-components'

const LoginBtt = Styles.button`
box-sizing: border-box;
    margin: 0 auto;
    background: #0C66C6;
    border: none;
    width: 375px;
    height: 40px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    border-radius: 10px;
`

export default function Button(props: any) {
    return (
        <>
        <LoginBtt type={props.type}>{props.children}</LoginBtt>
        </>
    )
  }