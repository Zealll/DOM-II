// Your code goes here
defaultPrev = document.querySelector("nav")
defaultPrev.addEventListener('click', e =>  {
    e.preventDefault()
    
})
defaultPrev.addEventListener('mouseover', e => {
    e.target.style.color = 'red'
})
defaultPrev.addEventListener('mouseout', e => {
    e.target.style.color = 'black'
})


mouseUp = document.querySelectorAll('a')
mouseUp[3].addEventListener('mouseup', e => {
    e.target.style.color = 'green'
})


btnCol = document.querySelectorAll(".btn")

    btnCol[1].addEventListener('dblclick', e => {
       e.target.style.color = 'red'
    })


  
    headers = document.querySelector('header'), 
    headers.addEventListener('keydown', e => {
        e.currentTarget.style.backgroundColor = 'yellow'
        e.stopPropagation();
    })


wheel = document.querySelector('body')
wheel.addEventListener('keypress',e => {
        e.target.style.backgroundColor = 'black'
    })

wheel.addEventListener('keyup', e => {
    e.target.style.backgroundColor = 'white'
})


paragraphs =document.querySelectorAll('p')
paragraphs[0].addEventListener('wheel', e => {
    TweenLite.to(e.target, 2, {text:"I spent Almost 2 HOURS on This!!!!!!!!", ease:Linear.easeNone});
    
})

paragraphs[1].addEventListener('mousemove', e => {
    TweenLite.to(e.target, 2, {text:{value:"This is the new text", delimiter:" "}, ease:Linear.easeNone});

})

image = document.querySelector('.intro img')
image.addEventListener('dragstart', e => {
 image.target.style.visibility = 'hidden'

})
// defaultPrev.addEventListener('auxclick', e => {
//     e.target.style.backgroundColor = 'white'
//     console.log('select')
// })




