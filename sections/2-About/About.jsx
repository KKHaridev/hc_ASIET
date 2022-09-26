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
            <h3 className={"heading"}>Hack Club ASIET was established in August 2020. It is the first
              Hack Club chapter in the Kerala region. It was formed with an
              aim of motivating the students to take up coding and building
              projects and instill technological knowledge among them in an
              enjoyable manner.
              <br />
              <br />
              Hack Club ASIET currently has about 250+ members and
              functions most effectively with active participation from the
              members.</h3>
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