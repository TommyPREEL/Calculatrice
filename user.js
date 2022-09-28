export class User{
    email
    nom
    prenom
    age
    constructor(email, nom, prenom, age){
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    isValid(){
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,}');
        let check = false;
        if(regex.test(this.email)){
            if(!(this.nom == "" || this.nom == null)){
                if(!(this.prenom == "" || this.prenom == null)){
                    if(this.age>=13){
                        check = true;
                    }
                }
            }
        }
        if(check){
            console.log("TEST OK")
        }else{
            console.log("TEST KO")
        }
        //return check
    }
}