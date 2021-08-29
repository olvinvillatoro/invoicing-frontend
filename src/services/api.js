import axios from "axios";
/*
const get =() =>{
    return new Promise((resolve)=>{
        axios.get("https://invoicing-api1.herokuapp.com/products/products/").then(
            function (response){
                console.log(response)
                resolve(response);
            }
        )
        .catch(function(error){
            resolve({message:error})
        })
    })
}
get,
}
*/
export default axios.create({
    baseURL:"https://invoicing-api1.herokuapp.com/products/"
})
    