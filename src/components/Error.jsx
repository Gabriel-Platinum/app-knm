import HeaderUsual from "./HeaderUsual";
import SmallHeader from "./SmallHeader";

function Error(){
    return(
        <>   <HeaderUsual/>
            <SmallHeader/>
            <div class="error">
                <div class="container">
                    <h3 class="error-title">Произошла ошибка</h3>
                    <p class="error-decsription">Проверьте подключение к интернету.Возможно сервер отключился или временно не работает. Выйдете на главную страницу.</p>
                    
                </div>
            </div>
        </>
    );
}
export default Error