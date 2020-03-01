// Imports

// Definition
class Database {
    static async GetJobs() {
        let jobs = [];
        try {
            let resultRaw = await fetch("http://localhost:8000/businesstype");
            let resultJson = await resultRaw.json();

            for (let el of resultJson) {
                jobs.push({id: el._id, name: el.name})
            }
        } catch (err) {
            console.log(err);
        }

        return jobs;
    }
}

// Export
export { Database }
