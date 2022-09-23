<template>
  <div class="container">
    <products-section :listdata="list" @emitAddToCart="addToCart" />
    <cart :listdata="listCart" @emitDelete="deleteProduct" />
  </div>
</template>

<script>
import { updateExpression } from "@babel/types";

export default {
  data() {
    return {
      list: [
        {
          name: "Indomie Goreng Rendang",
          description: "Masakan instan terenak di dunia",
          stock: 10,
          price: 3900,
        },
        {
          name: "Mie Gelas Rendang",
          description: "Mie instan khusus anak kosan",
          stock: 4,
          price: 1500,
        },
        {
          name: "Bakmi Mewah",
          description: "Kalau anak kosan jangan macem2 deh",
          stock: 80,
          price: 10000,
        },
      ],
      listCart: [],
    };
  },
  methods: {
    addToCart(index) {
      // let newList = {
      //   name: this.list[index].name,
      //   description: this.list[index].description,
      //   stock: this.list[index].stock - 1,
      //   price: this.list[index].price,
      //   stock: this.list[index].stock - 1,
      // };
      // this.$set(list, index, newList);
      // this.list.push(newList);
      // this.list[index].stock - 1;
      // this.list.push(newList);
      // let newList = this.list;
      // newList[index] = {
      //   name: this.list[index].name,
      //   description: this.list[index].description,
      //   stock: this.list[index].stock - 1,
      //   price: this.list[index].price,
      //   stock: this.list[index].stock - 1,
      // };
      // this.list = newList;
      this.list[index].stock = this.list[index].stock - 1;
      console.log(this.list[index].name);

      if ((this.listCart.name = [])) {
        let newListCart = this.listCart;
        // if (this.listCart.name == "") {
        newListCart = {
          name: this.list[index].name,
          quantity: this.list[index].stock - (this.list[index].stock - 1),
          price:
            this.list[index].price *
            (this.list[index].stock - (this.list[index].stock - 1)),
        };
        this.listCart.push(newListCart);
        // console.log(newListCart);
        // console.log(index);
      } else {
        this.listCart[indexCart].quantity =
          this.listCart[indexCart].quantity + 1;
        console.log(this.list);
      }
    },
    deleteProduct(index) {
      this.listCart.splice(index, 1);
      this.list[index].stock = this.list[index].stock + 1;
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
