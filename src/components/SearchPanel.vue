<template>
  <div class="search-panel">
    <a href="https://www.spotify.com/" class="spotify-logo">
      <img
        src="http://www.sclance.com/pngs/spotify-logo-white-png/spotify_logo_white_png_1294575.png"
      />
    </a>
    <div class="search-block">
      <input type="text" name id v-model="query" placeholder="Search" />
      <select name id v-model="selected">
        <option disabled value>Please select type</option>
        <option value="album">Album</option>
        <option value="artist">Artist</option>
        <option value="playlist">Playlist</option>
        <option value="track">Track</option>
      </select>
      <button @click="search">
        <i class="material-icons">search</i>
      </button>
    </div>
    <img src="../assets/1.png" alt />
  </div>
</template>

<script>
export default {
  name: "search-panel",
  data() {
    return {
      query: "",
      selected: ""
    };
  },
  methods: {
    async search() {
      const { query, selected } = this;

      const searchParams = { query, selected };

      this.$emit("search", searchParams);
    }
  }
};
</script>

<style scoped>
* {
  outline: none;
}
.search-panel {
  height: 80px;
  background: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-panel a img {
  margin: 0 0 0 15px;
  width: 80px;
}
.search-block {
  background-color: #0e0e0e;
  border: solid 1px rgb(58, 58, 58);
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 0 25px 0 0;
}
.search-block input {
  background: none;
  border: none;
  font-size: 15px;
  color: #e5f5eb;
}
.search-block input::placeholder {
  color: #bcbcbc;
  opacity: 1; /* Firefox */
}
.search-block select {
  background: none;
  border: none;
  color: #e5f5eb;
}

.search-block select option {
  color: #000;
}

.search-block button {
  background: none;
  border: none;
  cursor: pointer;
  color: #e5f5eb;
}
</style>