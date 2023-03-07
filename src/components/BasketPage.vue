<template>
  <v-container>
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
    <v-col>
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
          <p>size</p>
          <p>Color</p>
          <p class="price">$price</p>
        </v-col>
      </v-row>
      <v-divider />
    </v-col>

    <v-col cols="12" md="3">
      <v-row no-gutters justify="center">
        <v-card-title>Subtotal</v-card-title>
      </v-row>
      <v-row no-gutters justify="center">
        <h2>$total</h2>
      </v-row>
    </v-col>
  </v-container>
</template>

<script></script>

<style scoped>
.back-router {
  text-decoration: none;
  color: rgb(0, 140, 255);
}
.price {
  color: green;
}
</style>
