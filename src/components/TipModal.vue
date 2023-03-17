<template>
  <div class="text-center">
    <v-snackbar
      v-model="isOpen"
      rounded="pill"
      top
      outlined
      :timeout="timeOutDuration"
    >
      {{ message }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="closeModal()"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeOutDuration: 4000,
    };
  },
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
/* .model-dialog {
  /* width: 100%;
  text-align: center;
  height: 120px;
  margin: 0 auto;
  overflow-y: hidden;

} */
/* .model-message {
  text-align: center;
  height: auto;
  width: 100%;
  height: 190px;
/* } */
.title-p {
  font-size: 18px;
}
*/ .custom-snackbar {
  top: 80px !important;
  right: 16px !important;
  bottom: auto !important;
  left: auto !important;
  transform: none !important;
}
</style>
