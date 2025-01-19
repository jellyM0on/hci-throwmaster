import volumeBtn from "../../assets/volume.png"
import "./Layout.css"

import { Outlet } from "react-router";

export default function Layout(){
    return(
        <>
            <header>
                <button><img src={volumeBtn} alt="" /></button>
            </header>
            <Outlet/>
        </>
    )
}