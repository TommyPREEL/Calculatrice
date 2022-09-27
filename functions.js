function add(n1,n2){
    return (+n1)+(+n2);
}

function sub(n1,n2){
    return (+n1)-(+n2);
}

function mul(n1,n2){
    return (+n1)*(+n2);
}

function div(n1,n2){
    return (+n1)/(+n2);
}

let n1 = 0
let n2 = 1

// Test ADD OK
let set_add = 1
let function_add = add(n1,n2)

if(set_add === function_add){
    console.log("Test add OK")
}else{
    console.log("Test add KO")
}

// Test ADD KO
let set_add_f = 1544
let function_add_f = add(n1,n2)

if(set_add_f === function_add_f){
    console.log("Test add OK")
}else{
    console.log("Test add KO")
}

// Test SUB OK
let set_sub = -1
let function_sub = sub(n1,n2)

if(set_sub === function_sub){
    console.log("Test sub OK")
}else{
    console.log("Test sub KO")
}

// Test SUB KO
let set_sub_f = 6551
let function_sub_f = sub(n1,n2)

if(set_sub_f === function_sub_f){
    console.log("Test sub OK")
}else{
    console.log("Test sub KO")
}

// Test MUL OK
let set_mul = 0
let function_mul = mul(n1,n2)

if(set_mul === function_mul){
    console.log("Test mul OK")
}else{
    console.log("Test mul KO")
}

// Test MUL KO
let set_mul_f = 8456
let function_mul_f = mul(n1,n2)

if(set_mul_f === function_mul_f){
    console.log("Test mul OK")
}else{
    console.log("Test mul KO")
}

// Test DIV OK
let set_div = 0
let function_div = div(n1,n2)

if(set_div === function_div){
    console.log("Test div OK")
}else{
    console.log("Test div KO")
}

// Test DIV KO
let set_div_f = 65156
let function_div_f = div(n1,n2)

if(set_div_f === function_div_f){
    console.log("Test div OK")
}else{
    console.log("Test div KO")
}


