import React from 'react';
import style from "./Cards.module.css";
import { Card } from '../../components';
import workshop from "../../assets/Workshop.png"
import skill from "../../assets/Skill.png"


const reasons = [
  {
    title: "Networking",
    image: workshop,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    title: "Workshops",
    image: workshop,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    title: "Skill Development",
    image: skill,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
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