let getSex = function(){
    let sex = confirm("Ваш пол - мужской?");
        if (sex){
    return "Мужской"; 
    }else{
    return "Женский";
    }
    };
    
    let confirmationPensioner = function(){
    if (gender === "Мужской" && years > 65  || gender === "Женский" && years > 55 ) {
        return "Да";
    }else {
        return "Нет";
    }   
    
    }
    
    
    let getFullName = function(){
    let name = prompt("Введите ваше имя");
    let surName = prompt("Введите вашу фамилию");
    let patronymic = prompt("Введите вашу отчество");
    
    while (!name || !surName || !patronymic ){
        name = prompt("Введите ваше имя");
        surName = prompt("Введите вашу фамилию");
        patronymic = prompt("Введите вашу отчество");
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