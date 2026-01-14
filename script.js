document.addEventListener('DOMContentLoaded', () => {
    const repoContainer = document.getElementById('repo-container');

    fetch('https://api.github.com/repositories')
        .then(response => response.json())
        .then(data => {
            data.slice(0, 10).forEach(repo => { // Displaying the first 10 repos
                const repoEl = document.createElement('div');
                repoEl.classList.add('repo');

                const repoName = document.createElement('h2');
                repoName.textContent = repo.name;

                const repoDescription = document.createElement('p');
                repoDescription.textContent = repo.description || 'No description available.';

                const repoOwner = document.createElement('p');
                repoOwner.innerHTML = `<strong>Owner:</strong> ${repo.owner.login}`;

                repoEl.appendChild(repoName);
                repoEl.appendChild(repoDescription);
                repoEl.appendChild(repoOwner);

                repoContainer.appendChild(repoEl);
            });
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            repoContainer.textContent = 'Failed to load repositories.';
        });
});
