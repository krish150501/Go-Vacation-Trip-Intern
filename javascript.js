var packages = document.querySelector('.packages')
var dropdown = document.querySelector('.dropdown-content')
packages.addEventListener('click', () => {
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block'
    } else
        dropdown.style.display = 'none'
})
var person = document.querySelector('.person')
var dropdown1 = document.querySelector('.dropdown-content1')
person.addEventListener('click', () => {
    if (dropdown1.style.display === 'none') {
        dropdown1.style.display = 'block'
    } else
        dropdown1.style.display = 'none'
})


var admbtn = document.querySelector('.adbtn')
var adpbtn = document.querySelector('.adpbtn')
var chmbtn = document.querySelector('.chmbtn')
var chpbtn = document.querySelector('.chpbtn')
var inmbtn = document.querySelector('.inmbtn')
var inpbtn = document.querySelector('.inpbtn')
var submit = document.querySelector('.persubmit')
var ad = document.querySelector('.adult')
var ch = document.querySelector('.children')
var inf = document.querySelector('.infant')

var adult = 0,
    children = 0,
    infant = 0;
admbtn.addEventListener('click', () => {
    if (adult != 0)
        adult--
        ad.innerHTML = `Adult ${adult}`
})
adpbtn.addEventListener('click', () => {
    adult++
    ad.innerHTML = `Adult ${adult}`
})
chmbtn.addEventListener('click', () => {
    if (children != 0)
        children--
        ch.innerHTML = `Childs ${children}`
})
chpbtn.addEventListener('click', () => {
    children++
    ch.innerHTML = `Childs ${children}`
})
inmbtn.addEventListener('click', () => {
    if (infant != 0)
        infant--
        inf.innerHTML = `Infants ${infant}`
})
inpbtn.addEventListener('click', () => {
    infant++
    inf.innerHTML = `infants ${infant}`
})
submit.addEventListener('click', () => {
    dropdown1.style.display = 'none'
    person.value = `total ${adult}/${children}/${infant}`
})