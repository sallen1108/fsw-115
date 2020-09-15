axios.get("https://api.vschool.io/samallen1108/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
            if (response.data[i].completed === true) {
                h1.textContent.strike()
            }
        }
    })
    .catch(error => console.log(error))