"use client";
import Button from "./components/button";
import Input from "../../components/input/";
import theme from "../../../themes";
import Styles from "styled-components";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useRef, useState } from "react";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
})

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
`


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
`


const ForgetPasssowrd = Styles.p`
width: 350px;
margin-top: -10px;
font-size: 18px;
text-align: center;
`

const BackImage = Styles.div`
  background-image: url(/images/select_photo.png);
  margin: 0 auto;
  width: 40%;
  height: 40%;
  color: #fff;

  display: grid;
  place-items: center;
`


const FileInput = Styles.input`
  margin-top: 10px;
`

export default function Photo() {
  const [selectedImage, setSelectedImage]: any = useState<String | null>("")
  const inputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    
    axios
      .post("http://localhost:4000/user/upload-photo", {
        file: selectedImage,
      })
      .then((res) => {
        console.log(res.data);
        router.push("/choose");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 512 * 1024; // 512KB

    if (file && allowedTypes.includes(file.type) && file.size <= maxSize) {
      const reader = new FileReader()

      reader.onload = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
      console.log(file)
    } else {
      setSelectedImage("")
    }
  }

  const handleImageClick = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <Conteiner>

        <ConteinerForm onSubmit={handleSubmit}>
          <Image src="/logo.svg" alt="me" width="128" height="64" />
          <h2 style={{ textAlign: "center"}}>Coloque uma foto para seu perfil ficar mais a sua cara</h2>

          <div onClick={handleImageClick}>

            <Image src={(selectedImage) ? selectedImage : "/images/select_photo.png"}
           alt="me" width="256" height="256"  /> 

            <FileInput style={{ display: "none" }} type="file" ref={inputRef} accept=".jpg, .jpeg, .png" onChange={handleImageChange} />

          </div>

          <Button type="submit">{/* <Link
              href="/choose"
              style={{ textDecoration: "none", color: "#fff" }}
            > */}
              Tudo pronto
            {/* </Link> */}</Button>

          <ForgetPasssowrd>
            <Link
              href="/choose"
              style={{ textDecoration: "underline", color: "#fff" }}
            >
              Pular
            </Link>
          </ForgetPasssowrd>

        </ConteinerForm>
      </Conteiner>
    </>
  )
}
