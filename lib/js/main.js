
let input = document.querySelector("#title_input");
let main= document.querySelector("#main_title");
let paragraph = document.querySelector("#story_result");

input.addEventListener("input", type);

function type(event){
    main.innerHTML = event.target.value;
}

let submitBtn = document.getElementById("submit_button");
submitBtn.addEventListener("click", submitForm);

function submitForm(event){
    
    event.preventDefault();

    //get user data
    let noun = document.querySelector("#noun");
    let verb = document.querySelector("#verb");
    let adj = document.querySelector("#adjective");
    
    let nounV = noun.value;
    let verbV = verb.value;
    let adjV = adj.value;
    let titleV = input.value

    if (nounV == "" || verbV == "" || adjV == "" || titleV == ""){
        alert("please fill in all fields");

    }
    //prepare a template string
    else {
        let message = `Last night I ate a ${nounV}, and today I just had to ${verbV}. What a ${adjV} day!`;
        paragraph.innerHTML = message;
        noun.value = "";
        verb.value = "";
        adj.value = "";
        input.value = "";

    }

}





// let titles = document.getElementById(title_input);
// let noun = document.getElementById(noun);
// let verb = document.getElementById(verb);
// let adj = document.getElementById(adjective);

// let titlesV = titles.value;
// let nounV = noun.value;
// let verbV = verb.value;
// let adjV = adjV;

// let submitbtn = document.getElementById(submit_button);

// submitBtn.onclick = function(){
//     if ( nounV == "" || verbV == "" || adjV =="" || titlesV == ""){ 
//         alert("Please fill all the fields");
//     }
// }

// submitBtn.addEventListener("click", submit);
// function submit(event){
//     event.preventDefault();

//     let message = `Last night I ate a ${nounV}, and today I just had to ${verbV}. What a ${adjV} day!`;
//     alert(message);
// }
