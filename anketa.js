let getSex = function(){
    let sex = confirm("Ваш пол - мужской?");
        if (sex === true){
    return "Мужской"; 
    }else{
    return "Женский";
    }
    };
    
    let confirmationPensioner = function(){
    if (gender === "Мужской" && years > 65 ){
        return "Да";
    } else  if (gender === "Женский" && years > 55 ) {
        return "Да";
    } else {
    return "Нет";
    }   
    
    }
    
    
    let getFullName = function(){
    let name = prompt("Введите ваше имя");
    let surName = prompt("Введите вашу фамилию");
    let patronymic = prompt("Введите вашу отчество");
    
    while (name === "" || name === null || surName === "" || surName === null || patronymic === "" || patronymic === null){
    name = prompt("Вы ДОЛЖНЫ ввести вашу фамилию имя отчество!!!!");
    }
    return name + " " + surName + " " + patronymic;
    }
    
    let getYears = function () {
    let yearsFull = +prompt("Сколько вам лет?");
    while (yearsFull !== yearsFull || yearsFull === 0){
    yearsFull = +prompt("Вы ДОЛЖНЫ указать сколько вам лет цифрами!!!!");
    }
    return yearsFull;
    }
    
    let fullName = getFullName();
    let years = getYears();
    let gender = getSex()
    let yearsOnDays = years * 365;
    let yearsFromFive = years + 5;
    let pensioner = confirmationPensioner();
    alert(`
    Ваше ФИО: ${fullName};
    Ваш возраст в годах: ${years};
    Ваш возраст в днях: ${yearsOnDays};
    Через 5 лет вам будет: ${yearsFromFive};
    Ваш пол: ${gender};
    Вы на пенсии: ${pensioner};
    `)