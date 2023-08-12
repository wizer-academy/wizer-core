"use client";
import Button from "../../components/button/";
import Input from "../../components/input/";
import SignAlternative from "./components/signAlternative/";
import SwitchForm from "./components/switchForm/";
import theme from "../../../themes";
import Styles from "styled-components";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const ConteinerForm = Styles.form`
  background: ${theme.BACKGROUND};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: scroll;

  display: grid;
  place-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
 
  @media (min-width: 900px) {
    width: 50%;
  }
`;
const ConteinerMessage = Styles.div`
  width: 0;
  height: 100%;
  color: #fff;
  overflow: scroll;

  display: grid;
  place-items: center;
 
  @media (min-width: 900px) {
    width: 50%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
const BackImage = Styles.div`
  background-image: url(/images/Rectangle_com_imagem.png);
  opacity: 0.2;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: #fff;

  display: grid;
  place-items: center;
`;
const Message = Styles.p`
  position: absolute;
  margin-left: -20vw;
  width: 16%;

  font-size: 40px;
  color: #fff;
 
  @media (max-width: 900px) {
    display: none;
  }
`;

const Conteiner = Styles.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${poppins.style.fontFamily};
  line-height: 40px;

  background: ${theme.BACKGROUND};
  margin: -8px -8px;
  padding: 0;
  height: 100vh;
  width: 100vw;
  color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ForgetPasssowrd = Styles.p`
  width: 350px;
  text-align: right;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    axios
      .post("http://localhost:4000/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        Router.push("/");
      });
  };

  return (
    <>
      <Conteiner>
        <ConteinerMessage>
          <BackImage />
          <Message>
            Você está a um passo do seu <b>futuro</b>
          </Message>
        </ConteinerMessage>

        <ConteinerForm onSubmit={handleSubmit}>
          <Image src="/logo.svg" alt="me" width="128" height="64" />
          <h2>Entre na sua conta</h2>
          <SwitchForm isLogin={true} />

          <Input
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="Digite aqui seu e-mail"
            type="email"
            hasHiddenButton={false}
          >
            E-mail
          </Input>
          <Input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder="Digite aqui sua senha"
            type="password"
            hasHiddenButton={true}
          >
            Senha
          </Input>

          <ForgetPasssowrd>
            <Link
              href="/login"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Esqueceu sua senha?
            </Link>
          </ForgetPasssowrd>

          <Button type="submit">Entrar</Button>
          <SignAlternative />
        </ConteinerForm>
      </Conteiner>
    </>
  );
}
