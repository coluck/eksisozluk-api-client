<template>
  <div id="mn">
    <aside class="menu">
      <p class="menu-tit has-text-centered">
        <b>{{ type }}</b>
      </p>
      <ul class="menu-list">
        <li v-for="thread in threads" v-bind:key="thread.id">
          <a @click="goThread(thread.slug)"
            >{{ thread.title }}
            <small>{{ thread.entry_count }}</small>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: "LeftPane",
  props: {
    threads: Array,
    type: String
  },
  methods: {
    goThread(slug) {
      // let path = slug.split("https://eksisozluk.com/")[1];
      this.$router.push({
        name: "Baslik",
        params: { slug: slug.substring(1) }
      });
    }
  }
};
</script>

<style scoped>
#mn {
  position: sticky;
  top: 88px;
  /* width: 22%; */
  /* max-width: 340px; */
}
.menu-tit {
  margin: 20px 0;
}
ul.menu-list {
  height: 80vh;
  overflow-y: auto;
  padding-right: 10px;
}
.menu-list > li > a {
  position: relative;
  padding: 10px;
  padding-right: 30px;
}
.menu-list > li > a > small {
  position: absolute;
  right: 0;
  top: 10px;
}
</style>
