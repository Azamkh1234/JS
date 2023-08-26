var year = +prompt ('Введите свой возвраст')
if (year < 18){
    alert('Вам нужно учится')
}else if (year < 50 ) {
  alert ('Вам нужно работать')
}else if (year < 59 ) {
  alert ('Вам скоро на пансию')
}else if (year < 100 ) {
  alert ('Вы на пенсии')
}else{
    alert ('Ошибка')
}