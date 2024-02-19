const buttonele = document.getElementById("btn")
const jokes = document.getElementById("Jokes")
const spinner = document.getElementById("spinner")

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjokes(){
    jokes.style.display = "none";
    spinner.style.display = "block" ;   

    const response = await fetch(apiURL,options);
    const data = await response.json();
    jokes.innerText = data[0].joke

    jokes.style.display = "block";
    spinner.style.display = "none"  
    console.log("help", data)
}

