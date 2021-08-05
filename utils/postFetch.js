export default async function postFetch({url, params = undefined, method = 'POST'}){
    const res = await fetch(url,{
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    const resJson = await res.json()
    return resJson

}