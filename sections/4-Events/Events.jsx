import React from 'react';
import style from "./Events.module.css";
import Image from 'next/image';
import logo from "../../assets/Web.jpeg";
import reading from "../../assets/read.jpeg";
import python from "../../assets/python.jpeg";
import ai from "../../assets/ai.jpeg";
import product from "../../assets/productdesign.jpeg";





export const Events = () => {
  return (
    <div className={style.events}>
      <div className={"container"}>

        <h1 className="h1">Events</h1>
        <div className={style.box}>
          <div className={style.big}>
            <Image src={ai} alt="logo" /> 
          </div>
          <div className={style.small}>
            <Image src={logo} alt="logo" /> 
          </div>
          <div className={style.small}>
            <Image src={python} alt="logo" /> 
          </div>
          <div className={style.small}>
            <Image src={reading} alt="logo" /> 
          </div>
          <div className={style.small}>
            <Image src={product} alt="logo" /> 
          </div>
        </div>
      </div>
    </div>
  )
}
