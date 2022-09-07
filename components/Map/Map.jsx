import Image from "next/image"
import style from "./Map.module.css"


export const Map = () => {
    return (
        <iframe className={style.map}  scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=76.42933398485185%2C10.177117007424561%2C76.43154144287111%2C10.179524685474446&amp;layer=mapnik&amp;marker=10.178320848720102%2C76.43043637275696"></iframe>
    )
}
