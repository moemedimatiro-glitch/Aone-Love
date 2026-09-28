const text1 = document.getElementById("movingText");
const text2 = document.getElementById("movingText2");

let position1 = 0;
let position2 = -50;


function animate() {

    // Move first text
    position1 += 0.15;

    if (position1 > 100) {
        position1 = 0;
    }

    text1.setAttribute(
        "startOffset",
        position1 + "%"
    );


    // Move second text
    position2 += 0.10;

    if (position2 > 100) {
        position2 = -50;
    }

    text2.setAttribute(
        "startOffset",
        position2 + "%"
    );


    // Keep animation running
    requestAnimationFrame(animate);
}


animate();