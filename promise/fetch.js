fetch({name:'name1'})
.then( response => {
    return response.json();
})
.then( json => {
    console.log(json);
})
.catch(err => {
    console.log(err);
})