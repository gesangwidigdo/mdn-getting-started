const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/night-nature.jpg") {
        myImage.setAttribute("src", "img/night-view.jpg");
    } else {
        myImage.setAttribute("src", "img/night-nature.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    const myName = prompt("Please enter your name: ");
    if (!myName) {
        setUsername();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Night is Cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Night is Cool, ${storedName}`;
}

myButton.onclick = () => {
    setUsername();
};