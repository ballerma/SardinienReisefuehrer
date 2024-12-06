document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Datei aus dem Input-Feld holen
  const fileInput = document.getElementById("fileUpload");
  const file = fileInput.files[0];

  if (file) {
    // Zeige eine vorübergehende Nachricht an, bis das Bild verarbeitet wird
    document.getElementById("translationResult").innerHTML = "<p>Bild wird hochgeladen...</p>";

    // Hier könnte die echte Bildübersetzung erfolgen
    // Zum Beispiel durch ein API-Aufruf oder eine Bildverarbeitungslösung

    setTimeout(function() {
      // Ersetze die vorübergehende Nachricht mit der simulierten Übersetzung
      document.getElementById("translationResult").innerHTML = "<p>Übersetzung des Textes im Bild: 'Benvenuti in Sardegna'</p>";
    }, 2000); // Verzögerung von 2 Sekunden simulieren
  } else {
    document.getElementById("translationResult").innerHTML = "<p>Bitte wählen Sie ein Bild aus.</p>";
  }
});
