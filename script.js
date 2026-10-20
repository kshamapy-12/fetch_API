const cards = document.querySelector('.cards');
const refresh = document.querySelector('#refresh');
const icon = document.querySelector('#refresh i');

function getUsers(){
fetch('https://randomuser.me/api/?results=3').then((rawData) => {
    return rawData.json();
}).then((data) => {
      cards.innerHTML = '';
    data.results.forEach((elem) => {
    let card = document.createElement('div');
    card.className = 'card bg-gray-800 p-10 shadow-lg rounded-2xl min-w-[450px] flex flex-row gap-5';
    let imgDiv = document.createElement('div');
    imgDiv.className = 'w-[100px] h-[100px] overflow-hidden rounded-full';
    let img = document.createElement('img');
    img.src=elem.picture.large;
    img.className = 'object-fit w-full h-full';
    let content = document.createElement('div');
    content.className = 'flex items-start justify-center flex-col text-white';
    let h1 = document.createElement('h1');
    h1.className = 'text-xl font-semibold';
    h1.textContent = `${elem.name.title} ${elem.name.first} ${elem.name.last}`;
    let h2 = document.createElement('h2');
    h2.className = 'text-sm';
    h2.textContent = elem.email;
    let span = document.createElement('span');
    span.className = 'bg-blue-800 px-4 py-1 mt-3 rounded-full';
    span.textContent = 'Active';

    cards.appendChild(card);
    card.appendChild(imgDiv);
    imgDiv.appendChild(img);
    card.appendChild(content);
    content.appendChild(h1);
    content.appendChild(h2);
    content.appendChild(span);



    });
}).catch((err) => {
    console.log(err);
});

}

getUsers();



refresh.addEventListener('click', function(){
   
     icon.classList.add('animate-spin');
     setTimeout(function(){
         getUsers();
        icon.classList.remove('animate-spin');
     }, 1000);
})