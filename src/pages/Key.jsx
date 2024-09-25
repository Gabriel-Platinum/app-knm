import ImageKey from "../assets/images/image_key.png";
import ImgSec from "../assets/images/img-security.jpeg";
import ImgKellner from "../assets/images/img-kellner.jpeg";
import SmallHeader from "../components/SmallHeader";
import HeaderUsual from "../components/HeaderUsual";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingKeys from "../components/LoadingKeys";
import Error from "../components/Error";

//переменная keys будет читать данные с бд, сначала устанавливаем setKeys на пустой объект {}, создаем запрос в бд с помощью fetch. 
//(response.data[0]) будет браться первый элемент массива. затем у нас главный компонент в return.

function Key() {
    const [keys, setKeys] = useState({});
    const [isLoading,setIsLoading]=useState(false);
    const[isError, setIsError]=useState(false);
    
    useEffect(() => {
        async function fetchKeys() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://272aac76dcdd1624.mokky.dev/keys');
                setKeys(response.data[0]);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchKeys();
    }, []);
    if(isError){
        return <Error/>
    }
    
    return (
        <>  
            <HeaderUsual />
            <SmallHeader />   
            {isLoading ? (<LoadingKeys/>):(
             <>   
                <div className="page-3">
                    <div className="container">
                        <div className="image_key">
                            <img src={ImageKey} className="image-key" alt="image key" />
                        </div>
                        <div className="text-keys">
                            <p className="text_keys">{keys.textKeys}</p>
                        </div>
                        <div className="center-row">
                            <div className="kellner">
                                <img src={ImgKellner} className="img-kellner" alt="img-kellner" />
                            </div>
                            <div className="security">
                                <img src={ImgSec} className="img-security" alt="img-security" />
                            </div>
                        </div>
                        <div className="text-main_case">
                            <p>{keys.textMain}</p>
                        </div>
                    </div>
                </div>
             </>
           )}
        </>
    );
}

export default Key;

