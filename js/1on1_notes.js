let url = "https://cat-fact.herokuapp.com/facts"
fetch(url + "/random")
    .then(function(response){
        response.json()
            .then(function(response){
                console.log(response);
            })
    }) //happy path - we got something back we wanted
//.catch() //unhappy path - we need to handle this error
$.ajax(url).done(function(data){
    console.log(data)
})
//i. We need to structure where the request is going
//* fetch(url) or $.ajax(url)
//ii. What kind of options do I need to send with the request?
//* apiKey? content-type (what shape is my data? json?) method! get (trying to retrieve something), modifying (new data in a POST, modification of existing data in PUT/PATCH)
//iii. with one and two set up, waiting (pending) for the request to be fulfilled. we anticipate two paths - .done/.then for happy path, .catch/.fail for error/unhappy path
//iv. .then or .done - I get data back. a >>collection<< of data is typically we get back (ALL movies, ALL coffees, ALL cat facts, ALL forecast)
//* in FETCH, there would be an extra chain to .json the response
//v. .fail/.catch - what do we do with the user experience when we do not get the data back we need? custom error page? alert > sorry this broke!
let dreamObj = {dream: "My dream is this"}
let options = {
    body: dreamObj
}