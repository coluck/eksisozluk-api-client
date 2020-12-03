<template>
  <div class="tag" @click="goTag()">{{ tag }}</div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tag: String
  },
  methods: {
    goTag() {
      this.$router.push({
        name: "Basliklar",
        params: { kanal: this.tag }
      });
    }
  }
};
</script>

<style></style>
