import React from 'react';
import style from "./Events.module.css";
import Image from 'next/image';
import { events } from './data';
import { Router, useRouter } from 'next/router';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';






export const Events = () => {
  const router = useRouter();
  return (
    <div className={style.events}>
      <div className={"container"}>

        <h1 className="h1">Events</h1>
        <div className={style.box}>
          {events.slice(0,4).map((item,index)=>item.id===0?<div className={style.big}>
            <img src={item.imgUrl} alt="Events" placeholder="blur" blurDataURL={item.imgUrl} /> 
          </div>
          :
          <div className={style.small}>
            <img src={item.imgUrl} alt="Events" placeholder="blur" blurDataURL={item.imgUrl} /> 
          </div>)}
          <Link href="/events#events" scroll={false}>
          <div className={style.viewmore}>
            <div className={style.more}>
                <h2>Know More <HiChevronRight/></h2>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
