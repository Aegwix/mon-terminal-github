document.addEventListener("DOMContentLoaded", function () {
    const terminal = new Terminal({
        cursorBlink: true,
        rows: 20,
        cols: 80,
        theme: {
            background: "#000000",
            foreground: "#00ff00"
        }
    });

    terminal.open(document.getElementById("terminal-container"));

    terminal.writeln("Bienvenue sur mon terminal interactif !");
    terminal.writeln("Voici le contenu de votre fichier 'info.html' :");

    // Fonction pour charger le contenu de info.html
    fetch('info.html')
        .then(response => response.text())
        .then(data => {
            terminal.writeln(""); // Nouvelle ligne pour l'affichage du contenu
            terminal.writeln(data);  // Insère le contenu de info.html dans le terminal
        })
        .catch(error => {
            terminal.writeln("Erreur lors du chargement de info.html.");
            console.error(error);
        });
});