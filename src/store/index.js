import { createStore } from 'vuex'
import authModule from "@/store/modules/auth";
import productModule from "@/store/modules/product";
import cartModule from '@/store/modules/cart';
import categoryModule from "@/store/modules/category";

export default createStore({
  modules: {
    auth: authModule,
    product: productModule,
    cart: cartModule,
    category: categoryModule
  }
})
