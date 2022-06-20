// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// MILESTONE 1
// Creo un array di oggetti per rappresentare ciascun post
const usersPost = [
    {
        id: 1,
        name: 'Tommaso Bianchi',
        profilePic: 'https://unsplash.it/300/300?image=1',
        date: '12/25/2020',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://unsplash.it/300/300?image=10',
        likes: 85
    },
    {
        id: 2,
        name: 'Andrea Rossi',
        profilePic: 'https://unsplash.it/300/300?image=2',
        date: '06/02/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://unsplash.it/300/300?image=13',
        likes: 200
    },
    {
        id: 3,
        name: 'Giulia Gialli',
        profilePic: 'https://unsplash.it/300/300?image=8',
        date: '08/08/2019',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: null,
        likes: 12
    }
];

drawAllUsersPost(usersPost);

// MILESTONE 2
// Per ogni elemeno di usersPost lo stampo nel DOM
// usersPostArray -> array di post di utenti
function drawAllUsersPost(usersPostArray) {
    // Creo costante del container dove incorporo i singoli post
    const postsContainer = document.querySelector('#container');
    
    // Scrollo ogni singolo elemento dell'array 
    for(let i = 0; i < usersPostArray.length; i++) {
        const singleUserPost = usersPostArray[i];
        const {id, name, profilePic, date, text, image, likes} = singleUserPost;
        
        // Per ogni post creo il template e lo stampo
        const userPostTemplate =`
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profilePic}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            ${image === null ? '' : getImagePostHtml (image)}
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;

        // Aggiungo ogni userPostTemplate a postsContainer
        postsContainer.innerHTML += userPostTemplate;
    }
}


function getImagePostHtml (imagePost) {
    return `
    <div class="post__image">
        <img src="${imagePost}" alt="image">
    </div>
    `;
}
