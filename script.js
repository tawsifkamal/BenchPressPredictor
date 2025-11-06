document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('repo-list');

    fetch('https://api.github.com/repositories')
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || 'No description available.'}</p>
                `;
                repoList.appendChild(repoElement);
            });
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            repoList.innerHTML = '<p>Could not fetch repositories. Please try again later.</p>';
        });
});
