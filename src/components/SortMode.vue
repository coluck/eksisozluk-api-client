<template>
  <div>
    <div class="field has-addons">
      <span>şükela:</span>

      <p class="control">
        <button
          class="button is-small"
          :class="mode === 'nice' ? activeClass : ''"
          @click="sortBy(0)"
        >
          <span>tümü</span>
        </button>
      </p>
      <p class="control">
        <button
          class="button is-small"
          :class="mode === 'dailynice' ? activeClass : ''"
          @click="sortBy(1)"
        >
          <span>bugün</span>
        </button>
      </p>
      <p class="control">
        <button
          class="button is-small"
          :class="mode === 'popular' ? activeClass : ''"
          @click="sortBy(2)"
        >
          <span>popüler</span>
        </button>
      </p>
      <p class="control">
        <button
          class="button is-small"
          :class="mode === '' ? activeClass : ''"
          @click="sortBy(3)"
        >
          <span>sıralı</span>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import updateQS from "../utils/qs.js";
export default {
  name: "SortModel",
  data() {
    return {
      mode: "",
      activeClass: "is-info"
    };
  },
  created() {
    let slug = this.$route.params.slug;
    let url = new URL(this.baseUrl + slug);
    this.mode = url.searchParams.get("a");
  },

  methods: {
    sortBy(mode) {
      let slug = this.$route.params.slug;
      let ss;
      if (mode === 0) ss = updateQS(slug, "a", "nice");
      else if (mode === 1) ss = updateQS(slug, "a", "dailynice");
      else if (mode === 2) ss = updateQS(slug, "a", "popular");
      else ss = updateQS(slug, "a", "");
      this.$router.push({
        name: "Baslik",
        params: { slug: ss }
      });
    }
  }
};
</script>

<style></style>
