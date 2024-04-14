const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('moviesContainer');

const movies = [
    { title: 'Loki', image: './images/poster 1.png', price: 10, rentp: 5 },
    { title: 'Mulan', image: './images/poster 2.png', price: 12, rentp: 5 },
    { title: 'The falcon and the winter soldier', image: './images/poster 3.png', price: 11, rentp: 5 },
    { title: 'Avengers End game', image: './images/poster 4.png', price: 9, rentp: 5 },
    { title: 'Thor ragnarok', image: './images/poster 5.png', price: 11, rentp: 5 },
    { title: 'Avengers', image: './images/poster 6.png', price: 13, rentp: 5 },
    { title: 'Pirates of caribbean', image: './images/poster 7.png', price: 10, rentp: 5 },
    { title: 'Soul', image: './images/poster 8.png', price: 12 },
    { title: 'Raya and The Last Dragon', image: './images/poster 9.png', price: 10, rentp: 5 },
    { title: 'Luca', image: './images/poster 10.png', price: 11, rentp: 5 },
    { title: 'Ford vs Ferrari', image: './images/poster 11.png', price: 11, rentp: 5 },
    { title: 'dark Phoenix', image: './images/poster 12.png', price: 11, rentp: 5 }
];

function displayMovies(query) {
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    // Clear previous search results
    moviesContainer.innerHTML = '';

    // Display filtered movies
    filteredMovies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const img = document.createElement('img');
        img.src = movie.image;
        img.alt = movie.title;

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const price = document.createElement('p');
        price.textContent = `Buying Price Rs.${movie.price}`;

        const rentPrice = document.createElement('p');
        rentPrice.textContent = movie.rentp ? `Rent Price Rs.${movie.rentp}` : 'Rent not available'; // Check if rentp exists

        const buyButton = document.createElement('a');
        buyButton.textContent = 'Buy';
        buyButton.classList.add('buy-button');
        buyButton.href = '../watchlist section/buying.html'; // Replace 'link-to-buy-page' with the actual URL of the buy page
        buyButton.target = '_blank'; // Open link in a new tab
        
        // Append buyButton to card
        card.appendChild(buyButton);
        
        const rentButton = document.createElement('button');
        rentButton.textContent = 'Rent';
        rentButton.classList.add('rent-button');

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(rentPrice); // Append rent price
        card.appendChild(buyButton);
        card.appendChild(rentButton);

        moviesContainer.appendChild(card);
    });
}

// Event listener for search input
searchInput.addEventListener('input', function() {
    displayMovies(this.value);
});

// Initial display of all movies
displayMovies('');
