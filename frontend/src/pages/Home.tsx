import JobForm from "../components/JobForm";
import Social from "../components/Social";
function Home(){
    return (
        <>
        <h1 className="title">Gerenciador de Candidaturas</h1>
        <JobForm/>
        <Social/>
        </>
    )
}
export default Home;