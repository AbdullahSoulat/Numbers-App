let output = document.querySelector('.output');
let inputNum = document.querySelector('.input-num');
let getFactBtn = document.querySelector('.get-fact-btn');

let fetchFact = (num) => {
    let url = 'http://numbersapi.com/' + num + '/math';
    fetch(url)
        .then(res => res.text())
        .then((data) => {
            output.innerHTML = `<h2>${num}<h2>
                                <p>${data}<p>`;
            document.querySelector(".app-container").append(output)
        })
}


let getFact = () => {
    let number = document.getElementById("num").value;
    fetchFact(number);
}

