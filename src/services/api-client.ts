import axios from "axios";

export default axios.create({
    baseURL:'http://3.104.98.246/api/',
    params:{
       // key:'3532e930d85148ec868c4e97571ba32a'
    },
})