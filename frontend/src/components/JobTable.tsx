import  type { Job } from "../types/Job";
import '../index.css'

interface JobTableProps{
    jobs: Job[];
}

function JobTable({ jobs }: JobTableProps){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Vaga</th>
                        <th>Empresa</th>
                        <th>URL</th>
                        <th>Situação</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        jobs.map((job)=>(
                            <tr key={job.id}>
                                <td>{job.id}</td>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td><a href="{job.url}">{job.url}</a></td>
                                <td>{job.situacao}</td>
                            </tr>
                        )

                        )
                    }
                </tbody>

            </table>
        );
}

export default JobTable;


