import Image from "next/image"
import style from "./Card.module.css"

export const Card = ({item}) => {
    return (
        <div className={style.card}>
            <h2>{item.title}</h2>
            <Image src={item.image} alt={item.image} />
            <p>{item.desc}</p>
        </div>
    )
}
