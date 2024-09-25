import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.svg";
import image4 from "../assets/images/image4.svg";
import image5 from "../assets/images/image5.svg";
import image6 from "../assets/images/image6.svg";
import image7 from "../assets/images/image7.svg";
import image8 from "../assets/images/image8.svg";
import {Link} from "react-router-dom";
function Page1(){
 return(
    <div class="page-1">
            <div className="container">
                <div className="category_row">
                    <Link to="/statistics" className="category">
                        <img src={image1} class="main-icon" alt="image1"/>
                        <p className="cont">статистика</p>
                    </Link>
                    <div class="category">
                        <img src={image2} class="main-icon" alt="image2"/>
                        <p class="cont">данные</p>
                    </div>
                    <Link to="/keys" class="category">
                        <img src={image3} class="main-icon" alt="image3"/>
                        <p class="cont">ключи</p>
                    </Link>
                    <Link to="/meetings" class="category">
                        <img src={image4}  class="main-icon" alt="image4"/>
                        <p class="cont">знакомства</p>
                    </Link>
                    <div class="category">
                        <a href="https://t.me/+XqwFKFQQZMU3ODYy" target="_blank" rel="noopener noreferrer">
                        <img src={image5} class="main-icon" alt="image5"/>
                        <p class="cont">фотобанк</p>
                        </a>
                    </div>
                    <div class="category">
                        <a href="https://2gis.kz/almaty/geo/9430047375167236/76.957476,43.227512" target="_blank" rel="noopener noreferrer">
                        <img src={image6} class="main-icon" alt="image6"/>
                        <p class="cont">локация</p>
                        </a>
                    </div>
                    <div class="category">
                        <img src={image7} class="main-icon" alt="image7"/>
                        <p class="cont">даты</p>
                    </div>
                    <div class="category">
                        <a href="https://daz.asia/ru/" target="_blank" rel="noopener noreferrer">
                        <img src={image8} class="main-icon" alt="image8"/>
                        <p class="cont">газета</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
 );
}
export default Page1;