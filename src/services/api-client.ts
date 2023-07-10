import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'3532e930d85148ec868c4e97571ba32a'
    },
})