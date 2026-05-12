window.addEventListener('load', () => {
    loadFavicon();
    loadOccupation();
    generateQrCode();
});

const pathProd = '/meu-site'

function loadOccupation() {
    const texts = ["Tech Lead", "FullStack-End Engineer", "Solutions Architect", "Professor", "Freelancer"];
    let index = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 50;

    function type() {
        const currentText = texts[index];
        if (!isDeleting) {
        text = currentText.substring(0, text.length + 1);
        } else {
        text = currentText.substring(0, text.length - 1);
        }

        document.getElementById('typingText').innerHTML = text;

        let delta = typingSpeed;

        if (isDeleting) {
        delta /= 2;
        }

        if (!isDeleting && text === currentText) {
        delta = 1500;
        isDeleting = true;
        } else if (isDeleting && text === '') {
        isDeleting = false;
        index = (index + 1) % texts.length;
        delta = 500;
        }

        setTimeout(type, delta);
    }
    
    setTimeout(type, 1500);
}

function loadFavicon() {
    let iconIndex = 0;
    const icons = ['favicon1.png', 'favicon2.png', 'favicon3.png', 'favicon4.png', 'favicon5.png'];

    function changeFavicon() {
        const link = document.querySelector("link[rel='shortcut icon']");
        link.setAttribute('href', 'images/' + icons[iconIndex]);

        iconIndex = (iconIndex + 1) % icons.length;

        setTimeout(changeFavicon, 500); //meio segundo (500ms)
    }
    changeFavicon();
}

// PIX

var pixCodeText = "96b70a5b-6b8b-413e-bcdd-52ddcea37767";
var pixCopyAndPast = "00020126810014BR.GOV.BCB.PIX013696b70a5b-6b8b-413e-bcdd-52ddcea377670219pix oriundo do site5204000053039865802BR5924Raylan Cordeiro de Souza6009SAO PAULO621405101mcHxOhIcB63049E50";

function generateQrCode() {


    var link = "https://nubank.com.br/cobrar/5jweo/6a03a91c-6fe9-4a39-bbef-f2f30ae25bc5";

    document.getElementById("qrlink").href = link

    new QRCode(document.getElementById("qrcode"), {
        text: link,
        width: 256,
        height: 256,
        colorDark : '#000000',
        colorLight : '#ffffff',
        correctLevel : QRCode.CorrectLevel.H
    });
}

const keyCopyAndPast = document.getElementById('keyCopyAndPast');
const pixKeyCopy = document.getElementById("pixKeyCopy");


keyCopyAndPast.addEventListener('click', () => {

    navigator.clipboard.writeText(pixCodeText)
        .then(() => {
            keyCopyAndPast.textContent = "Copiado!";
            setTimeout(() => { keyCopyAndPast.textContent = "Copiar Chave PIX"; }, 1000);
        })
        .catch(err => {
            console.error('Erro ao copiar:', err);
        });
});

pixKeyCopy.addEventListener('click', () => {

    navigator.clipboard.writeText(pixCopyAndPast)
        .then(() => {
            pixKeyCopy.textContent = "Copiado!";
            setTimeout(() => { pixKeyCopy.textContent = "PIX copia e cola"; }, 1000);
        })
        .catch(err => {
            console.error('Erro ao copiar:', err);
        });
});