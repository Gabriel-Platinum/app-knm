import MenuBtn from "../assets/images/menu-btn.svg";
import {Link} from "react-router-dom";
function HeaderUsual (){
    return(
    <header className="header">
        <div className="container-header">
            <Link to="/" className="back-btn">
              <img src={MenuBtn} className="menu-btn" alt="menu_btn"/>
            </Link>
        </div>
    </header>
    );
}
export default HeaderUsual;