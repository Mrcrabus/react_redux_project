import  axios from "axios";


export const fetchCustomers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            return res.data
        })


}
