const URL_GET_TOKEN = "/api/token";
const qs = require("qs");

class API {
  static async getToken() {
    const res = await fetch(URL_GET_TOKEN, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: qs.stringify({
        grant_type: "client_credentials",
        client_id: "0189147f22ed4289a6e8a02db62431d3",
        client_secret: "90390c27134c4643a8a5b3739b45aa4a"
      })
    });
    const context = await res.json();
    return context;
  }

  static async search(token, searchParams) {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${searchParams.query}&type=${searchParams.selected}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      }
    );
    const context = await res.json();
    if (context.error) {
      alert(new Error(context.error.message));
    }
    return context;
  }
}

export default API;
