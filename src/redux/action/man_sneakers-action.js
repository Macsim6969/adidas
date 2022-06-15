import axios from "axios"

export const fetchManSneaker = (id) => (dispatch) =>{
    axios.get(`https://6293babe7aa3e6af1a102469.mockapi.io/adidas/menshoes/menshoes?imageURL=${id}`).then(resp =>{
        console.log(resp.data)
    })
}