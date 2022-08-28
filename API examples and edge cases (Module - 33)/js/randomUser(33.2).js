const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById('usersContainer');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>user name</h3>
        <p>user info</p>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city} ${user.location.country}</p>
        `;
        usersContainer.appendChild(userDiv)
    }
}

loadUsers();