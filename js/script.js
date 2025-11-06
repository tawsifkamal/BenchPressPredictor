document.addEventListener('DOMContentLoaded', () => {
    const repoList = document.getElementById('repo-list');

    fetch('https://api.github.com/orgs/google/repos')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const ul = document.createElement('ul');
                data.forEach(repo => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = repo.html_url;
                    a.textContent = repo.name;
                    a.target = '_blank';
                    li.appendChild(a);
                    ul.appendChild(li);
                });
                repoList.appendChild(ul);
            } else {
                repoList.textContent = 'No repositories found.';
            }
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            repoList.textContent = 'Failed to load repositories.';
        });
});
