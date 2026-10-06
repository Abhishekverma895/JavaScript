function Abhi(){
    console.log("Hello");
    console.log("How are you");
    console.log("I hope aap log acha hoge");
    console.log("okay");
}
Abhi();

function Abhii(){
    for(let i = 0; i <= 20; i++)
        console.log(i);
    
}
Abhii();

function Abhiii(){
    for(let i = 5; i <= 30; i++){
        if(i%2 !== 0){
            console.log(i);
        }
    }
}

Abhiii();

function Abhishek(){
    let age = 40;
    if(age<18){
        console.log("18+");
    }
    else{
        console.log("done");
    }
}
Abhishek();


function Abh(name, age, email){
    console.log(arguments);

}
Abh("Abhi", 12, "abhishekverma895@gmail.com");


function Ab(is){
    console.log(is);
}
Ab({Name: "Abhi", age: 24});

let a = 10;
function Av(){
    let b = 10;
    function Ak()
{
console.log(b);
}
Ak();
}
Av();

(function(){
let balance = 10000;
})();

let fnc = () => {
    console.log("hey");
}
fnc();


function aks(){
    return function(){

    }
}

function Aksa(){

}
Aksa(function(){
    
});