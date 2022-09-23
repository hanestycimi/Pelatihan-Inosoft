<template>
  <div class="card">
    <div class="card-header">
      <div class="container">
        <h1 class="title">Keranjang Belanja</h1>
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
              <th class="col-lg-3">Name</th>
              <th class="col-lg-3">Quantity</th>
              <th class="col-lg-3">Price</th>
              <th class="col-lg-3"></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr>
              <td>Indomie Goreng Rendang</td>
              <td>10</td>
              <td>39000</td>
              <td><button class="btn btn-danger">Delete</button></td>
            </tr> -->
            <tr v-for="(item, index) in listdata" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>Rp. {{ item.price }}</td>
              <!-- <td><button class="btn btn-primary">Add to cart</button></td> -->
              <td>
                <button-form
                  text="Delete"
                  class="btn btn-danger"
                  @emitClick="deleteItem(index)"
                />
              </td>
            </tr>
            <tr>
              <td>Total:</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-success">Checkout</button>
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
    deleteItem(index) {
      this.$emit("emitDelete", index);
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