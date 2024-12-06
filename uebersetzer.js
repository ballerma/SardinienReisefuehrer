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

  // Tesseract.js laden (mit CDN)
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@2.1.1/dist/tesseract.min.js";
document.head.appendChild(script);

document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fileInput = document.getElementById("fileUpload");
  const file = fileInput.files[0];

  if (file) {
    document.getElementById("translationResult").innerHTML = "<p>Bild wird verarbeitet...</p>";

    // Die Bilddatei in eine URL umwandeln
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageUrl = event.target.result;

      // Texterkennung mit Tesseract.js durchführen
      Tesseract.recognize(
        imageUrl,
        'deu', // Sprache einstellen (Deutsch)
        {
          logger: (m) => console.log(m), // Logger, um Fortschritte zu sehen
        }
      ).then(({ data: { text } }) => {
        // Ergebnis in das HTML einfügen
        document.getElementById("translationResult").innerHTML = `<p>Erkannter Text: ${text}</p>`;
      }).catch((error) => {
        console.error("Fehler bei der Texterkennung:", error);
        document.getElementById("translationResult").innerHTML = "<p>Fehler bei der Texterkennung.</p>";
      });
    };

    reader.readAsDataURL(file);
  } else {
    document.getElementById("translationResult").innerHTML = "<p>Bitte wählen Sie ein Bild aus.</p>";
  }
});

});
