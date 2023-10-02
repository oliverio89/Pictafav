import { useState } from "react"

const newDescription = () => {

    const [description, setDescription] = useState("un lugar maravillo")

    const newTextDescription = (textDescription) => {
        setDescription(textDescription)
    }


    return (
        <div>
            <p>descripción: {description}</p>
            <input type="text" onChange={e => newTextDescription(e.target.value)} placeholder />
            <hr />
        </div>
    )

}

export default newDescription