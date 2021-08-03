export default async function postFetch(url, params){
    const res = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    const resJson = await res.json()
    return resJson

}