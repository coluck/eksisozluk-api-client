<template>
  <div id="app" class="container">
    <navigation></navigation>
    <div class="columns mt-6">
      <div class="column is-3 is-hidden-mobile">
        <left-pane :type="type" :threads="threads"></left-pane>
      </div>
      <div class="column is-9">
        <router-view />
        <Footer />
      </div>
      <!-- <div class="column is-3"></div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

import "@trevoreyre/autocomplete-vue/dist/style.css";

import Navigation from "@/components/Navigation.vue";
import LeftPane from "@/components/LeftPane.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Main",
  data() {
    return {
      type: "başlıklar",
      // search: "",
      titles: [],
      threads: [],
      debe: {},
      results: []
    };
  },
  created() {
    this.getThreads();
  },
  computed: {},
  methods: {
    getThreads() {
      axios.get(this.baseUrl + "basliklar").then(res => {
        this.threads = res.data;
      });
    }
  },
  components: {
    Navigation,
    LeftPane,
    Footer
  }
};
</script>

<style></style>
