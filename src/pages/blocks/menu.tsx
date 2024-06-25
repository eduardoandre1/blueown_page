import logo from "../../assets/logo.jpeg"
import MenuStyle from "../../styles/menu/menuStyle"
export default  function Menu(){
    return (
        <MenuStyle>
            <nav>
                <div className="logo">
                <img  src={logo}/>
                <h1> Blueowl Publicidade</h1>
                </div>
                
                <ol className="navbar-links">
                    <li>
                        <a>
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
                        <a>
                        contatos
                        </a>
                    </li>
                </ol>
                <div className="mobile-button" onClick={()=>{
                    document.querySelector(".navbar-links").classList.toggle("show")
                    document.querySelector(".mobile-button").classList.toggle("isOpen")
                }}>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                    <div className="mobile-button-line"></div>
                </div>
            </nav>
        </MenuStyle>
    )
}
