const fs = require("fs");
const Data = require("./json_RCA.json");

const data_2010 = [];
const nodes_2010 = [];
const data_2011 = [];
const nodes_2011 = [];
const data_2012 = [];
const nodes_2012 = [];
const data_2013 = [];
const nodes_2013 = [];
const data_2014 = [];
const nodes_2014 = [];
const data_2015 = [];
const nodes_2015 = [];
const data_2016 = [];
const nodes_2016 = [];
const data_2017 = [];
const nodes_2017 = [];
const data_2018 = [];
const nodes_2018 = [];
const data_2019 = [];
const nodes_2019 = [];
const data_2020 = [];
const nodes_2020 = [];
const data_2021 = [];
const nodes_2021 = [];

Data.map((node) => {
  switch (node["Año Comercial"]) {
    case 2010:
      nodes_2010.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2010.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2011:
      nodes_2011.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2011.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2012:
      nodes_2012.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2012.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2013:
      nodes_2013.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2013.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2014:
      nodes_2014.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2014.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2015:
      nodes_2015.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2015.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2016:
      nodes_2016.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2016.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2017:
      nodes_2017.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2017.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2018:
      nodes_2018.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2018.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2019:
      nodes_2019.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2019.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2020:
      nodes_2020.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2020.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
    case 2021:
      nodes_2021.push({
        id: node["Codigo Arancelario"],
        rca: node["RCAe"],
        color: node["RCAe"] > 1 ? "#03fc77" : "#fc3503",
      });
      data_2021.push({
        from: node["Codigo Arancelario"],
        to: "Seccion " + node["Seccion"],
      });
      break;
  }
});

console.log(data_2010.length);
const dict = {
  2010: { data: data_2010, nodes: nodes_2010 },
  2011: { data: data_2011, nodes: nodes_2011 },
  2012: { data: data_2012, nodes: nodes_2012 },
  2013: { data: data_2013, nodes: nodes_2013 },
  2014: { data: data_2014, nodes: nodes_2014 },
  2015: { data: data_2015, nodes: nodes_2015 },
  2016: { data: data_2016, nodes: nodes_2016 },
  2017: { data: data_2017, nodes: nodes_2017 },
  2018: { data: data_2018, nodes: nodes_2018 },
  2019: { data: data_2019, nodes: nodes_2019 },
  2020: { data: data_2020, nodes: nodes_2020 },
  2021: { data: data_2021, nodes: nodes_2021 },
};

fs.writeFile("./data.json", JSON.stringify(dict), function (err, result) {
  if (err) console.log("error", err);
});
