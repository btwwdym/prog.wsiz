//Zadanie 4

function PorownajFigury(f1, f2){

    if(f1.Pole() != f2.Pole()){
        if(f1,Pole() > f2.Pole()){
            console.log("Wieksza jest figura: " + f1.nazwa);
        }else{
            console.log("Wieksza jest figura: " + f2.nazwa);
        }
    }else{
        console.log("Pole figur są równe")
    }
}
PorownajFigury(f1, f2)
