const toggler=document.getElementById('toggleBtn')
const it=document.getElementById('item1')
const nav=document.getElementById('nav')
const search=document.getElementById('search-bar')
const met=document.getElementById('main-img')
let i=false

console.log(screen.width)

toggler.addEventListener("click",()=>{
    it.classList.toggle('active')
    search.classList.toggle('active')
    met.classList.toggle('het')
//    if(i===false && screen.width <= 480)
//    {
//        nav.style.backgroundColor="black"
//        i=true
//    }
//    else {
//     nav.style.backgroundColor="gray"
//     i=false
//    }
})


