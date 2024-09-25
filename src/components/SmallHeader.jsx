import Logo from "../assets/images/image-icon1.svg";
function SmallHeader(props){
  return(
    <div class="small_header">
       <div class="container-top">
         <img src={Logo} class="logo-1" alt="logo1"/>   
         <h1 class="title">KNM NEWS</h1>      
         <img src={Logo} class="logo-2" alt="logo2"/>
        </div>
    </div>
   );
}
export default SmallHeader;