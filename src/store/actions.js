import axios from "axios";
import Vue from "vue";

export const loadData = ({ commit }) => {
  axios
    .get("/data.json")

    .then(res => {
      const data = res.data;
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          funds,
          stockPortfolio
        };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    })
    .catch(error => console.log(error));
};
