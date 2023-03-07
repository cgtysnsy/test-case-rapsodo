<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card class="mx-auto" max-width="240">
      <v-img
        class="align-end text-black card-image"
        width="240"
        height="240"
        src="https://wiki.kerbalspaceprogram.com/images/c/ce/Image_needed.svg"
        alt="240x240"
        cover
      >
      </v-img>

      <v-card-title>product name</v-card-title>

      <v-card-text>
        <p>Size</p>
        <p class="my-2">Color</p>
        <p>$price</p>
      </v-card-text>

      <v-card-actions>
        <v-btn class="btn-add">Add to Cart</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center">
            <button class="btn-product">-</button>

            <input type="number" class="d-block input-product" />

            <button class="btn-product">+</button>
          </v-col>
        </v-row></v-card-actions
      >
    </v-card>
  </v-col>
</template>

<script></script>

<style scoped>
.btn-add {
  width: 100%;
  color: rgba(168, 127, 52, 0.731);
  border: 0.5px solid black;
  background-color: lightgray;
  border-radius: 10px;
  text-align: center;
}
.btn-product {
  font-size: 1.5rem;
  margin: 0 0.8rem;
  border: none;
  cursor: pointer;
}
.input-product {
  border: 1px solid lightgrey;
  text-align: center;
  width: 100px;
}
.card-image {
  background-color: orange;
}
</style>
