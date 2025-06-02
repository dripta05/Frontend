let inp = document.querySelector('.inp');
let buttons = document.querySelectorAll('.cal-button');

let str="";
let arr = Array.from(buttons);

arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            inp.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            inp.value = str;
        }
        else{
            str += e.target.innerHTML;
            inp.value = str;
        }
    });
});

document.body.addEventListener("keydown", (e) => {
    let key = e.key;

    if (key === "Enter" || key === "=") {
        try {
            str = eval(str);
            inp.value = str;
        } catch {
            inp.value = "Error";
            str = "";
        }
    } else if (key === "Backspace") {
        str = str.slice(0, -1);
        inp.value = str;
    } else if (key === "Escape") {
        str = "";
        inp.value = str;
    } else if (/[\d\+\-\*\/\.\%]/.test(key)) {
        str += key;
        inp.value = str;
    }
});
