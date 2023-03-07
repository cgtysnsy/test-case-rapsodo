<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="9">
        <v-row no-gutters justify="space-between">
          <v-col cols="5">
            <v-card-title>Products</v-card-title>
          </v-col>
          <v-col cols="4">
            <router-link to="/" class="back-router">
              &lt; Continue Shopping
            </router-link>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12">
            <p>Your basket is empty.</p>
          </v-col>

          <v-col cols="12">
            <v-row no-gutters>
              <v-col cols="12" md="4">
                <v-img
                  width="240"
                  height="240"
                  src="https://wiki.kerbalspaceprogram.com/images/c/ce/Image_needed.svg"
                  alt="240x240"
                  cover
                  class="mx-auto"
                />
              </v-col>
              <v-col cols="12" md="5" class="mt-10">
                <h3>name</h3>
                <p>Size:</p>
                <p>Color:</p>
                <p class="price">$price</p>
              </v-col>
              <v-col cols="12" md="3" class="ma-auto">
                <v-btn class="d-block w-100 my-4 pl-2">-</v-btn>

                <input type="number" class="d-block w-100 input-group" />

                <v-btn class="d-block w-100 my-4 pl-2">+</v-btn>
              </v-col>
            </v-row>
            <v-divider />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row no-gutters justify="center">
          <v-card-title>Subtotal</v-card-title>
        </v-row>
        <v-row no-gutters justify="center">
          <h2>$total price</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped>
.back-router {
  text-decoration: none;
  color: rgb(0, 140, 255);
}
.input-group {
  border: 1px solid lightgrey;
  text-align: center;
  padding: 8px;
}
.price {
  color: green;
}
</style>
