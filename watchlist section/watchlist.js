// Dummy data for watchlist items with image URLs
const watchlistItems = [
    { title: "Loki", price: "Rs.", image: "poster 1.png" ,id:"1"},
    { title: "Mulan", price: "Rs.", image: "poster 2.png",id:"2" },
    { title: "The Falcon and the Winter..", price: "Rs.", image: "poster 3.png" ,id:"3"},
    { title: "Avengers End Game", price: "Rs.", image: "poster 4.png",id:"4" },
    { title: "Thor Ragnarok", price: "Rs.", image: "poster 5.png",id:"5" },
    { title: "Avengers", price: "Rs.", image: "poster 6.png",id:"6" },
    { title: "Pirates of caribbean", price: "Rs.", image: "poster 7.png",id:"7" },
    { title: "Soul", price: "Rs.", image: "poster 8.png" ,id:"8"},
    { title: "Raya and the last Dragon", price: "Rs.", image: "poster 9.png" ,id:"9"},
    { title: "Luca", price: "Rs.", image: "poster 10.png",id:"10" },
    { title: "Ford v Ferrari", price: "Rs.", image: "poster 11.png",id:"11" },
    { title: "Dark Phoenix", price: "Rs.", image: "poster 12.png" ,id:"12"}
];

// Populate watchlist with dummy data
const watchlist = document.getElementById("watchlistItems");
watchlistItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="movie-details">
            <h3>${item.title}</h3>
            <p>Price: ${item.price}</p>
            <div class="actions">
                <button class="remove-button">Remove</button>
               <a href="buying.html" ><button class="buy-button">Buy Now</button></a>
               <a href="buying.html" ><button class="rent-button">Rent</button></a>
            </div>
        </div>
    `;
    watchlist.appendChild(card);
});

// Add event listener for removing items from watchlist
watchlist.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-button")) {
        const card = event.target.closest(".movie-card");
        card.remove();
    }
});




