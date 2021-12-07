
let input1 = document.getElementById('input1');
let input2 =  document.getElementById('input2');
let match = document.getElementById('match');
let notMatch = document.getElementById('notMatch');

let warningLeft = 3;

function generatePin(){
    let number1 = parseInt(Math.random()*10000);
    input1.value = number1;
}

document.querySelector("#key-pad").addEventListener('click', function(event){
    let number2 = event.target.innerText;
    
    if(isNaN(number2)){
        if(number2=='C'){
            input2.value = '';
        }
        if(number2 == '<'){
            let input3 = input2.value.toString();

            if(input3.length <= 1){
                input2.value = "";
            }
            else{
                input2.value = parseInt(input3.substr(0,input3.length-1));
            }
        }
    }
    else{
        let number3 = input2.value + number2;
        input2.value=number3;
    }
});

function matching(){
    if(input1.value == "" || input2.value == ""){
        match.style.display = "none";
        notMatch.style.display = "none";
    }
    else if(input1.value == input2.value){
         match.style.display = "block";
         notMatch.style.display = "none";
         timeRestore();
    }
    else{
        match.style.display = "none";
        notMatch.style.display = "block";

        timeLeft();
    }
}

function timeLeft(){
    warningLeft--;

    if(warningLeft == 0){

        input1.value = '';
        input2.value = '';
        
        let getContainer = document.getElementById('fuck');
        getContainer.remove();

        showWarning();
        
    }
    else{
        let warning = document.querySelector("#warning");
        warning.innerText = warningLeft + " try left"
    }
    
}

function timeRestore(){
    warningLeft = 3;
    let warning = document.querySelector("#warning");
    warning.innerText = warningLeft + " try left";
}

function showWarning(){
    let listItem = document.getElementById('firstPart');
    let newElement = document.createElement('div');
        newElement.className = 'notify-section';
    let newPera = document.createElement('p');
        newPera.className = 'notify';
        newPera.innerHTML = "You tried so many times!<br>Please refresh the page.";

    let hello = newElement.appendChild(newPera);
    listItem.appendChild(hello);

}