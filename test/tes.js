const autocannon = require("autocannon");

const url = 'http://localhost:8080';
const duration = 30;

const instance = autocannon({
    url,
    duration
}, (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        // console.log("Error", result.errors);
        // console.log("Timeouts:", result.timeouts);
        // console.log("Requests:", result.requests);
        console.log("Number of requests:", result.requests.total);
        console.log("Duration (seconds):", result.duration)
    }
})

autocannon.track(instance, { renderProgressBar: false, renderResultsTable: false });