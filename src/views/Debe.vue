<template>
  <div class="column is-9">
    <h1 class="size-3">debe - {{ date }}</h1>
    <entry
      v-for="entry in entries"
      :key="entry.id"
      :entry="entry"
      :collapsed="true"
    ></entry>
  </div>
</template>

<script>
import axios from "axios";
import Entry from "../components/Entry.vue";
export default {
  name: "Debe",
  data() {
    return {
      date: "",
      entries: []
    };
  },
  created() {
    this.getDebe();
  },
  methods: {
    getDebe() {
      axios.get(this.baseUrl + "debe").then(res => {
        this.entries = res.data.entries;
        this.date = res.data.date;
      });
    }
  },
  components: {
    Entry
  }
};
</script>

<style scoped>
.box {
  padding: 0.25rem;
  margin-bottom: 0.25rem;
}
</style>
