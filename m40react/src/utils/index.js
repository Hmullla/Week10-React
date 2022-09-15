export const login = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
        setter(data.username)

    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/signUp", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
        setter(data.username)
        localStorage.setItem("MyToken", data.token);
        console.log(localStorage.getItem("MyToken"));

    } catch (error) {
        console.log(error)
    }
}

//TODO: ADD FUNCTION TO LOG THE LIST OF USERS IN THE DATABSE 

export const displayUsers = async (setter) => {
    try {
        const response = await fetch("http://localhost:5001/displayUsers", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json()
        const usernames = data.users.map(users => users.username)
        console.log(usernames)
        return usernames
    } catch (error)  {
        console.log(error)
    }
}

export const updateUser = async (username) => {
    try {
        const response = await fetch("http://localhost:5001//updateUser", {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("MyToken")}`},
            body: JSON.stringify({
                "username" : username
            })
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (setter) => {
    try {
        console.log(localStorage.getItem("MyToken"));
        const response = await fetch("http://localhost:5001/user", {
            method: "DELETE",
            headers: {"Authorization": `Bearer ${localStorage.getItem("MyToken")}`}
        });
        setter("");
    } catch (error) {
        console.log(error)
    }
}