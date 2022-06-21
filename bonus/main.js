// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

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
        profilePic: null,
        date: '06/02/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://unsplash.it/300/300?image=13',
        likes: 200
    },
    {
        id: 3,
        name: 'Giulia Gialli',
        profilePic: 'https://unsplash.it/300/300?image=8',
        date: '08/18/2019',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: null,
        likes: 12
    }
];

// Parte all'avvio della pagina
drawAllUsersPost(usersPost);

// MILESTONE 2
// Per ogni elemeno di usersPost lo stampo nel DOM
// usersPostArray -> array di post di utenti
function drawAllUsersPost(usersPostArray) {
    // Creo costante del container dove incorporo i singoli post
    const postsContainer = document.querySelector('#container');
    postsContainer.innerHTML = '';
    
    // Scrollo ogni singolo elemento dell'array 
    for(let i = 0; i < usersPostArray.length; i++) {
        const singleUserPost = usersPostArray[i];
        const {id, name, profilePic, date, text, image, likes} = singleUserPost;
        
        // Per ogni post creo il template e lo stampo
        const userPostTemplate =`
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    ${getProfilePicHtml(profilePic, name)}
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
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;

        // Aggiungo ogni userPostTemplate a postsContainer
        postsContainer.innerHTML += userPostTemplate;
    }

    // MILESTONE 3
    const allLikeClickable = document.querySelectorAll('.js-like-button');
    const allLikesCounter = document.querySelectorAll('.js-likes-counter');
    for(let i = 0; i < allLikeClickable.length; i++) {
        const singleLikeBtn = allLikeClickable[i];
        singleLikeBtn.addEventListener('click', function(event) {
            // Evitiamo il comportamento di default del browser
            event.preventDefault();

            // Incrementiamo il like solo se l'elemento su cui ho cliccato non ha gia classe clicked
            if(!this.classList.contains('clicked')) {
                // Aggiungo all'elemento cliccato la classe 'clicked'
                this.classList.add('clicked');
                // Aggiungo una classe al btn per cambiare colore
                singleLikeBtn.classList.add('like-button--liked');
                // Prendo l'elemento html di testo che ha il numero relativo al btn
                const relatedNumberLikesText = allLikesCounter[i];
                // Prendo il numero dentro relatedNumberLikesText
                let relatedNumberLikes = parseInt(relatedNumberLikesText.innerHTML);
                console.log(relatedNumberLikes);
                // Incremento di 1 relatedNumberLikes
                relatedNumberLikes++;
                // Scrivo il numero incrementato dentro relatedNumberLikesText
                relatedNumberLikesText.innerHTML = relatedNumberLikes;
            // BONUS 3
            } else {
                // Rimuovo all'elemento cliccato la classe 'clicked'
                this.classList.remove('clicked');
                // Aggiungo una classe al btn per cambiare colore
                singleLikeBtn.classList.remove('like-button--liked');
                // Prendo l'elemento html di testo che ha il numero relativo al btn
                const relatedNumberLikesText = allLikesCounter[i];
                // Prendo il numero dentro relatedNumberLikesText
                let relatedNumberLikes = parseInt(relatedNumberLikesText.innerHTML);
                console.log(relatedNumberLikes);
                // Incremento di 1 relatedNumberLikes
                relatedNumberLikes--;
                // Scrivo il numero incrementato dentro relatedNumberLikesText
                relatedNumberLikesText.innerHTML = relatedNumberLikes;
            }
        });
    }
}

function getImagePostHtml(imagePost) {
    return `
    <div class="post__image">
        <img src="${imagePost}" alt="image">
    </div>
    `;
}

// BONUS 2
function getProfilePicHtml(profilePicPost, name) {
    if(profilePicPost !== null) {
        return `
        <div class="post-meta__icon">
           <img class="profile-pic" src="${profilePicPost}" alt="Phil Mangione">                    
        </div>
        `  
    } else {
        return `
        <div class="post-meta__icon">
            <div class="profile-pic-default">${getInitialsProfile(name)}</div>                  
        </div>
        `  
    }
}

function getInitialsProfile(name) {
    const userNameArray = name.split(' ');

    let nameInitials = '';
    // Scrollo le iniziali degli elementi dell'array dei nomi
    for(let i = 0; i < userNameArray.length; i++) {
        nameInitials += userNameArray[i][0];
    }

    return nameInitials;
}

// BONUS 1
// const mounth = date.substring(0, 2);
// const day = date.substring(3, 5);
// const year = date.substring(6, 10);
formatDate();
// const formattedDate = day + '/' + mounth + '/' + year;
function formatDate() {
    for(let i = 0; i < usersPost.length; i++) {
        let dateSingleUsersPost = usersPost[i].date;
        
        const month = dateSingleUsersPost.substring(0, 2);
        const day = dateSingleUsersPost.substring(3, 5);
        const year = dateSingleUsersPost.substring(6, 10);
    
        const formattedDate = day + '/' + month + '/' + year;
    
        usersPost[i].date = formattedDate;
    }

    drawAllUsersPost(usersPost);
} 


