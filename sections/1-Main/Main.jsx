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
            <h3 className={"heading"}>Lorem ih3sum, dolor sit amet consectetur adih3isicing elit. h3raesentium animi dolores voluh3tas h3ariatur ex adih3isci, nulla oh3tio corruh3ti beatae eveniet.</h3>
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
