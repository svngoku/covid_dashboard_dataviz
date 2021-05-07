import axios from "axios";
const url = `http://localhost:8000/afrique_central`;

export default {
    getAll: async () => {
      let res = await axios.get(url);
      if(res.status === 200) {
        return res.data
      }
    }
};
