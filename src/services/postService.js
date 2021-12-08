
const rootUrl = "https://localhost:5001/advertises";
//const rootUrl = "http://localhost:5000/advertises";

export async function postProperties(path, formData){

    let fullUrl = rootUrl;
        if(path){
           fullUrl += `${path}`; 
        }

        console.log("values");
        for (var value of formData.values()) {
            console.log(value);
         }
                
try{
    return await fetch(fullUrl, 
        {
            method: 'POST',  
            headers: {
                "accept": "application/json, image/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: formData
        })
    .then(res => res.json());
}
catch(er){
    console.log(er);

    return null;
}
}