<template>
  <div class="home">
    <Navbar />
    <Carousel />
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import Products from "@/components/Products.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carousel,
    Products
  },
};
</script>
