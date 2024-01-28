const account = 120
const drinks = 18
const guests = 6
const distribution = (account-drinks)/6

const dealFuntion = () =>{
    console.log(
    `Si la cena cuesta ${account}€ y quieres invitar a las bebidas, que cuestan ${drinks}€,
cada comensal tiene que pagar ${distribution}€ si son ${guests} invitados`)
}

dealFuntion()