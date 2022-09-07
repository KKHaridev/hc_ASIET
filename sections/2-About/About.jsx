import React from 'react';
import style from "./About.module.css";
import logo from "../../assets/HC.png"
import Image from 'next/image';


const About = () => {
  return (
    <div className={style.about}>
      <div className={"container" + ' ' + style.box}>
        <h1 className="h1">About</h1>
        <div className={style.contentholder}>
          <div className={style.content}>
            <h3 className={"heading"}>Lorem ih3sum, dolor sit amet consectetur adih3isicing elit. h3raesentium animi dolores voluh3tas h3ariatur ex adih3isci, nulla oh3tio corruh3ti beatae eveniet.</h3>
          </div>
          <div className={style.logo}>
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;