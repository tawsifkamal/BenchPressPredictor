const repoList = document.getElementById('repositories-list');
const apiUrl = 'https://api.github.com/repositories';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const repoElement = document.createElement('div');
            repoElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>Owner: ${repo.owner.login}</p>
            `;
            repoList.appendChild(repoElement);
        });
    })
    .catch(error => {
        console.error('Error fetching repositories:', error);
        repoList.innerHTML = '<p>Sorry, something went wrong while fetching the repositories.</p>';
    });
