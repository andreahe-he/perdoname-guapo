const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click", function () {
    alert ("GRACIAS MI AMORCITO, no volvere hacer indiferente contigo, acepto completamente mi error, el amor es de dos, MUAAA te amo mucho mi chico de ojos lindos, cuerpo bonito, voz placidamente buena, perdon por mis equivocaciones, decir que eres mi primer noviecito no es excusa, tengo que saber mejorar no caer en lo mismo te amo muchoooototototototototote, como dice jose jose yo quiero saberte amar, no querer amor eso es pasajero, muaaa siempre dime cuando algo ya estoy errando, haciendote mal a ti amorcito, te amo.")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover",function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
});