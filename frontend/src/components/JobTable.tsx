import  type { Job } from "../types/Job";
import '../index.css'

interface JobTableProps{
    jobs: Job[];
}

function JobTable({ jobs }: JobTableProps){
        return(
            <table className="job-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Vaga</th>
                        <th>Empresa</th>
                        <th>URL</th>
                        <th>Situação</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        jobs.map((job)=>(
                            <tr key={job.id} className="job-row">
                                <td>{job.id}</td>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td><a href="{job.url}" className="job-link">{job.url}</a></td>
                                <td className="job-status">{job.situacao}</td>
                                <td><button>...</button></td>
                            </tr>
                        )

                        )
                    }
                </tbody>

            </table>
        );
}

export default JobTable;


