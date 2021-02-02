const jokesRes = document.querySelector('#jokesRes');
const btn = document.querySelector('#btn');

const getDataJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });
    const joke = res.data;
    const li= document.createElement('li');
    li.innerHTML = `<p>${joke.joke}</p>`;
    jokesRes.appendChild(li);
    
    console.log(jokesRes);
};

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('button click');
    getDataJokes();
})


