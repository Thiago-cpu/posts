export default async function postFetch({url, params = {}, method = 'POST'}){
    if (method === 'GET' || method === 'HEAD'){
        return fetch(url,{
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            if(!res.ok) throw new Error('is not ok')
            return res.json()
        })
        .then(res => {  
            return res
        })
    }
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