import JobTable from "../components/JobTable";
import type { Job } from "../types/Job";
import '../index.css'


function Jobs(){

        const vagas: Job[] = [
        {
            id: 1,
            title: "Estágio Desenvolvimento",
            company: "Empresa X",
            url: "https://google.com",
            situacao: "Inscrito"
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