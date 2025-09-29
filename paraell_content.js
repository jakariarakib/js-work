function contentDownload(urls){
    const promises = urls.map(url =>{
        return new promises((resolve, reject) => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(`Http status: ${response.status}`);
                }
                return response.text()
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    })
    return Promise.all(promises);
}
