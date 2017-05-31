const item = new Vue({
  el: '#item',
  data: {
    items: []
  },
  mounted() {
    axios.get("http://localhost:3000/items")
    .then(response => {
      console.log(response.data);
      this.items = response.data});
  }
});
