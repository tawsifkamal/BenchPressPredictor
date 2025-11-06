document.addEventListener('DOMContentLoaded', () => {
    const repoInput = document.getElementById('repo-input');
    const searchBtn = document.getElementById('search-btn');
    const repoInfo = document.getElementById('repo-info');

    const fetchRepoData = (repoName) => {
        if (!repoName) {
            repoInfo.innerHTML = '<p>Please enter a repository name.</p>';
            return;
        }

        fetch(`https://api.github.com/repos/${repoName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Repository not found');
                }
                return response.json();
            })
            .then(data => {
                const { full_name, description, stargazers_count, forks_count, open_issues_count, html_url } = data;
                repoInfo.innerHTML = `
                    <h2><a href="${html_url}" target="_blank">${full_name}</a></h2>
                    <p>${description || 'No description available.'}</p>
                    <p><strong>Stars:</strong> ${stargazers_count}</p>
                    <p><strong>Forks:</strong> ${forks_count}</p>
                    <p><strong>Open Issues:</strong> ${open_issues_count}</p>
                `;
            })
            .catch(error => {
                repoInfo.innerHTML = `<p>${error.message}</p>`;
            });
    };

    searchBtn.addEventListener('click', () => {
        fetchRepoData(repoInput.value.trim());
    });

    repoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            fetchRepoData(repoInput.value.trim());
        }
    });

    // Fetch initial repository as requested
    repoInput.value = 'danikhan632/foo';
    fetchRepoData('danikhan632/foo');
});