document.addEventListener('DOMContentLoaded', () => {
    const repoContainer = document.getElementById('repo-container');

    fetch('https://api.github.com/repositories')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            repoContainer.innerHTML = ''; // Clear loading/error messages
            data.slice(0, 10).forEach(repo => {
                const repoEl = document.createElement('div');
                repoEl.classList.add('repo');

                const repoName = document.createElement('h2');
                repoName.textContent = repo.name;

                const repoDescription = document.createElement('p');
                repoDescription.textContent = repo.description || 'No description available.';

                repoEl.appendChild(repoName);
                repoEl.appendChild(repoDescription);
                repoContainer.appendChild(repoEl);
            });
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            repoContainer.innerHTML = `<p class="error">Could not fetch repositories. Please try again later.</p>`;
        });
});