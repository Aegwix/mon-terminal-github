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

    terminal.onKey(e => {
        const input = e.key;

        if (input === "Enter") {
            const command = terminal.buffer.active.getLine(terminal.buffer.active.cursorY - 1).translateToString().trim();

            if (command === "info") {
                terminal.writeln("👉 Accédez à plus d'infos ici : https://mon-site.github.io/info");
            } else {
                terminal.writeln("Commande inconnue. Essayez 'info'.");
            }
        }
    });
});