<template>
  <div class="level-r">
    <div
      v-if="hasPrev"
      @click="change(current_page - 1)"
      class="button is-small"
    >
      <i class="fas fa-arrow-left"></i>
    </div>
    <div class="select is-small">
      <select v-model="selectIdx" @change="onChange($event)">
        <option v-for="i in total_page" :key="i" :value="i">{{ i }}</option>
      </select>
    </div>
    <div
      v-if="hasNext"
      @click="change(current_page + 1)"
      class="button is-small"
    >
      <i class="fas fa-arrow-right"></i>
    </div>
  </div>
</template>

<script>
import updateQS from "../utils/qs.js";

export default {
  name: "Pager",
  props: {
    total_page: {
      type: Number,
      default: 1
    },
    current_page: {
      type: Number,
      default: 1
    },
    t_slug: {
      type: String
    }
  },
  data() {
    return {
      selectIdx: this.current_page
    };
  },
  methods: {
    onChange(event) {
      let value = +event.target.value;
      this.change(value);
    },
    change(value) {
      let val = value;
      let slug = this.$route.params.slug;
      if (!slug.includes("--")) slug = this.t_slug;
      let ss = updateQS(slug, "p", val);
      this.$router.push({
        name: "Baslik",
        params: { slug: ss }
      });
    }
  },
  computed: {
    hasPrev() {
      if (this.current_page !== 1) return true;
      return false;
    },
    hasNext() {
      if (this.current_page < this.total_page) return true;
      return false;
    }
  }
};
</script>

<style scoped>
/* .level-r {
  width: 25%;
  margin-left: auto;
} */
</style>
