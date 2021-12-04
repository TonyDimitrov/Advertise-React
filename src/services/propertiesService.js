const rootUrl = "https://localhost:5001/advertises";

export async function getProperties(path){

    let fullUrl = rootUrl;
        if(path){
           fullUrl += `${path}`; 
        }

     return await fetch(fullUrl)
    .then(res => res.json());
}