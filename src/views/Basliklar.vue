<template>
  <div class="column is-6">
    <aside class="menu" v-if="!loading">
      <p class="menu-label">
        {{ kanal }}
      </p>
      <ul class="menu-list">
        <li v-for="thread in threads" :key="thread.id">
          <router-link
            :to="{ name: 'Baslik', params: { slug: thread.slug.substring(1) } }"
          >
            {{ thread.title }} <small>{{ thread.entry_count }}</small>
          </router-link>
        </li>
      </ul>
    </aside>
    <div v-else>
      yükleniyor
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Basliklar",
  data() {
    return {
      threads: [],
      kanal: "",
      loading: true
    };
  },
  created() {
    this.kanal = this.$route.params.kanal;
    this.getThreads();
  },
  watch: {
    $route() {
      this.kanal = this.$route.params.kanal;
      this.getThreads();
      this.loading = true;
      this.error = false;
    }
  },
  methods: {
    getThreads() {
      let url = this.baseUrl + "basliklar?kanal=" + this.kanal;
      axios
        .get(url)
        .then(res => {
          this.threads = res.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.menu-list a {
  padding: 1rem;
  position: relative;
}
.menu-list > li > a > small {
  position: absolute;
  right: 10px;
  top: 15px;
}
</style>
