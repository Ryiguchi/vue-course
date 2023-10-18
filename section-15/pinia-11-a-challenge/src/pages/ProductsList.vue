<script setup>
import { storeToRefs } from 'pinia';
import { useProductsStore } from '../store/products.store';

import ProductItem from '../components/products/ProductItem.vue';

// ** PRODUCTS STORE **
const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);
</script>

<template>
  <section>
    <ul>
      <ProductItem
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></ProductItem>
    </ul>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
