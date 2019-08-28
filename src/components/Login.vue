<template>
  <div>
    <input type="text" name id placeholder="Id client" />
    <br />
    <input type="text" name id placeholder="Secret client" />
    <br />
    <button @click="getToken">Send</button>
  </div>
</template>

<script>
import API from "../API";
export default {
  name: "login",
  methods: {
    async getToken(e) {
      e.preventDefault();
      await API.getToken();
    }
  }
};
</script>

<style>
</style>