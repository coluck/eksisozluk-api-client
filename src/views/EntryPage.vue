<template>
  <div class="column is-9">
    <div v-if="!loading">
      <entry :entry="entry" :key="entry.id"></entry>
    </div>
    <div v-else class="box">#{{ id }} no'lu entry yükleniyor...</div>
  </div>
</template>

<script>
import axios from "axios";

import Entry from "@/components/Entry.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      loading: true,
      entry: {}
    };
  },
  watch: {
    $route(to) {
      this.getEntry(to.params.id);
      this.loading = true;
    }
  },
  created() {
    this.getEntry(this.id);
  },
  methods: {
    getEntry(id) {
      axios
        .get(this.baseUrl + "entry/" + id)
        .then(res => {
          this.entry = res.data;
        })
        .finally(() => (this.loading = false));
    }
  },
  components: {
    Entry
  }
};
</script>

<style></style>
