<template>
  <div class="box">
    <template v-if="entry.id">
      <header v-if="entry.title" @click="collapse()" class="block">
        <p class="is-size-5 has-text-weight-bold">
          {{ entry.title }}
        </p>
      </header>
      <div v-if="!collapsed">
        <div class="block" @click="onContentClick" v-html="entry.body"></div>
        <div class="level is-mobile">
          <div class="level-left is-size-7">
            <a @click="goEntry(entry.id)" class="has-text-dark"
              >#{{ entry.id }}</a
            >
          </div>
          <div class="level-right is-size-7">
            <a
              v-if="entry.updated_at"
              @click="goEntry(entry.id)"
              class="has-text-grey"
              >{{ entry.updated_at }}~</a
            >
            <a @click="goEntry(entry.id)" class="has-text-grey">{{
              entry.created_at
            }}</a>
            <a
              @click="goEntry(entry.id)"
              class="has-text-grey ml-3 has-text-weight-bold"
              >{{ entry.author }}</a
            >
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="block is-size-5 has-text-weight-bold">
        olmaz olsun böyle entry
      </div>
      #{{ $route.params.id }}
    </template>
  </div>
</template>

<script>
export default {
  name: "EntrySingle",
  props: {
    entry: Object,
    collapsed: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    goEntry(id) {
      this.$router.push({ name: "Entry", params: { id: id } });
    },
    collapse() {
      if (this.collapsed !== null) this.collapsed = !this.collapsed;
    },
    onContentClick(e) {
      if (e.target.tagName === "A") {
        // e.stopPropagation();
        e.preventDefault();
        if (e.target.search.startsWith("?q=")) {
          let query = e.target.search.split("?q=")[1];
          query = query.replaceAll("+", " ");
          this.$router.push({ name: "Baslik", params: { slug: query } });
        }
      }
    }
  }
};
</script>

<style scoped></style>
