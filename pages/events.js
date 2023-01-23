
import React from 'react'
import { events as _events } from '../sections/4-Events/data'
import style from "../styles/Events.module.css";
import Image from 'next/image';

export default function events() {

  return (
    <div className={style.events} id="events">
      <div className={"container"}>

        <h1 className="h1">Events</h1>
        <div className={style.box}>
          {_events.map((item,index)=>
          <div className={style.small} key={index}>
            <img src={item.imgUrl} alt={item.name} /> 
          </div>)}
        </div>
      </div>
    </div>
  )
}
