let isDarkMode = false;

document.getElementById("change-color-btn").addEventListener("click", () => {
    if (isDarkMode) {
        document.documentElement.style.setProperty("--color-background", "255, 255, 255");
        document.documentElement.style.setProperty("--color-text", "0, 0, 0");
        document.documentElement.style.setProperty("--image-fond", "url('images/fond_clair.jpg') no-repeat center/cover");
    } else {
        document.documentElement.style.setProperty("--color-background", "0, 0, 0");
        document.documentElement.style.setProperty("--color-text", "255, 255, 255");
        document.documentElement.style.setProperty("--image-fond", "url('images/fond_sombre.jpg') no-repeat center/cover");
    }
    isDarkMode = !isDarkMode;
});

let rainbowInterval = null;

document.querySelectorAll('.color-option').forEach(button => {
    button.addEventListener('click', function () {
        const theme = this.getAttribute('data-theme');

        if (rainbowInterval) {
            clearInterval(rainbowInterval);
            rainbowInterval = null;
        }

        switch (theme) {
            case 'default':
                setTheme({ color1: '15, 82, 186', color2: '255, 215, 0' });
                break;
            case 'theme1':
                setTheme({ color1: '80, 200, 120', color2: '255, 255, 240' });
                break;
            case 'theme2':
                setTheme({ color1: '224, 17, 95', color2: '247, 231, 206' });
                break;
            case 'theme3':
                setTheme({ color1: '255, 127, 80', color2: '0, 95, 106' });
                break;
            case 'theme4':
                setTheme({ color1: '153, 102, 204', color2: '255, 229, 180' });
                break;

            default:
                console.log("Thème non défini");
        }
    });
});

function setTheme(colors) {
    document.documentElement.style.setProperty("--color1", colors.color1);
    document.documentElement.style.setProperty("--color2", colors.color2);
}

document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".competence-content").forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});
