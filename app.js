const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const statusDiv = document.getElementById('statusDiv')

generateJoke()

// Using async/await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
    statusDiv.innerHTML = data.id
}


// Using the Fetch API
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//             statusDiv.innerHTML = data.id
//         })
// }

jokeBtn.addEventListener('click', generateJoke)