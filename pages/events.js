
import React,{useEffect} from 'react'
import { events as _events } from '../sections/4-Events/data'
import style from "../styles/Events.module.css";

export default function events() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}, []);
  
  return (
    <div className={style.events} id="events">
      <div className={"container"}>

        <h1 className="h1">Events</h1>
        <div className={style.box}>
          {_events.map((item,index)=>
          <div className={style.small}>
            <img src={item.imgUrl} alt="Events" placeholder="blur" blurDataURL={item.imgUrl} /> 
          </div>)}
        </div>
      </div>
    </div>
  )
}
