var app = document.getElementById('name');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Nome do servidor')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Venha jogar e se divertir')
    .pauseFor(2500)
    .deleteAll()
    .start();