const form = document.querySelector("form");

const currentHostname = window.location.hostname;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    login({
        name: form.elements["name"].value,
        password: form.elements["password"].value
    });
});

function login(userdata) {
    console.log(JSON.stringify(userdata));

    const options = {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(userdata),
        headers: myHeaders,
    };

    fetch(`http://${currentHostname}:8080/auth/login`, options)
        .then((response) => {
            console.log(response.status);``
            if (response.status == 200)
                window.location.replace("/lobby"); 
        })
        .catch((error) => {
            console.log(error);
        });
}
