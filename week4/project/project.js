//turning this in as is because i honestly have 0 clue as to why this doesn't work

function myFunction() {
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            const p = document.createElement('p')
            p.textContent = response.data[i].name
            document.body.appendChild(p)
        }
    })
    .catch(error => console.log(error))
}