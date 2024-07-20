
let input = document.querySelector('input');
let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', function() {
    let tarigh = input.value; // دریافت مقدار ورودی
    if (tarigh) {
        let date = new Date(tarigh); 
        let persianDateInstance = new persianDate(date); 
        p.innerHTML = persianDateInstance.format("YYYY/MM/DD"); 
    } else {
        p.innerHTML = "لطفا تاریخ را وارد کنید."; 
    }
});

