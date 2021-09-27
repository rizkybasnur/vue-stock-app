<template>
  <div>
    <Stock v-for="(stock, i) in stocks" :key="i" :stock="stock" />
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    Stock
  }
};
</script>
