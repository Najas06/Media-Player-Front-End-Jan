import axios from "axios"

const commmonAPI = async(httpmethod,url,reqBody)=>{
    const reqConfiq = {
        method:httpmethod,
        url:url,
        data:reqBody,
        headers:{'Content-Type':'application/json'}
    }

   return await axios(reqConfiq).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}

export default commmonAPI;