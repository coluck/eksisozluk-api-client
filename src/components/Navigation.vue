<template>
  <div>
    <nav
      class="navbar is-fixed-top container iss-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <b>eksisozluk-api</b>
        </a>
        <a
          @click="isActive = !isActive"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/debe">debe</router-link>
          <a class="navbar-item" @click="goRnd()">
            rastgele entry
          </a>
          <router-link class="navbar-item" to="/basliklar/spor"
            >#spor</router-link
          >
          <router-link class="navbar-item" to="/basliklar/siyaset"
            >#siyaset</router-link
          >
          <router-link class="navbar-item" to="/basliklar/ilişkiler"
            >#ilişkiler</router-link
          >
          <router-link class="navbar-item" to="/basliklar/müzik"
            >#müzik</router-link
          >

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              daha
            </a>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/basliklar/seyehat"
                >#seyehat</router-link
              >
              <router-link class="navbar-item" to="/basliklar/tv"
                >#tv</router-link
              >
              <router-link class="navbar-item" to="/basliklar/haber"
                >#haber</router-link
              >
              <router-link class="navbar-item" to="/basliklar/bilim"
                >#bilim</router-link
              >
              <router-link class="navbar-item" to="/basliklar/edebiyat"
                >#edebiyat</router-link
              >
              <router-link class="navbar-item" to="/basliklar/eğitim"
                >#eğitim</router-link
              >
              <router-link class="navbar-item" to="/basliklar/ekonomi"
                >#ekonomi</router-link
              >
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <search></search>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    goRnd() {
      let id = Math.ceil(Math.random() * 116309282);
      this.$router.push({ name: "Entry", params: { id: id } });
    }
  },
  components: {
    Search
  }
};
</script>

<style></style>
