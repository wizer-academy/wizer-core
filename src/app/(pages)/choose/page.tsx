"use client";
import Button from "./components/button";
import Input from "../../components/input/";
import theme from "../../../themes";
import Styles from "styled-components";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
})

//---------------------------

interface courseModel {
  id: number
  name: String
}


const courses: courseModel[] = [
  { id: 1, name: 'Dados' },
  { id: 2, name: 'Software' },
  { id: 3, name: 'Programação' },
  { id: 4, name: 'Front-end' },
  { id: 5, name: 'Devops' },
  { id: 6, name: 'UI/UX Design' },
  { id: 7, name: 'Mobile' },
  { id: 8, name: 'Inovação' },
  { id: 9, name: 'Gestão' },
  { id: 10, name: 'People RH' },
]

const CourseSelectionContainer = Styles.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

const CourseCard = Styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 60px;
  margin: 10px 20px;
  height: 50px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ isSelected }: any) => (isSelected ? '#0C66C6' : theme.BACKGROUND)};
  color: #fff;
`


//---------------------

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
    width: 80%;
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



export default function Photo() {
  const [selectedCourses, setSelectedCourses] = useState<number[]>([])
  const router = useRouter();

  const handleCourseSelection = (courseId: number) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId))
    } else {
      if (selectedCourses.length < 3) {
        setSelectedCourses([...selectedCourses, courseId])
      }
      else {
        console.log(selectedCourses);
      }
    }
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log("courses id:", selectedCourses)

    axios
      .post("http://localhost:4000/user/interests", {
        interests: selectedCourses,
      })
      .then((res) => {
        console.log(res.data);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Conteiner>
        <ConteinerForm onSubmit={handleSubmit}>
          <div style={{ width: "100%" }}>
            <Image style={{ justifyContent: "start" }} src="/logo.svg" alt="me" width="128" height="64" />
          </div>
          <h2 style={{ textAlign: "center" }}>Selecione até 3 cursos que você tem interesse em aprender</h2>


          <CourseSelectionContainer>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                onClick={() => handleCourseSelection(course.id)}
                style={{
                  backgroundColor: (selectedCourses.includes(course.id) ? '#0C66C6' : theme.BACKGROUND),
                  borderColor: (selectedCourses.includes(course.id) ? '#0C66C6' : '#fff')
                }}
              >
                {course.name}
              </CourseCard>
            ))}
          </CourseSelectionContainer>








          <Button type="submit"
            isActive={(selectedCourses.length < 3)}

          ><Link
          href="/"
            
            style={{
              textDecoration: "none",
              color: "#fff",
              
              //pointerEvents: (selectedCourses.length <= 3) ? "none" : "auto"
              pointerEvents: "none"
            }}
          >
              Tudo pronto!
            </Link></Button>


          <ForgetPasssowrd>
            <Link
              href="/"
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
