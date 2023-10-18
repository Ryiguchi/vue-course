import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// export const useCartStore = defineStore('cart', () => {
//   const items = ref([]);
//   const total = ref(0);
//   const qty = ref(0);

//   const cartTotal = computed(() => total.value.toFixed(2));

//   function addProductToCart(productData) {
//     const productInCartIndex = items.value.findIndex(
//       ci => ci.productId === productData.id
//     );

//     if (productInCartIndex >= 0) {
//       items.value[productInCartIndex].qty++;
//     } else {
//       const newItem = {
//         productId: productData.id,
//         title: productData.title,
//         image: productData.image,
//         price: productData.price,
//         qty: 1,
//       };
//       items.value.push(newItem);
//     }
//     qty.value++;
//     total.value += productData.price;
//   }

//   function removeProductFromCart(prodId) {
//     const productInCartIndex = items.value.findIndex(
//       cartItem => cartItem.productId === prodId
//     );

//     const prodData = items.value[productInCartIndex];
//     items.value.splice(productInCartIndex, 1);

//     qty.value -= prodData.qty;
//     total.value -= prodData.price * prodData.qty;
//   }

//   return {
//     items,
//     total,
//     qty,
//     cartTotal,
//     addProductToCart,
//     removeProductFromCart,
//   };
// });

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    total: 0,
    qty: 0,
  }),

  getters: {
    cartTotal(state) {
      return state.total.toFixed(2);
    },
  },

  actions: {
    addProductToCart(productData) {
      const productInCartIndex = this.items.findIndex(
        ci => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        this.items.push(newItem);
      }
      this.qty++;
      this.total += productData.price;
    },

    removeProductFromCart(prodId) {
      const productInCartIndex = this.items.findIndex(
        cartItem => cartItem.productId === prodId
      );

      const prodData = this.items[productInCartIndex];
      this.items.splice(productInCartIndex, 1);

      this.qty -= prodData.qty;
      this.total -= prodData.price * prodData.qty;
    },
  },
});
