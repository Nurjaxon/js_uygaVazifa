let hour = +prompt('Soat raqamlarini kiriting!')
if ( hour >= 6 && hour < 13){
    console.log('Good morning!')
}
else if (hour >= 13 && hour < 19) {
    console.log('Good aternoon')
}
else if (hour >= 19 && hour < 23) {
    console.log('Good evening')
}
else if (hour >= 0 && hour < 6) {
    console.log('Good night')
}