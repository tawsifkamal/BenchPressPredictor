document.addEventListener('DOMContentLoaded', () => {
    const repoContainer = document.getElementById('repo-container');

    async function fetchInitialRepositories() {
        try {
            const response = await fetch('https://api.github.com/repositories');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const repos = await response.json();
            displayRepositories(repos);
        } catch (error) {
            console.error('Failed to fetch repositories:', error);
            repoContainer.innerHTML = '<p>Error loading repositories. Please try again later.</p>';
        }
    }

    function displayRepositories(repos) {
        if (!repos || repos.length === 0) {
            repoContainer.innerHTML = '<p>No repositories found.</p>';
            return;
        }

        const repoList = document.createElement('ul');
        repos.slice(0, 10).forEach(repo => { // Displaying first 10 for brevity
            const listItem = document.createElement('li');
            listItem.className = 'repo-item';

            const repoLink = document.createElement('a');
            repoLink.href = repo.html_url;
            repoLink.target = '_blank';
            repoLink.textContent = repo.full_name;

            const repoDescription = document.createElement('p');
            repoDescription.textContent = repo.description || 'No description available.';

            listItem.appendChild(repoLink);
            listItem.appendChild(repoDescription);
            repoList.appendChild(listItem);
        });
        repoContainer.appendChild(repoList);
    }

    fetchInitialRepositories();
});
