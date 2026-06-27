import React, { useState } from "react";
import { createJob } from "../services/api";
import '../index.css'

type opcoesDeSituacao = 'Inscrito' | 'Teste lógica feito' | 'Teste idioma feito' | 'Entrevista realizada' | 'Dinâmica realizada' | 'Documentos Enviados' | 'Vaga salva';

function JobForm(){
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [url, setUrl] = useState(window.location.href);
    const [situacao, setSituacao] = useState<opcoesDeSituacao>("Vaga salva");
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSituacao(e.target.value as opcoesDeSituacao);
    }
   
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Botão clicado!");

        await createJob({
        title,
        company,
        situacao,
        url,
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
                onChange={(e) => setUrl(e.target.value)}/>
            </div>

            <div className="campo_input">
                <label >Situação</label>
                <select value={situacao} onChange={handleChange}>
                   <option value="Inscrito">Inscrito</option>
                   <option value="Teste lógica feito">Teste lógica feito</option>
                    <option value="Teste idioma feito">Teste idioma feito</option>
                    <option value="Entrevista realizada">Entrevista realizada</option>
                    <option value="Dinâmica realizada">Dinâmica realizada</option>
                    <option value="Documentos Enviados">Documentos Enviados</option>
                    <option value="Vaga salva">Vaga salva</option>
                </select>
             </div>

            <button type="submit">Salvar</button>

        </form>
    )
}

export default JobForm;
