const xMas = document.querySelector("h1#xmas");
xMas.innerText = "Until Christmas π§π»βπ ";

const dDay = document.querySelector("h2#dday");

function dDAY() {
    const Christmas = new Date("2023-12-25");
    const now = new Date();
    const cir = Christmas - now;

    const cirday = Math.floor(cir / (1000 * 60 * 60 * 24));
    const cirhours = Math.floor(cir / (1000 * 60 * 60) % 24 );
    const cirminutes = Math.floor(cir / (1000 * 60) % 60);
    const cirseconds = Math.floor(cir / 1000 % 60);

    dDay.innerText = `ν¬λ¦¬μ€λ§μ€κΉμ§ ${cirday}μΌ ${cirhours}μ ${cirminutes}λΆ ${cirseconds}μ΄ λ¨μμ΅λλ€! `

}

dDAY();
setInterval(dDAY, 1000);
