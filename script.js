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
    terminal.write("$ "); // Affiche le prompt initial

    let currentInput = "";

    terminal.onKey(e => {
        const input = e.key;
        const keyCode = e.keyCode; // Récupère le code de la touche

        // Si la touche est "Enter", exécuter la commande
        if (input === "Enter") {
            const command = currentInput.trim();

            terminal.writeln("");  // Ajouter une nouvelle ligne pour la sortie

            if (command === "info") {
                terminal.writeln("👉 Accédez à plus d'infos ici : https://mon-site.github.io/info");
            } else if (command !== "") {
                terminal.writeln("Commande inconnue. Essayez 'info'.");
            }

            // Réinitialiser l'entrée pour la prochaine commande
            currentInput = "";
            terminal.write("\r\n$ ");  // Réaffiche le prompt pour la prochaine commande
        } 
        // Si la touche est "Backspace" (keyCode 8), supprimer un caractère à gauche
        else if (keyCode === 8) {
            if (currentInput.length > 0) {
                currentInput = currentInput.slice(0, -1);
                terminal.write("\b \b");  // Supprimer visuellement le dernier caractère
            }
        } 
        // Si la touche est "Delete" (keyCode 46), supprimer un caractère à droite
        else if (keyCode === 46) {
            if (currentInput.length > 0) {
                currentInput = currentInput.slice(1);
                terminal.write("\x1b[1P");  // Supprimer visuellement le premier caractère
            }
        } else {
            currentInput += input;
            terminal.write(input);  // Afficher le caractère dans le terminal
        }
    });
});