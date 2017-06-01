// vue
const app = new Vue({
  el: '#app',
  data: {
    shop: [],
    items: [],
    showCart: false,
    verified: false,
    total_item: 0
  },
  mounted() {
    axios.get("http://localhost:3000/items")
    .then(response => {
      //console.log(JSON.stringify(response.data));
      this.shop = response.data});
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    check(item) {
      let retVal = confirm("are you sure?");
      if (retVal == true) {
        if (item.stock == 0) {
          alert('sorry, stock empty :(');
          return false;
        } else {
          console.log(JSON.stringify(item));
          this.addToCart(item);
        }
      } else {
        return false;
      }
    },
    addToCart(item) {
      let index = this.items.findIndex(element => element._id == item._id);
      if (index !== -1) {
        if (item.stock <= this.items[index].quantity) {
          alert('Maximal stock is ' + item.stock);
        } else {
          this.items[index].quantity++;
          this.total_item++;
          alert('add to cart success');
        }
      } else {
        item.quantity = 1;
        this.items.push(item);
        this.total_item++;
        alert('add to cart success');
      }
    },
    removeFromCart(item) {
      let index = this.items.findIndex(element => element._id == item._id);
      this.total_item = this.total_item - this.items[index].quantity;
      this.items.splice(index, 1);
    }
  }
});
