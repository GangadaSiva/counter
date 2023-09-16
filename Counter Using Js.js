let Counter = document.getElementById("CounterValue");


function Increase() {
    let Present = Counter.textContent;
    let Update = parseInt(Present) + 1;
    Counter.textContent = Update;

    if (Update > 0) {
        Counter.style.color = "green";
    } else if (Update < 0) {
        Counter.style.color = "red";
    } else {
        Counter.style.color = "black";
    }
}

function Decrease() {
    let Present = Counter.textContent;
    let Update = parseInt(Present) - 1;
    Counter.textContent = Update;

    if (Update > 0) {
        Counter.style.color = "green";
    } else if (Update < 0) {
        Counter.style.color = "red";
    } else {
        Counter.style.color = "black";
    }
}

function Reset() {
    Counter.textContent = 0;
    Counter.style.color = "black";
}