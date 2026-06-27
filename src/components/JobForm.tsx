import { useState } from "react";
import { createJob } from "../services/api";
import '../index.css'

function JobForm(){
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [url, setUrl] = useState(window.location.href);

      const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Botão clicado!");

        await createJob({
        title,
        company,
        url: "",
        status: "Applied"
        });

        alert("Vaga salva!");
    };

    return (
        <form onSubmit={handleSubmit} className="formulario">
            <div className="campo_input">
                <label >Vaga</label>
                <input value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="campo_input">
                <label >Empresa</label>
                <input value={company}
                onChange={(e) => setCompany(e.target.value)}/>
            </div>

            <div className="campo_input">
                <label >URL</label>
                <input value={url}
                onChange={(e) => setCompany(e.target.value)}/>
            </div>

            <div className="campo_input">
                <label >Situação</label>
                <input value={company}
                onChange={(e) => setCompany(e.target.value)}/>
            </div>

            <button type="submit">Salvar</button>

        </form>
    )
}

export default JobForm;