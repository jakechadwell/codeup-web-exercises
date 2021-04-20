"use strict";


function getLastPushDate(githubUsername) {
    let url = `https://api.github.com/users/${githubUsername}/events`
    let githubResponse = fetch(url, {headers: {'Authorization': `${githubToken}`}});
        return githubResponse
            .then((response)=>{
                return response.json();
            })
            .then((githubEventData)=>{
                for(let githubEvent of githubEventData) {
                    if(githubEvent.type === "PushEvent") {
                        return new Date(githubEvent.created_at);
                    }
                }
            });
}

getLastPushDate("jakechadwell").then((date)=>console.log(date));
