
const addbtn = document.querySelector("button");
addbtn.addEventListener('click',onclick);

function addTwoNumbr(x,y){
    console.log(x+y);
    return (x+y);

}
function onclick(){
    let num1 = document.querySelector("#a").value;
    let num2 = document.querySelector("#b").value;
    let result = addTwoNumbr(parseInt(num1),parseInt(num2));
    let resulttag = document.querySelector("#result")
    resulttag.textContent = a + '+' + num2 + '=' +result;
}