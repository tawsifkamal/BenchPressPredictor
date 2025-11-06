fetch('https://api.github.com/users/octocat/repos')
    .then(response => response.json())
    .then(repositories => {
        const repositoriesContainer = document.getElementById('repositories');
        repositories.forEach(repo => {
            const repoElement = document.createElement('div');
            repoElement.classList.add('repository');
            repoElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description'}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            repositoriesContainer.appendChild(repoElement);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
