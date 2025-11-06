document.addEventListener('DOMContentLoaded', () => {
    const cryptoContainer = document.getElementById('crypto-container');

    // Fetch data from CoinGecko API
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            // Clear any previous content (like the error message)
            cryptoContainer.innerHTML = '';

            data.forEach(coin => {
                const card = document.createElement('div');
                card.classList.add('crypto-card');

                const image = document.createElement('img');
                image.src = coin.image;
                image.alt = `${coin.name} logo`;
                image.style.width = '50px';
                image.style.height = '50px';

                const name = document.createElement('h2');
                name.textContent = `${coin.name} (${coin.symbol.toUpperCase()})`;

                const price = document.createElement('p');
                price.textContent = `Price: $${coin.current_price.toLocaleString()}`;

                const priceChange = document.createElement('p');
                const change = coin.price_change_percentage_24h;
                priceChange.textContent = `24h Change: ${change.toFixed(2)}%`;
                priceChange.style.color = change >= 0 ? 'green' : 'red';

                card.appendChild(image);
                card.appendChild(name);
                card.appendChild(price);
                card.appendChild(priceChange);

                cryptoContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            cryptoContainer.innerHTML = '<p>Error loading data. Please try again later.</p>';
        });
});
