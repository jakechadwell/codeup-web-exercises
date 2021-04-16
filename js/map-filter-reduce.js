"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Number 2:

const threeLanguages = users.filter(user => user.languages.length > 2);
console.log(threeLanguages);

//Number 3:

const emails = users.map(ele => ele.email);
console.log(emails);

//Number 4:

const experienceSum = users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0);
console.log(experienceSum/users.length)

//Number 5:

const longestEmail = users.reduce((longEmail, user) => {
    if(longEmail.length<user.email.length){
        longEmail = user.email
    } return longEmail
}, "");
console.log(longestEmail);

//Number 6:

const userNames = users.reduce((all, user) => {
    return all + user.name + ","
}, "");
console.log(userNames);

//Bonus:

const uniqueLang = users.reduce((langList, user) => {

    user.languages.forEach(function (language){
        if(!langList.includes(language)){
            langList.push(language)
        }
    })

    return langList

}, [])
console.log(uniqueLang);