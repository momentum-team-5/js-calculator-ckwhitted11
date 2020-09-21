let clear = document.querySelector('.clear')
clear.addEventListener("click", function(){
    display.textContent = ""
})

let number1 = document.querySelector('.number1')
number1.addEventListener("click", function (){
    display.textContent += "1"
    console.log(1)
})

let number2 = document.querySelector('.number2')
number2.addEventListener("click", function (){
    display.textContent += "2"
})

let number3 = document.querySelector('.number3')
number3.addEventListener("click", function (){
    display.textContent += "3"
})

let number4 = document.querySelector('.number4')
number4.addEventListener("click", function (){
    display.textContent += "4"
})

let number5 = document.querySelector('.number5')
number5.addEventListener("click", function (){
    display.textContent += "5"
})

let number6 = document.querySelector('.number6')
number6.addEventListener("click", function (){
    display.textContent += "6"
})


let number7 = document.querySelector('.number7')
number7.addEventListener("click", function (){
    display.textContent += "7"
})


let number8 = document.querySelector('.number8')
number8.addEventListener("click", function (){
    display.textContent += "8"
})


let number9 = document.querySelector('.number9')
number9.addEventListener("click", function (){
    display.textContent += "9"
})

let number0 = document.querySelector('.number0')
number0.addEventListener("click", function (){
    display.textContent += "0"
})

let display= document.querySelector('.output')


let divide = document.querySelector('.operationdivision')
divide.addEventListener("click", function (){
    display.textContent += "/"
})

let multiply = document.querySelector('.operationmultiplication')
multiply.addEventListener("click", function (){
    display.textContent += "*"
})

let subtract = document.querySelector('.operationsubtraction')
subtract.addEventListener("click", function (){
    display.textContent += "-"
})

let addition = document.querySelector('.operationaddition')
addition.addEventListener("click", function (){
    display.textContent += "+"
})


let decimal = document.querySelector('.operationdecimal')
decimal.addEventListener("click", function (){
    display.textContent += "."
})

let equals = document.querySelector(".operationequals")
equals.addEventListener("click", function(){
    let prop = display.innerText
    let answer = eval(prop)
    display.textContent = answer
})