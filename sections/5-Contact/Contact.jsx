import React from 'react';
import style from "./Contact.module.css";
import logo from "../../assets/HC.png"
import Image from 'next/image';
import { Map } from '../../components';


export const Contact = () => {
  return (
    <div className={style.about}>
      <div className={"container" + ' ' + style.box}>
        <div className={style.left}>
          <div className={style.mapHolder}>
            <Map />
          </div>
        </div>
        <div className={style.right}>
          <h1 className="h1">Reach out to Us</h1>

        </div>
      </div>
    </div>
  )
}
