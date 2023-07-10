'use client'
import Styles from 'styled-components'

const LoginBtt = Styles.button`
box-sizing: border-box;
    margin: 0 auto;
    background: #0C66C6;
    border: none;
    width: 375px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    border-radius: 10px;
`

export default function Button(props: any) {
    return (
        <>
        <LoginBtt 
        type={props.type}
        style={{
            background: (props.isActive) ? '#32405B' : '#0C66C6'
           }}
        >{props.children}</LoginBtt>
        </>
    )
  }