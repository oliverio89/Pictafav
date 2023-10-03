import { useState } from "react"

const NewDescription = () => {

    const [description, setDescription] = useState("")


    function handleChange(e) {
        setDescription(e.target.value);
    }

    return (
        <>
            <br></br>
            <p>Descripción: {description}</p>
            <input value={description} onChange={handleChange} placeholder="Escribe aquí tu descripción" />
            <button onClick={() => setDescription('')}>
                Reiniciar
            </button>
        </>
    );
}









export default NewDescription