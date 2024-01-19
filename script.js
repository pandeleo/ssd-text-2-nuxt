const button = document.querySelector('button');
const title = document.querySelector('h1');

button.addEventListener('click', async function(){
    const colors = ['red', 'blue', 'green', 'gray', 'gold', 'silver', 'orange', 'aquamarine'];

    for(let i = 0; i < colors.length; i++){
        await new Promise(resolve => setTimeout(resolve, 1000)); // Pauza de o secundă între schimbările de culoare
        title.style.color = colors[i];
    }
});
