// 1️⃣ Gem main-elementet
const main = document.querySelector("main");

// 2️⃣ Lav funktion
function createSection() {

    // 3️⃣ Lav section
    const section = document.createElement("section");

    // 4️⃣ Lav h2
    const h2 = document.createElement("h2");
    h2.textContent = "Ny overskrift";

    // 5️⃣ Sæt h2 ind i section
    section.append(h2);

    // 6️⃣ Lav p
    const p = document.createElement("p");
    p.textContent = "Lorem Ipsum";

    // 7️⃣ Sæt p ind i section
    section.append(p);

    // 8️⃣ Sæt section ind i main
    main.append(section);
}

// 9️⃣ Kald funktionen
createSection();