import { useState } from "react"
import logo from "../../assets/logo.jpeg"
import MenuStyle from "../../styles/menu/menuStyle"
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
                <img  src={logo}/>
                <h1> Blueowl Publicidade</h1>
                </div>
                
                <ol className={navbar}>
                    <li>
                        <Link to={'/'}>
                        inicio
                        </Link>
                    </li>
                    <li>
                        <Link to={"/sobre"}>
                        sobre
                        </Link>
                    </li><li>
                        <Link to={"/serviços"}>
                        serviços
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contatos"}>
                        contatos
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
