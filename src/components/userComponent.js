import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../modals/user.js"
import UserService from "../services/userService.js"   //.. = bulunduğum klasörün bir üstüne git.

console.log("User component yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Burak","Davun","Bursa")
let user2 = new User(2,"Songül","Ekinci","Giresun")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

userService.getById(1)
userService.list()

//------------------------------------------------------------

//prototyping-sonradan değer ekleyebildik. 

let customer = {id:1, firstName:"M.Burak"}

customer.lastName = "Davun"

console.log(customer.lastName)


