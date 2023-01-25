import Image from "next/image"
import style from "./Card.module.css"
import { AiFillLinkedin } from "react-icons/ai"

export const Card = ({item}) => {
    return (
        <div className={style.card}>
            <h2>{item.title}</h2>
            <Image src={item.image} alt={item.image} />
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer" style={{ fontSize: "40px" }}><AiFillLinkedin /></a>
        </div>
    )
}
