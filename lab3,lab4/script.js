    // Zadanie 1 (a)

    let num1 = 20;
    let num2 = 10;

    console.log(num1 + num2, num1 - num2, num1*num2, num1/num2);

// Zadanie 1 (b)

    let calc = Calculator(20, 10);

    document.getElementById("wynik").innerHTML = calc;

    function Calculator(a, b) {
        let op = prompt("Operator (+, -, *, /):");

        if (op == '+') {
            return "Sumą jest: " + (a + b)
        }
        else if (op == '-') {
            return 'Różnicą jest: ' + (a - b) 
        }
        else if (op == '*') {
            return 'Ilorazem jest: ' + (a * b)
        }
        else if (op == '/') {
            return 'Iloczynem jest: ' + (a / b)
        }
        else {
            return 'Operator nie jest poprawny'
        }  
    }

// Zadanie 2 (c, d)

    let q = parseFloat(prompt("Długość strony 'q' "));
    let w = parseFloat(prompt("Długość strony 'w' "));
    let e = parseFloat(prompt("Długość strony 'e' "));

    let poleWyn = Triangle(q, w, e);

    document.getElementById("poleTr").innerHTML = poleWyn;

    function Triangle(q, w, e) {
        let halfp = (q + w + e)/2;

        return "Polem jest: "+ Math.sqrt(halfp * (halfp - q) * (halfp - w) * (halfp - e));
    
     }

     console.log(poleWyn);

// Zadanie 3 (a, b)

    let guess = Losik();

    document.getElementById("los").innerHTML = guess;

    function Losik(){
        let liczba = parseFloat(prompt("Zgadnij liczbę <3:"));

        let rdLicz = Math.floor(Math.random()*10 + 1);

        if (liczba == rdLicz) {
            return 'Dobra robota'
        }
        else {
            return 'Oops! Alas for u <3! liczba była: ' + rdLicz
        }
    }
    console.log(guess)

// Zadanie 4 (a, b)  

    let licz1 = parseFloat(prompt("Podaj liczbę 1:"));
    let licz2 = parseFloat(prompt("Podaj liczbę 2:"));
    let licz3 = parseFloat(prompt("Podaj liczbę 3:"));

    console.log("Maksymalną liczbą jest: " + Math.max(licz1, licz2, licz3));

    let maxWyn = MaxLiczba(licz1, licz2, licz3);
    document.getElementById("maxlicz").innerHTML = maxWyn;


    function MaxLiczba(licz1, licz2, licz3) {
        return "Maksymalną liczbą jest: " + Math.max(licz1, licz2, licz3)
    }

//Zadanie 6

    class students {
        constructor(imie, nazwisko, wiek){
            this.imie = imie;
            this.nazwisko = nazwisko;
            this.wiek = wiek;
        }

    }

    let student1 = new students("Andrii", "Khavruk", 17)
    console.log("Student 1:")
    console.log(student1)

    let student2 = new students("Max", "Noname", 18)
    let student3 = new students("Alan", "Rickman", 20)
    console.log("Student 2:")
    console.log(student2)
    console.log("Student 3:")
    console.log(student3)
 
// Zadanie 7

    let stHimself = new students(prompt("Podaj imię:"), prompt("Podaj nazwisko:"), parseInt(prompt("Podaj wiek:")))

    console.log("Your infomation:")
    console.log(stHimself)

// Zadanie 8

    function showTime(){
        let data = new Date();
        document.getElementById("zegar").innerHTML = (data.getHours() + ":" + data.getMinutes() + ":" +data.getSeconds());
    }

    setInterval(showTime, 1000)
