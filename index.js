let btn1 =document.getElementById("btn1")
let form =document.getElementById("form")

btn1.addEventListener("click",function(){
    form.innerHTML=`<form action="/>
    
    <label >First name:</label>
    <input type="text"><br><br>
    <label>Name:</label>
    <input type="text"><br><br>
    <label>Contect:</label>
    <input type="text"><br><br>
    <label>Gmail:</label>
    <input type="text"><br><br><br><br><br>
    <button>Login</button>
  </form>  `

        
    // form.style.backgroundColor='lightblue';
    form.style.display='flex';
    
    
   

    console.log("hello")
})