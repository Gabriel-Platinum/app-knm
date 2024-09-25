import { useEffect, useState } from "react";
import ImgStat from "../assets/images/image-stat.png";
import HeaderUsual from "../components/HeaderUsual";
import SmallHeader from "../components/SmallHeader";
import axios from "axios";
import LoadingStatistics from "../components/LoadingStatistics";
import Error from "../components/Error";

function Statistics() {
    const [statistics, setStatistics] = useState({}); 
    const[IsLoading, setIsLoading]= useState(false);
    const[isError, setIsError]=useState(false);

    useEffect(() => {
        async function fetchStatistics() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://272aac76dcdd1624.mokky.dev/statistics'); 
                setStatistics(response.data[0]); 
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchStatistics();
    }, []);
    if(isError){
        return <Error/>
    }

    return (
        <>
            <HeaderUsual />
            <SmallHeader />
            {IsLoading ? (<LoadingStatistics/>):(
            <>
                <div className="page-2">
                    <div className="container">
                        <div className="text-name">
                            <h2 className="text_name">Статистика</h2>
                        </div>
                        <div className="top-text">
                            <p className="text_top">Статистика посещений немецкого дома среди молодежи: Обзор и Тренды</p>
                        </div>
                        <div className="main-text">
                            <p className="text_main">{statistics.text}</p> 
                        </div>
                        <div className="image-statistics">
                            <img src={ImgStat} className="image_stat" alt="img-stat" />
                        </div>
                    </div>
                </div>
            </>
            )}

        </>
    );
}

export default Statistics;

