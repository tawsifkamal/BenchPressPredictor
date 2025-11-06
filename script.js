document.addEventListener('DOMContentLoaded', () => {
    const repoContainer = document.getElementById('repo-container');

    fetch('https://api.github.com/repositories')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(repositories => {
            repositories.forEach(repoData => {
                const repoElement = document.createElement('div');
                repoElement.classList.add('repo');

                const repoName = document.createElement('h2');
                const repoLink = document.createElement('a');
                repoLink.href = repoData.html_url;
                repoLink.textContent = repoData.name;
                repoName.appendChild(repoLink);

                const repoDescription = document.createElement('p');
                repoDescription.textContent = repoData.description || 'No description provided.';

                const ownerInfo = document.createElement('p');
                ownerInfo.innerHTML = `<strong>Owner:</strong> <a href="${repoData.owner.html_url}">${repoData.owner.login}</a>`;

                repoElement.appendChild(repoName);
                repoElement.appendChild(repoDescription);
                repoElement.appendChild(ownerInfo);

                repoContainer.appendChild(repoElement);
            });
        })
        .catch(error => {
            repoContainer.textContent = 'Failed to load repositories.';
            console.error('Error fetching repositories:', error);
        });
});
