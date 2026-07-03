const autocannon=require("autocannon");

const url='http://localhost:8000';
const duration = 60;

const instance=autocannon({
    url,
    duration
},(err,result)=>{
    if(err){
        console.log("Error", err);
    } else{
        console.log("Number of requests:", result.requests.total);
        console.log("Duration (seconds):", result.duration)
    }
})

autocannon.track(instance);