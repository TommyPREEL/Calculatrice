export class Calculatrice{
    constructor(){}

    add(n1,n2){
        return (+n1)+(+n2)
    }

    sub(n1,n2){
        return (+n1)-(+n2)
    }

    mul(n1,n2){
        return (+n1)*(+n2)
    }

    div(n1,n2){
        return (+n1)/(+n2)
    }
}
module.exports = {
    add,
    sub,
    mul,
    div
}