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
    terminal.writeln("Tape 'info' pour accéder à plus d'informations.");

    let currentInput = "";

    terminal.onKey(e => {
        const input = e.key;

        // Si la touche est "Enter", exécuter la commande
        if (input === "Enter") {
            const command = currentInput.trim();
            
            if (command === "info") {
                terminal.writeln("👉 Accédez à plus d'infos ici : https://mon-site.github.io/info");
            } else {
                terminal.writeln("Commande inconnue. Essayez 'info'.");
            }

            // Réinitialiser l'entrée pour la prochaine commande
            currentInput = "";
            terminal.write("\r\n$ ");  // Ajouter un prompt pour la prochaine commande
        } 
        // Sinon, ajouter le caractère à l'entrée actuelle
        else if (input === "Backspace") {
            currentInput = currentInput.slice(0, -1);
            terminal.write("\b \b");  // Gérer le backspace visuellement
        } else {
            currentInput += input;
            terminal.write(input);  // Afficher le caractère dans le terminal
        }
    });

    terminal.write("$ ");  // Afficher le prompt initial
});
