// app.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const contentContainer = document.getElementById('content-container');
    const loginContainer = document.getElementById('login-container');
    const errorMessage = document.getElementById('error-message');
    const translateButton = document.getElementById('translate-button');
    const imageUpload = document.getElementById('image-upload');
    const translationOutput = document.getElementById('translation-output');

    const PASSWORD = 'sardinien2024';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value === PASSWORD) {
            loginContainer.style.display = 'none';
            contentContainer.style.display = 'block';
        } else {
            errorMessage.innerText = 'Falsches Passwort!';
        }
    });

    translateButton.addEventListener('click', async () => {
        const file = imageUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = async () => {
                    try {
                        const { data: { text } } = await Tesseract.recognize(img, 'ita', { logger: m => console.log(m) });
                        const translation = await fetchTranslation(text);
                        translationOutput.innerText = translation;
                    } catch (error) {
                        console.error('OCR oder Übersetzungsfehler:', error);
                        translationOutput.innerText = 'Es gab einen Fehler bei der Übersetzung.';
                    }
                };
            };
            reader.readAsDataURL(file);
        } else {
            alert('Bitte ein Bild hochladen.');
        }
    });

    async function fetchTranslation(text) {
        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=it|de`);
            const data = await response.json();
            if (data.responseData && data.responseData.translatedText) {
                return data.responseData.translatedText;
            } else {
                return 'Übersetzung nicht verfügbar.';
            }
        } catch (error) {
            console.error('Übersetzungsfehler:', error);
            return 'Es gab einen Fehler bei der Übersetzung.';
        }
    }

    // Placeholder für zukünftige Fotoübersetzungsfunktion
document.addEventListener("DOMContentLoaded", function() {
  console.log("Willkommen auf der Sardinien-Seite! Die Fotoübersetzungsfunktion ist noch nicht aktiv.");
});

});
