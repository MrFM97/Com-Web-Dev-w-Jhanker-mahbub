const loadUserFetch = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.results[0]))
        .catch(error => console.log(error))
}

const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    // error catching system
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0]); // console.log(data); ও লেখা যাবে
    } catch (error) {
        console.log(error);
    }
    // error catching system

}

const displayUser = user => {
    console.log(user);
}