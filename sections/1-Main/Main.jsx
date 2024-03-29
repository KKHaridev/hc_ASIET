import React,{useEffect,useRef} from 'react';
import style from "./Main.module.css";
import heroimg from "../../assets/heroimg.png"
import Image from 'next/image';
import Typed from "typed.js";


export const Main = () => {
  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Welcome To Official Page Of","Hack Club ASIET"], 
        startDelay: 200,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: false,
    });
    return () => {
        typed.destroy();
    };
}, []);
const el = useRef(null);
  return (
    <div className={style.main}>
      <div className={"container" + ' ' + style.box}>
        <div className={style.contentholder}>
          <div className={style.content}>
            <h1 className="h1"><span ref={el}></span> </h1>
            <h3 className={"heading"}>Hack Club is a community for young eager learners and coders
              to collaborate, build and create innovative projects and ideas. It
              is a wonderful platform for youngsters to get to know each
              other, work together and network effectively.</h3>
              <a href='https://forms.gle/napy7UMhpviTJJnN9' target='_blank' rel="noreferrer">
                <button className={style.btn} >Join Us</button>
              </a>
              &nbsp;&nbsp;
              <a href='https://forms.gle/6SWMYSuXuWJYaaW76' target='_blank' rel="noreferrer">
                <button className={style.dbtn}>Donate Us</button>
              </a>
          </div>
          <div className={style.imgbox}>
            <Image src={heroimg} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )

}
