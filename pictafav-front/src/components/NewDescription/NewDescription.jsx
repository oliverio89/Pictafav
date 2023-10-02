import { useState } from "react"

const NewDescription = () => {

    const [description, setDescription] = useState("")

    const newTextDescription = (textDescription) => {
        setDescription(textDescription)
    }


    return (
        <div>
            <p>descripción: {description}</p>
            <input type="text" onClick={() => setDescription(description)} placeholder="description" />
            <hr />
        </div>
    )

}

export default NewDescription