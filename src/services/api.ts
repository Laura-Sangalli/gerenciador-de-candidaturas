const API_URL = "http://localhost:8000";

export async function createJob(job: unknown) {
    const response = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    body: JSON.stringify(job)});

    return response.json();
}