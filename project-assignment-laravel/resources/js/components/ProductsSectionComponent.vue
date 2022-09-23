<template>
  <div class="card">
    <div class="card-header">
      <div class="container">
        <h1 class="title">Semua Produk</h1>
      </div>
    </div>

    <div class="card-body">
      <div class="container">
        <!-- <div class="row">
            <div class="title col-lg-3">
                Name
            </div>
            <div class="title col-lg-4">
                Description
            </div>
            <div class="title col-lg-1">
                Stock
            </div>
            <div class="title col-lg-2">
                Price
            </div>
            <div class="title col-lg-2">
            </div>
        </div> -->
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in listdata" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.stock }}</td>
              <td>Rp. {{ item.price }}</td>
              <!-- <td><button class="btn btn-primary">Add to cart</button></td> -->
              <td>
                <button-form
                  v-if="item.stock > 0"
                  text="Add to cart"
                  class="btn btn-primary"
                  @emitClick="addToCart(index)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listdata: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  // computed: {
  //   listdata: {
  //     get() {
  //       return this.value;
  //     },
  //     set(val) {
  //       this.$emit("index", val);
  //     },
  //   },
  // },
  methods: {
    addToCart(index) {
      this.$emit("emitAddToCart", index);
      // return this.listdata;
      // console.log(this.value);
      // console.log(this.listdata[index].stock);
    },
    // addToCart() {
    //   this.$emit("emitAddToCart", listdata);
    // },
  },
};
</script>