import JobTable from "../components/JobTable";
import type { Job } from "../types/Job";
import '../index.css'
import { CgToday } from "react-icons/cg";


function Jobs(){

        const vagas: Job[] = [
        {
            id: 1,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Inscrito", 
        },
                {
            id: 2,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Teste de lógica concluído"
        },
                {
            id: 3,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Teste de idiomas concluído"
        },
                {
            id: 4,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Entrevista realizada"
        },
                {
            id: 5,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Dinâmica realizada"
        },
                {
            id: 6,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Documentos Enviados"
        },
                {
            id: 7,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Vaga salva"
        },
                        {
            id: 8,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Vaga finalizada"
        }
    ];


    return(
        <div>
            <h1 className="title">Minhas Candidaturas</h1>
            
            <JobTable jobs={vagas}/>
        </div>
    );
}

export default Jobs;