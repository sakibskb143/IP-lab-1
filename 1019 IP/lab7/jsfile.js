const pars = document.querySelector("p.main1");
pars.style.color = "red";
// paras = paragraph
// the code above find the first occurence for p  element with class main , and changes the color;


// to change all occurence
const parsall = document.querySelectorAll("p.main");
for (let i = 0; i < parsall.length; i++) {
    parsall[i].style.color = "green";
}

const title1 = document.querySelector("title");
title1.innerHTML = "Welcome";
// anchor change
let link = document.querySelector("#mylink");
link.href = "https://monkeytype.com/#google_vignette";

// create new element
let para = document.createElement("p");
let nodes = document.createTextNode("This is new content");
para.appendChild(nodes);// adds nodes(text) to para(element)

const div1 = document.querySelector("#new_content");
div1.appendChild(para);//adds para to div(section/position)

// Adding HTMl  element (insertBefore)

// create new value
let para1 = document.createElement("p");
let node = document.createTextNode("This insert Before element paragraph");
para1.appendChild(node); // adds nodes(text) to para(value)

let element = document.querySelector("#div1");
let child = document.querySelector("#p1");

element.insertBefore(para1, child); // inserts para1 before p1 in div


const ele = document.querySelector("#container");
const p1 = document.querySelector("#p1");
ele.insertBefore(para1, p0);

// task : 
let parent = document.querySelector("#container");
let child1 = document.querySelector("#p4");
parent.removeChild(child1);



const button = document.querySelector("button");
button.addEventListener('click', onclick);

function onclick()
{
    let para = document.createElement("p");
    let nodes = document.createTextNode("This is new content");
    para.appendChild(nodes);// adds nodes(text) to para(element)

    const div1 = document.querySelector("#new_content");
    div1.appendChild(para);//adds para to div(section/position)

}