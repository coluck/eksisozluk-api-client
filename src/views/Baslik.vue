<template>
  <div class="column is-9">
    <div v-if="!loading && !error">
      <div class="box">
        <p class="is-size-5 has-text-weight-bold">
          {{ title }}
        </p>
      </div>
      <div class="level is-mobile">
        <div class="level-left">
          <sort-mode></sort-mode>
        </div>
        <div class="level-right">
          <div v-if="total_page > 1">
            <pager
              :total_page="total_page"
              :current_page="current_page"
              :t_slug="slug"
            >
            </pager>
          </div>
        </div>
      </div>
      <div v-if="tags" class="tags">
        <div v-for="tag in tags" :key="tag" class="tag">
          {{ tag }}
        </div>
      </div>
      <div v-if="entries">
        <entry v-for="entry in entries" :entry="entry" :key="entry.id"></entry>
      </div>
    </div>
    <div v-else-if="loading" class="box">
      yükleniyor ...
    </div>
    <div v-else>
      <p class="box is-size-5">
        olmaz olsun böyle başlık
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Pager from "@/components/Pager.vue";
import Entry from "@/components/Entry.vue";
import SortMode from "@/components/SortMode.vue";

export default {
  data() {
    return {
      loading: true,
      error: false,
      routeSlug: this.$route.params.slug,
      slug: "",
      title: "",
      current_page: 0,
      total_page: 0,
      entries: [],
      tags: []
    };
  },
  watch: {
    $route() {
      // let top = to.params.slug;
      // this.getThread
      // this.getThread(to.params.slug);
      // console.log(this.$route.params.slug);
      this.getThread(this.$route.params.slug);
      // console.log("this.$route.params.slug: " + this.$route.params.slug);

      this.loading = true;
      this.error = false;
    }
  },
  created() {
    // this.getThread(this.routeSlug);
    // console.log("this.$route.params.slug: " + this.$route.params.slug);
    // console.log("this.$route.query.p: " + this.$route.query.p);
    this.getThread(this.$route.params.slug);
    // console.log("created");
  },
  methods: {
    getThread(sl) {
      axios
        .get(this.baseUrl + "baslik/" + sl)
        .then(res => {
          if (res.data.error) {
            this.error = true;
            return;
          }
          this.title = res.data.title;
          this.slug = res.data.slug;
          this.entries = res.data.entries;
          this.tags = res.data.tags;
          this.current_page = res.data.current_page;
          this.total_page = res.data.total_page;
          // this.$router.push({
          //   name: "Baslik",
          //   params: { slug: encodeURIComponent(res.data.slug) }
          // });
        })
        .finally(() => (this.loading = false));
    }
  },
  components: {
    Entry,
    Pager,
    SortMode
  }
};
</script>

<style scoped></style>
