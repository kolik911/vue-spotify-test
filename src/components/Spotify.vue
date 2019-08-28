<template>
  <div class="spotify">
    <search-panel @search="search"></search-panel>

    <ul class="search-list">
      <li v-for="item of result" :key="item.id">
        <p>Type searching: {{ item.type }}</p>
        <p>Name {{ item.type }}: {{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchPanel from "./SearchPanel";
import API from "../API";
export default {
  name: "spotify-app",
  data() {
    return {
      result: [],
      accessToken: ""
    };
  },
  async created() {
    const responce = await API.getToken();
    this.accessToken = `Bearer ${responce.access_token}`;
    setInterval(() => {
      this.refreshToken();
    }, 3000000);
  },
  methods: {
    async search(searchParams) {
      const context = await API.search(this.accessToken, searchParams);

      let data;
      for (let item in context) {
        data = context[item];
      }

      this.result = data.items;
    },
    async refreshToken() {
      const responce = await API.getToken();
      this.accessToken = `Bearer ${responce.access_token}`;
    }
  },
  components: {
    SearchPanel
  }
};
</script>

<style scoped>
.spotify {
  background: #050505;
  min-height: 100vh;
}
.search-list {
  margin: 0;
  padding: 0;
  color: #b2b2b2;
}
li {
  list-style: none;
  border-bottom: solid 1px #000;
  /* margin: 0 0 20px 0; */
  padding: 15px 0 15px 30px;
}
li p {
  margin: 0;
  padding: 5px 0;
}
li:hover {
  background: url("../assets/play-icon.png") no-repeat;
  background-position: right center;
  background-size: 150px;
}

li:last-child {
  margin: 0;
}
</style>