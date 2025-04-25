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

            case 'secret':
                startRainbowTheme();
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

// Lance l’animation arc-en-ciel
function startRainbowTheme() {
    let hue = 0;
    rainbowInterval = setInterval(() => {
        const c1 = hslToRgb(hue, 100, 50);
        const c2 = hslToRgb((hue + 180) % 360, 100, 50);

        setTheme({
            color1: `${c1.r}, ${c1.g}, ${c1.b}`,
            color2: `${c2.r}, ${c2.g}, ${c2.b}`
        });

        hue = (hue + 1) % 360;
    }, 20);
}
function hslToRgb(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return { r: Math.round(255 * f(0)), g: Math.round(255 * f(8)), b: Math.round(255 * f(4)) };
}
