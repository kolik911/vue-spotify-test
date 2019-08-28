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
  data() {
    return {
      clientId: "0189147f22ed4289a6e8a02db62431d3",
      clientSecret: "90390c27134c4643a8a5b3739b45aa4a"
    };
  },
  methods: {
    async getToken(e) {
      e.preventDefault();

      await API.getToken();

      // const clientCredentials = {
      //   grant_type: "client_credentials",
      //   client_id: "0189147f22ed4289a6e8a02db62431d3",
      //   client_secret: "90390c27134c4643a8a5b3739b45aa4a"
      // };

      // const res = await fetch("https://accounts.spotify.com/api/token", {
      //   method: "POST",
      //   mode: "no-cors",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      //   },
      //   body: qs.stringify({
      //     grant_type: "client_credentials",
      //     client_id: "0189147f22ed4289a6e8a02db62431d3",
      //     client_secret: "90390c27134c4643a8a5b3739b45aa4a"
      //   })
      // });

      // const token = await res.json();
      // console.log(res);
    }
  }
};
</script>

<style>
</style>