<template>
  <v-dialog v-model="isOpen" class="model-dialog">
    <v-card>
      <v-card-title class="model-message">
        <p class="title-p">{{ message }}</p>
      </v-card-title>
      <v-card-actions>
        <!-- <v-btn color="primary" text @click="closeModal"> OK </v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// import * as vuex from "vuex";

export default {
  computed: {
    // ...vuex.mapState(["isOpen", "message"]),
    isOpen() {
      return this.$store.state.isOpen;
    },
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    // ...vuex.mapMutations(["addToCart", "removeFromCart"]),
    closeModal() {
      this.$store.commit("closeModal");
    },
  },
};
</script>
<style scope>
.model-dialog {
  /* width: 100%;
  text-align: center;
  height: 120px;
  margin: 0 auto;
  overflow-y: hidden;
   */
  position: fixed;
  bottom: 0;
  right: 0;
}
.model-message {
  text-align: center;
  height: auto;
  width: 100%;
  height: 190px;
}
.title-p {
  font-size: 18px;
}
</style>
