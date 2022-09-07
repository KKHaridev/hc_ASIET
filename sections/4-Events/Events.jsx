import React from 'react';
import style from "./Events.module.css";
import Image from 'next/image';
import logo from "../../assets/HC.png"




export const Events = () => {
  return (
    <div className={style.events}>
      <div className={"container"}>

        <h1 className="h1">Events</h1>
        <div className={style.box}>
          <div className={style.big}>
            {/*<Image src={logo} alt="logo" /> */}
          </div>
          <div className={style.small}>
            {/*<Image src={logo} alt="logo" /> */}
          </div>
          <div className={style.small}>
            {/*<Image src={logo} alt="logo" /> */}
          </div>
          <div className={style.small}>
            {/*<Image src={logo} alt="logo" /> */}
          </div>
          <div className={style.small}>
            {/*<Image src={logo} alt="logo" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
