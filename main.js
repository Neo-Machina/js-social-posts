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

// Creo un array di oggetti per rappresentare ciascun post
const userPostArray = [
    {
        id: 1,
        name: 'Tommaso Bianchi',
        picture: 'https://unsplash.it/300/300?image=1',
        date: '12/25/2020',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://unsplash.it/300/300?image=10',
        likes: 85
    },
    {
        id: 2,
        name: 'Andrea Rossi',
        picture: 'https://unsplash.it/300/300?image=1',
        date: '06/02/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://unsplash.it/300/300?image=13',
        likes: 200
    },
    {
        id: 3,
        name: 'Giulia Gialli',
        picture: 'https://unsplash.it/300/300?image=1',
        date: '08/08/2019',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: null,
        likes: 12
    }
];

console.log(userPostArray);
