import JobTable from "../components/JobTable";
import type { Job } from "../types/Job";
import '../index.css'
import { CgToday } from "react-icons/cg";


function Jobs(){
    const today = new Date().toLocaleDateString("pt-BR");

        const vagas: Job[] = [
        {
            id: 1,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Inscrito", 
            ultimaAtualizacao: today
        },
                {
            id: 2,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Teste de lógica concluído",
            ultimaAtualizacao: today
        },
                {
            id: 3,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Teste de idiomas concluído",
            ultimaAtualizacao: today
        },
                {
            id: 4,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Entrevista realizada",
            ultimaAtualizacao: today
        },
                {
            id: 5,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Dinâmica realizada",
            ultimaAtualizacao: today
        },
                {
            id: 6,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Documentos Enviados",
            ultimaAtualizacao: today
        },
                {
            id: 7,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Vaga salva",
            ultimaAtualizacao: today

        },
                        {
            id: 8,
            title: "Estágio Desenvolvimento de Software",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Vaga finalizada",
            ultimaAtualizacao: today

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