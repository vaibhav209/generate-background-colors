const backgroundContainer = document.getElementById('backgroundContainer');
const button = document.getElementById('button');

const randomBackground = () => {
    let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let selectColor = '#';

    for (let i = 0; i <= 5; i++) {
        let newColor = Math.round(Math.random() * 10);
        selectColor = selectColor + hexValues[newColor];
    }
    backgroundContainer.style.backgroundColor = selectColor;
};
randomBackground();
button.addEventListener('click', randomBackground);
