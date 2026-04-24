const btns = document.querySelectorAll(".btn"); //Denne her variabel gælder for alle elementer, som har class'en "btn"
// Test ved at bruge "undersøg" i browser --> åben console --> søg btns --> se dem dukke op

const stages = document.querySelectorAll(".stage");

const nextStage = (e) => { //"(e)" for "event"
    console.log(e.target.textContent); //"target" = trigger (e)'et --> "textContent" = hvad står der?
    //TEST først = console.log("Clicked")
    switch(e.target.textContent) { //Hvad skal der ske på baggrund af, hvilken kan som blev trykket
        case "Start": 
            console.log("Start was clicked"); //Hvis "start" klikkes --> logges beskeden
            stages[0].classList.remove("active"); //Jeg vil gerne remove classen "active" fra stage [0] --> når der trykkes "Start"
            stages[1].classList.add("active"); //Jeg vil gerne tilføje classen "active" til stage[1] --> når der trykkes "Start"
        break;
        case "Option 1":
            stages[1].classList.remove("active");
            stages[2].classList.add("active");
        break;
        case "Option 2":
            stages[1].classList.remove("active");
            stages[3].classList.add("active");
        break;
        case "Option 3":
            stages[1].classList.remove("active");
            stages[4].classList.add("active");
        break;
        case "Start over":
            stages[2].classList.remove("active");
            stages[3].classList.remove("active");
            stages[4].classList.remove("active");
            stages[0].classList.add("active");
        break;

        default: console.log("Don't Know"); //Fejlmeddelelse til os selv, hvis den ikke "kender" knappen
    }
}

for (const btn of btns) { //For hver element, der har denne class (btn), skal der ske noget
    btn.addEventListener("click", nextStage); //Det der skal ske^: Hvad den skal lytte efter? = "click" --> Hvad skal den gøre? = funktionen "nextStage"
} 
