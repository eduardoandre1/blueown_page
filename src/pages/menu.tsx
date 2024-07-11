import { useState } from "react"
import MenuStyle from "../styles/menu/menuStyle"
import {Link} from "react-router-dom"


export default  function Menu(){
    const [navbar,setNavbar] = useState("navbar-links")
    const [mobileMenu,setMobileMenu] = useState("mobile-button")
    function toogleNavbar(){
        navbar==="navbar-links"?setNavbar("navbar-links show"):setNavbar("navbar-links")
        mobileMenu==="mobile-button"?setMobileMenu("mobile-button isOpen"):setMobileMenu("mobile-button")
    }

    return (
        <MenuStyle>
            <div className="menu">
                <div className="logo">
                <h1> Blueowl Publicidade</h1>
                </div>
                <ol className={navbar}>
                    <li>
                        <Link to={'/'}>
                        Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to={"/sobre"}>
                        Sobre
                        </Link>
                    </li><li>
                        <Link to={"/Soluções"}>
                        Soluções
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contatos"}>
                        Contatos
                        </Link>
                    </li>
                </ol>
                <div className={mobileMenu} onClick={()=>{
                    toogleNavbar()
                }}>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                </div>
            </div>
        </MenuStyle>
    )
}
