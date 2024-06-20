import logo from "../../assets/logo.jpeg"
import MenuStyle from "../../styles/menu/menuStyle"
export default  function Menu(){
    return (
        <MenuStyle>
            <nav>
                <img  src={logo}/>
                <ol>
                    <li> inicio </li>
                </ol>
            </nav>
        </MenuStyle>
    )
}
