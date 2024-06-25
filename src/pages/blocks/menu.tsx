import { useState } from "react"
import logo from "../../assets/logo.jpeg"
import MenuStyle from "../../styles/menu/menuStyle"
export default  function Menu(){
    const [navbar,setNavbar] = useState("navbar-links")
    const [mobileMenu,setMobileMenu] = useState("mobile-button")
    function toogleNavbar(){
        navbar==="navbar-links"?setNavbar("navbar-links show"):setNavbar("navbar-links")
        mobileMenu==="mobile-button"?setMobileMenu("mobile-button isOpen"):setMobileMenu("mobile-button")
    }

    return (
        <MenuStyle>
            <nav>
                <div className="logo">
                <img  src={logo}/>
                <h1> Blueowl Publicidade</h1>
                </div>
                
                <ol className={navbar}>
                    <li>
                        <a href="/">
                        inicio
                        </a>
                    </li>
                    <li>
                        <a>
                        sobre
                        </a>
                    </li><li>
                        <a>
                        serviços
                        </a>
                    </li>
                    <li>
                        <a href="/contatos">
                        contatos
                        </a>
                    </li>
                </ol>
                <div className={mobileMenu} onClick={()=>{
                    toogleNavbar()
                }}>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                </div>
            </nav>
        </MenuStyle>
    )
}
