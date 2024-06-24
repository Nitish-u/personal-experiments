const set = document.querySelector('input[name="setPassward"]');
const cnfrm = document.querySelector('input[name="confirmPassward"]');
const regBtn = document.querySelector("button");
cnfrm.addEventListener("keyup",()=>{
    const cnfrmValue = cnfrm.value;
    const setValue = set.value;
    const setValForComp = setValue.slice(0,cnfrmValue.length);
    if(cnfrmValue != setValForComp){
        cnfrm.style.backgroundColor = "red";
        regBtn.setAttribute("disabled","true")
    }else{
        cnfrm.style.backgroundColor = "white";
        regBtn.removeAttribute("disabled")
    }
})