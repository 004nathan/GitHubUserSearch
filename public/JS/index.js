var themeVar = 0;
const getUser = ()=>{
    let value = document.getElementsByClassName('inputBoxSearch')[0].value;
    if(value !="" && value!= undefined){
        console.log(true)
        window.location.href=`/index?user=${value}`;
    }
}
    document.addEventListener('keydown',function(event){
       if(event.keyCode == 13){
        getUser();
        }
    })
    function changeTheme(item) 
    {
      let theme = document.getElementById("displayMode");
      if (themeVar == 0) 
      {
            theme.attributes.href.value = "/Css/index.css";
            item.attributes.src.value = "/assets/icon-sun.svg";
            themeVar++;
      }
      else
      {
            theme.attributes.href.value = "/Css/index2.css";
            item.attributes.src.value = "/assets/icon-moon.svg";
            themeVar = 0 ;
      }
      
    }
