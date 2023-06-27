const form = document.getElementById('form');
const marka = document.getElementById('marka');
const model = document.getElementById('model');
const vin = document.getElementById('vin');
const rok = document.getElementById('rok');
const pojemnosc = document.getElementById('pojemnosc');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    const pojazd = new FormData(form);
    const obj = Object.fromEntries(pojazd);

    console.log(obj);
    
    // const car = new Cars(marka, model, vin, pojemnosc);
    // Cars.push(car);
    // CarManager.addCar(car);
    // console.log(Cars());
    
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const validateInputs = () => {
    const markaValue = marka.value.trim();
    const modelValue = model.value.trim();
    const vinValue = vin.value.trim();
    const rokValue = rok.value.trim();
    const pojemnoscValue = pojemnosc.value.trim();

    if (markaValue === '') {
        setError(marka, 'Potrzebna marka auta');
    }else if (markaValue.length < 2) {
        setError(marka, 'Wpisz istniejącą markę');
    }
    else{
        setSuccess(marka);
    }

    if (modelValue === '') {
        setError(model, 'Potrzebny model auta');
    }
    else if (modelValue.length < 2) {
        setError(marka, 'Wpisz istniejący model');
    } 
    else{
        setSuccess(model);
    }

    if (vinValue === '') {
        setError(vin, 'Potrzebny vin auta');
    }
    else if (vinValue.length < 5) {
        setError(vin, 'Vin jest za krótki');
    }
    else{
        setSuccess(vin);
    }

    if (rokValue === '') {
        setError(rok, 'Potrzebny rok auta');
    }
    else if (rokValue.length > 2023) {
        setError(rok, 'Wpisz poprawny rok pojazdu');
    }
    else{
        setSuccess(rok);
    }

    if (pojemnoscValue === '') {
        setError(pojemnosc, 'Potrzebna pojemnosc auta');
    }
    else if (pojemnoscValue.length < 0) {
        setError(marka, 'Pojemność musi być wieksza od 0');
    }else{
        setSuccess(pojemnosc);
    }
    

}

// class Cars {
//         constructor(auto, mod, vin, engine) {
//         this.auto = auto;
//         this.mod = mod;
//         this.vin = vin;
//         this.engine = engine;
//         }
// }
//     class CarManager {
//         constructor() {
//           this.cars = [];
//         }
    
//         addCar(car) {
//           this.cars.push(car);
//         }
// }


