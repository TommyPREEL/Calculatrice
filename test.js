//import {add, sub, mul, div} from 'calculatrice'
import {add, sub, mul, div} from 'functions'
window.addEventListener('load', (event) => {

    let n1 = 0
    let n2 = 1
    let n3 = 2

    let set_add = 1
    let function_add = add(n1,n2)

    if(set_add === function_add){
        console.log("Test add OK")
    }else{
        console.log("Test add KO")
    }
    console.log("in event listener")
})
console.log("out event listener")