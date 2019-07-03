<template>
  <div id="app">
    <Navbar />
    <Cards />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Cards from "./components/Cards";
export default {
  name: "navbar",
  components: {
    Navbar,
    Cards
  }
};
</script>
