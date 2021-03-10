import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Content-Type": "application/json",
        "token":localStorage.getItem('token')|null
    }
  });
export const get=(endPoint)=>{
   return new Promise((resolver,reject)=>{
    instance.get(endPoint).then((data)=>{
            resolver(data);
        }).catch((err)=>{
            reject(err)
        })

   }) 
}
