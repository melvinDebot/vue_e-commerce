<template>
  <div>
    <b-container fluid class="b-example-row mt-4">
      <b-row>
        <b-col cols="3" v-for="(fruit, index) in fruits" :key="index">
          <b-card
            :title="fruit.name"
            :img-src="require(`@/assets/img/fruits/fruit1.jpg`)"
            img-alt="image"
            img-top
            tag="article"
            class="mb-4"
            align="center"
          >
            <b-card-text>
              <h5>Price: ${{ fruit.price }}.00</h5>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
            </b-card-text>
            <b-button
              v-if="!fruit.cart"
              :disabled="fruit.cart"
              @click="
                (fruit.cart = true),
                  addtocart(JSON.parse(JSON.stringify(fruit)))
              "
              block
              href="#"
              variant="success"
            >
              Add to Cart
            </b-button>
            <b-button
              v-if="fruit.cart"
              :disabled="fruit.cart"
              block
              href="#"
              variant="warning"
              >Already added to shopping cart</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        {
          id: 1,
          quantity: 1,
          name: "Apple",
          price: 1,
          img: "@/assets/fruits/fruit1.jpg",
          cart: false,
        },
        {
          id: 2,
          quantity: 1,
          name: "Orange",
          price: 1,
          img: "@/assets/fruits/fruit1.jpg",
          cart: false,
        },
        {
          id: 3,
          quantity: 1,
          name: "Grape",
          price: 1,
          img: "@/assets/fruits/fruit1.jpg",
          cart: false,
        },
      ],
    };
  },
  methods: {
    addtocart(product) {
      let cart = [];
      if (JSON.parse(localStorage.getItem("products"))) {
        cart = JSON.parse(localStorage.getItem("products"));
      } else {
        cart = [];
      }
      cart.push(product);
      localStorage.setItem("products", JSON.stringify(cart));
    },
  },
  created() {
    let cart = [];
    if (JSON.parse(localStorage.getItem("products"))) {
      cart = JSON.parse(localStorage.getItem("products"));
    } else {
      cart = [];
    }
    for (let index = 0; index < cart.length; index++) {
      for (let index2 = 0; index2 < this.fruits.length; index2++) {
        if (cart[index].id == this.fruits[index2].id) {
          this.fruits[index2].cart = true;
        }
      }
    }
  },
};
</script>

<style></style>
