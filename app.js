const colors = ['green','red','yellow','blue','purple','pink','gray','orange','brown']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')


btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length)
    const mainColor = document.querySelector('#main-color')

    mainColor.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
