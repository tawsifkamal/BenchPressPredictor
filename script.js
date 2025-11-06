document.addEventListener('DOMContentLoaded', () => {
    const repositoriesList = document.getElementById('repositories-list');

    fetch('https://api.github.com/repositories')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(repositories => {
            repositories.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.classList.add('repository');

                const repoName = document.createElement('h2');
                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.textContent = repo.full_name;
                repoName.appendChild(repoLink);

                const repoDescription = document.createElement('p');
                repoDescription.textContent = repo.description || 'No description provided.';

                repoElement.appendChild(repoName);
                repoElement.appendChild(repoDescription);
                repositoriesList.appendChild(repoElement);
            });
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            repositoriesList.textContent = 'Failed to load repositories.';
        });
});
