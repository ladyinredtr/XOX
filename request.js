class Request{


    async get(url)
    {
        const response = await fetch(url) 
        const data = await response.json()
        return data
    }


    async post(url, data)
    {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset-UTF-8"
            }
        })

          

        return await response.json()
    }


    async put(url, data)
    {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset-UTF-8"
            }
        })

        
        return await response.json()
         
    }

    
    async delete(url)
    {
        const response = await fetch(url, {
            method: 'DELETE'
        })

        const data = await response.json()
        
        return 'deleted...'
    }

}

 
export const request = new Request();

// Example use
// request.get("url")
// .then(e => {
//     console.log(e)
// })
// .catch(err => console.log(err))