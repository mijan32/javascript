// const button =document.querySelectorAll('.button');
// console.log("button",button);
// const body =document.querySelector('body')
// button.forEach((ele)=>{
//     ele.addEventListener('click',(e)=>{
//         console.log(e.target.id);
//          if( e.target.id==='grey'){
//         body.style.backgroundColor= e.target.id
//     } else if( e.target.id==='white'){
//         body.style.backgroundColor=e.target.id
//     } else if( e.target.id==='blue'){
//         body.style.backgroundColor=e.target.id
//     }
//      else if(e.target.id==='yellow'){
//         body.style.backgroundColor=e.target.id
//      }
//     })

// })
const div= document.createElement('div')
console.log(div);
div.id=Math.round(
    Math.random()*10+1
)
div.className="main"
div.setAttribute("title"," generate title")
div.style.backgroundColor='green'
const addText=document.createTextNode("Welcome to js")
div.appendChild(addText)
document.body.appendChild(div)
function addlanguage(lan){
    const li= document.createElement('li')
    li.innerHTML=`${lan}`
    document.querySelector('.language').appendChild(li)
}

