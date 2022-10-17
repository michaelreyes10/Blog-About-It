function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#username-signup').value.trim();

    if (username && email && password) {
        fetch('/api/users',{
            method: 'POST',
            body:JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}

        }).then((response)=> { console.log(response)})
    }

}
document.querySelector ('signup-form').addEventListener('submit', signupFormHandler);