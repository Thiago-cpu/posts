export default async function postFetch({url, params = {}, method = 'POST'}){
    return fetch(url,{
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        .then(res=>{
            if(!res.ok) throw new Error('is not ok')
            return res.json()
        })
        .then(res => {  
            return res
        })
         
}