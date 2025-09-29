function makeget_request(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error(`Http error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(data => reject(data))
    });

}
makeget_request('http:example.com/data')
.then(data => {
    console.log('Response data' + data)
})
.catch(error => {
    console.log("Erorr : " + error.message)
})