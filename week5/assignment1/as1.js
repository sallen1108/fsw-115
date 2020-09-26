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

const newTodo = {
    title: "toast sandwich",
    price: 10,
    description: "piece of toast between two pieces of bread"
}

// axios.post("https://api.vschool.io/samallen1108/todo", newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

const updates = {
    title: "deluxe toast sandwich",
    price: 20,
    description: "double the toast, add butter"
}

// axios.put("https://api.vschool.io/samallen1108/todo/5f6f76b3a269067180b0f1b4", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

axios.delete("https://api.vschool.io/samallen1108/todo/5f6f76b5a269067180b0f1b5")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))