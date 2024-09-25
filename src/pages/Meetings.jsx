import SmallHeader from "../components/SmallHeader";
import HeaderUsual from "../components/HeaderUsual";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingMet from "../components/LoadingMet";
import Error from "../components/Error";
// Компонент для отображения отдельного человека, дочерний
function Person({ person }) {
    return (
        <div className="frame">
            <div className="cont-foto">
                <img src={person.image} className="item-foto" alt={person.name} />
            </div>
            <p className="text-met">{person.name}</p>
        </div>
    );
}

// Главный компонент, который берет инфу с БД
function Meetings() {
    const [people, setPeople] = useState([]);
    const[IsLoading,setIsLoading]=useState(false);
    const[isError, setIsError]=useState(false);
    useEffect(() => {
        async function fetchPeople() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://272aac76dcdd1624.mokky.dev/people');
                setPeople(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchPeople();
    }, []);
    if(isError){
        return <Error/>
    }

    return (
        <>
            <HeaderUsual />
            <SmallHeader />
            {IsLoading ? (<LoadingMet/>):
          (
            <>
              <div className="page-4">
                    <div className="container">
                        <div className="top-text_met">
                            <p className="toptext_met">Знакомства</p>
                        </div>
                        <div className="meetings-row">
                            {people.map((person) => (
                                <Person key={person.id} person={person} />
                            ))}
                        </div>
                    </div>
              </div>
            </>
           )}
        </>
    );
}

export default Meetings;
