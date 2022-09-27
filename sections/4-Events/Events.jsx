import React from 'react';
import style from "./Events.module.css";
import Image from 'next/image';
import img1 from "../../assets/ai.jpeg";
import img2 from "../../assets/Web.jpeg";
import img4 from "../../assets/read.jpeg";
import img3 from "../../assets/python.jpeg";
import img5 from "../../assets/productdesign.jpeg";





export const Events = () => {
  return (
    <div className={style.events}>
      <div className={"container"}>

        <h1 className="h1">Events</h1>
        <div className={style.box}>
          <div className={style.big}>
            <Image src={img1} alt="Events" placeholder="blur" blurDataURL={img1} /> 
          </div>
          <div className={style.small}>
            <Image src={img2} alt="Events" placeholder="blur" blurDataURL={img2} /> 
          </div>
          <div className={style.small}>
            <Image src={img3} alt="Events" placeholder="blur" blurDataURL={img3} /> 
          </div>
          <div className={style.small}>
            <Image src={img4} alt="Events" placeholder="blur" blurDataURL={img4} /> 
          </div>
          <div className={style.small}>
            <Image src={img5} alt="Events" placeholder="blur" blurDataURL={img5} /> 
          </div>
        </div>
      </div>
    </div>
  )
}
