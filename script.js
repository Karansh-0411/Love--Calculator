const percentage = document.querySelector("[data-ansPara]");
const result = document.querySelector("[data-ansResult]");
const firstNameInput = document.querySelector("[data-fName]");
const secondNameInput = document.querySelector("[data-sName]");
const calButton = document.querySelector("[data-calButton]");

calButton.addEventListener("click", () => {

    console.log(firstNameInput.value);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aa864637eemshfd14db0b42ff554p13556djsn6505925bb8c8',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondNameInput.value}&fname=${firstNameInput.value}`, options)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => renderInfo(response))
        .catch(err => console.error(err));
    
});


function renderInfo(response) {
    percentage.innerText = response?.percentage + "%";
    result.innerText = response?.result;
}