//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const { Country } = require("./src/db");
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  try {
    axios.get("https://restcountries.com/v2/all").then((e) => {
      // console.log(e.data);
      return e.data.map((e) => {
        // console.log(e);
        let nameLittle = e.name.toLowerCase();
        Country.findOrCreate({
          where: {
            name: nameLittle,
            id: e.alpha3Code,
            capital: e.capital ? e.capital : "not found",
            image: e.flags.png,
            continent: e.region,
            subregion: e.subregion,
            area: e.area ? e.area : 0,
            population: e.population,
          },
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
