// Test to see if reference is correct
// Husk at "kommentér" al "console.log" ud inden aflevering!

console.log("Hello from Script");

//======AFPRØVE SWITCH (undervisning 17/04)======//

    // Variabel med datatypen string
    let color = "RED"; //kan også skrive: prompt("Write a color")

    // Værdi holdes op mod flere mulige cases
    // Her er eksemplet = Hvis brugeren skriver "red"(uanset stor/små bogstaver), så ændres bg-color til farven rød

    switch(color.toLowerCase()) { // "toLowerCase" vælges, så brugeren godt kan bruge store bogstaver
        case "red": 
            console.log("You chose red");
            document.body.style.backgroundColor = "#ff0000" 
            // KOMMENTARER til ovenstående -> herunder:
            // inline styling bruges KUN i javascript IKKE I HTML!!!
            // hvis der i css står "background-color", så bruges IKKE bindestreg --> men camelCase

        break; // Vigtigt, da man ellers kan ricikere, at den "logger" videre :)

        case "blue": 
            console.log("You chose blue");
            document.body.style.backgroundColor = "#0000ff" 
        break;

        default: console.log("Unknown color");
    }

    //======AFPRØVE ARRAY (undervisning 17/04)======//

        //Array
        const myWords = ["Contrast", "Repetition", "Alignment", "Proximity"];

        const btns = document.querySelectorAll(".btn")
        // KOMMENTARER til ovenstående -> herunder:
        // Man bruger ikke ALTID "[]" --> her kalder vi på noget i HTML
        // "querySelectorAll" er en metode, derfor skal der stå "()" efter

        //Hvis man vil tjekke "er knapperne registreret?" --> console.log(btns);

        const changeBg = (e) => {
            // "(e)" --> en forkortelse for "event"
            //Hvis man vil tjekke "lytter du egentlig?" --> console.log("Clicked") (Behøver ikke være med stort :))
            console.log(e.target.innerText); //Så viser den ikke bare "AT der blev klikket" --> men "HVOR der blev klikket"
            
            switch(e.target.innerText.toLowerCase()) {
            case "red": 
                console.log("You chose red");
                document.body.style.backgroundColor = "#ff0000" 
            break;
            case "blue": 
                console.log("You chose blue");
                document.body.style.backgroundColor = "#0000ff" 
            break;
            case "green": 
                console.log("You chose green");
                document.body.style.backgroundColor = "#00ff00" 
            break;
            case "yellow": 
                console.log("You chose yellow");
                document.body.style.backgroundColor = "#ffee00ff" 
            break;
            default: console.log("Unknown color");
    }
        }

        //forEach --> For hver 
        btns.forEach(btn => {
            btn.addEventListener("click", changeBg) 
            // KOMMENTARER til ovenstående -> herunder:
            // EventListeneren skal lytte og reagere, når nogen laver "click"
            // Den skal reagere ved at "changeBg"
            // EventListeners skal stå i bunden af JS
        })