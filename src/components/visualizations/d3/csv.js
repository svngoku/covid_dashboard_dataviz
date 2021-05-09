import * as d3 from "d3"

const importCSV = (url) => {
    d3.csv(url, (data) => data);
};

export default importCSV;