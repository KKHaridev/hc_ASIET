import React from 'react';
import style from "./Main.module.css";
import heroimg from "../../assets/heroimg.png"
import Image from 'next/image';


export const Main = () => {
  return (
    <div className={style.main}>
      <div className={"container" + ' ' + style.box}>
        <div className={style.contentholder}>
          <div className={style.content}>
            <h1 className="h1">Create Technology for the Greater Good </h1>
            <h3 className={"heading"}>Hack Club is a community for young eager learners and coders
              to collaborate, build and create innovative projects and ideas. It
              is a wonderful platform for youngsters to get to know each
              other, work together and network effectively.</h3>
            <button className={style.btn}>Join Us</button>
          </div>
          <div className={style.imgbox}>
            <Image src={heroimg} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
