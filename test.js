import {User} from './user.js'

const user_ok = new User('blabla@test.fr', "NomTest", "PrenomTest", 15)
user_ok.isValid()

const user_ko_mail = new User('blablatest.fr', "NomTest", "PrenomTest", 15)
user_ko_mail.isValid()

const user_ko_nom = new User('blabla@test.fr', "", "PrenomTest", 15)
user_ko_nom.isValid()

const user_ko_prenom = new User('blabla@test.fr', "NomTest", null, 15)
user_ko_prenom.isValid()

const user_ko_nom_prenom = new User('blabla@test.fr', "", null, 15)
user_ko_nom_prenom.isValid()

const user_ko_age = new User('blabla@test.fr', "NomTest", "PrenomTest", 10)
user_ko_age.isValid()
