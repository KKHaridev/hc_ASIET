import React from 'react';
import style from "./Cards.module.css";
import { Card } from '../../components';
import workshop from "../../assets/Workshop.png"
import skill from "../../assets/Skill.png"


const reasons = [
  {
    title: "Networking",
    image: workshop,
    desc: "Hack Club helps its members to  interact and develop professional and social contacts with other communities."
  },
  {
    title: "Workshops",
    image: workshop,
    desc: "We provide  workshops on various topics both online and offline so as to impart knowledge regarding several domains."
  },
  {
    title: "Skill Development",
    image: skill,
    desc: "Its quite a misinformation that hack club only improves coding skills...But no, it help members improve both technical and non technical skills."
  },
]

export const Cards = () => {
  return (
    <div className={style.reasons}>
      <div className="container">
        <h1>Why Join Hack Club ?</h1>
        <div className={style.box}>
        {reasons.map((item) => <Card item={item} />)}
        </div>
        <button className={style.btn}>Join HackClub</button>

      </div>
    </div>
  )
}