function $(x) {return document.getElementById(x);}

function greetMe(){
    let greet = $('app');
    if (greet.innerHTML === "howdy"){
        greet.innerHTML = "hello";
    } else{
        greet.innerHTML = 'howdy'
    }
}

$('button1').addEventListener('click', greetMe())