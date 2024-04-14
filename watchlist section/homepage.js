// Dummy data for available movies with image URLs
const movies = [
    { title: "Inception", price: "$9.99", image: "https://via.placeholder.com/250" },
    { title: "The Godfather", price: "$12.99", image: "https://via.placeholder.com/250" },
    { title: "Breaking Bad", price: "$14.99", image: "https://via.placeholder.com/250" }
];

// Function to create a movie card
function createMovieCard(movie) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-details">
            <h3>${movie.title}</h3>
            <p>Price: ${movie.price}</p>
            <button class="remove-button">Remove</button>
            <button class="buy-button">Buy</button>
        </div>
    `;

    // Add event listener to the "Remove" button
    const removeButton = card.querySelector(".remove-button");
    removeButton.addEventListener("click", function() {
        card.remove();
    });

    return card;
}

// Function to add a movie to the watchlist
function addToWatchlist(movie) {
    const watchlist = document.getElementById("watchlistItems");
    const card = createMovieCard(movie);
    watchlist.appendChild(card);
}

// Populate available movies with dummy data
const movieList = document.getElementById("movieList");
movies.forEach(movie => {
    const card = createMovieCard(movie);
    movieList.appendChild(card);
});
