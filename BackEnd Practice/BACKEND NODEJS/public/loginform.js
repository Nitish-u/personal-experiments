const alertBox = document.querySelector(".alert");
const messageBox = document.querySelector(".message");
const time = document.querySelector(".time");
function getCookieValue(cookieName) {
    const cookies = document.cookie;
    const cookieArray = cookies.split(';');
  
    for (const cookie of cookieArray) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null; // Cookie not found
  }
  const message = getCookieValue('msg');
if(message){
    messageBox.innerText = message;
  }else{
    messageBox.innerText = `Welcome to backend practice😎`;
  }
  setTimeout(()=>{
      alertBox.style.display = "block";
      time.classList.add("anime");
  },500);
  setTimeout(()=>{
      alertBox.style.display = "none";  
      time.classList.remove("anime");
  },5500);