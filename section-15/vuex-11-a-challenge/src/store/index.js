import { createStore } from 'vuex';

import { productsModule } from './modules/products/products';
import { cartModule } from './modules/cart/cart';
import { userModule } from './modules/user/user';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
    user: userModule,
  },
});

export default store;
