import React from 'react';
import style from "./Contact.module.css";
import logo from "../../assets/HC.png"
import Image from 'next/image';
import { Map } from '../../components';
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi"


export const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={"container" + ' ' + style.box}>
        <div className={style.left}>
          <div className={style.mapHolder}>
            <Map />
          </div>
        </div>
        <div className={style.right}>
          <h1 className="h1">Reach out to Us</h1>
          <div>
            <HiLocationMarker /><h3>Adi Shankara Institute of Engineering and Technology,
            Matoor, Kalady,
            Kerala, India
            683574</h3></div>
          <div>
            <HiMail /><h3><a href="mailto:hackclub@adishankara.ac.in">hackclub@adishankara.ac.in</a></h3>
          </div>
        </div>
      </div>
    </div>
  )
}
