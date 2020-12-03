<template>
  <div>
    <autocomplete
      :search="search"
      @submit="handleSubmit"
      auto-select
    ></autocomplete>
  </div>
</template>

<script>
import axios from "axios";

import "@trevoreyre/autocomplete-vue/dist/style.css";

import Autocomplete from "@trevoreyre/autocomplete-vue";

export default {
  name: "Main",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    async search(input) {
      if (input.length == "") return "";
      let url = this.baseUrl + "autocomplete/" + input;
      let res = await axios.get(url, {});
      return res.data.Titles;
    },
    handleSubmit(result) {
      if (result === undefined) return;
      this.$router.push({ name: "Baslik", params: { slug: result } });
      // console.log(result.target);
    }
  },

  components: {
    Autocomplete
  }
};
</script>

<style>
.autocomplete-input {
  line-height: 0;
  /* background-color: rgb(236, 198, 198); */
  padding: 8px 8px 8px 48px;
}
.autocomplete-result {
  color: black;
}
</style>
