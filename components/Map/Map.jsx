import Image from "next/image"
import style from "./Map.module.css"


export const Map = () => {
    return (
<iframe className={style.map} src="https://www.openstreetmap.org/export/embed.html?bbox=76.4287304878235%2C10.177217327705948%2C76.43227100372316%2C10.179625004998963&amp;layer=mapnik&amp;marker=10.17842116862308%2C76.43050074577332&amp;zoom=100" ></iframe>    )
}
