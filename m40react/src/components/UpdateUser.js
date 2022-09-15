import React from "react";
import { useState } from "react";
import { updateUser} from "../utils";


const Update = () => {
    const [username, setUsername] = useState();

    const submitHandler = async (event) => {
        event.preventDefault()
        await updateUser(username)
}
}

export default Update