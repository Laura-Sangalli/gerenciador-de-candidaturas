import  type { Job } from "../types/Job";
import '../index.css'
import { useState } from "react";
import EditJobMenu from "./EditJobMenu";

interface JobTableProps{
    jobs: Job[];
}

function JobTable({ jobs }: JobTableProps){
    
    const [oppenMenu, setOpenMenu] = useState<number>(0);

    const toggleMenu = (id:number) => {
        setOpenMenu(oppenMenu === id ? 0 : id);
    }

        return(
            <table className="job-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Vaga</th>
                        <th>Empresa</th>
                        <th>URL</th>
                        <th>Situação</th>
                        <th> </th>
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
                                <td>
                                    <div className="job_edit">
                                        <button onClick={() => toggleMenu(job.id)}>...</button>

                                        {
                                            oppenMenu === job.id && <EditJobMenu/>
                                        }
                                    </div>
                                </td>

                            </tr>       
                        )

                        )
                    }
                </tbody>
                
                <thead className="job-table_footer">
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th> </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

            </table>
        );
}

export default JobTable;


