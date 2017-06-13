var app = new Vue({
  data:{
    items : []
  },
  created: {
    this.getItems();
  },
  methods: {
    getItems: function() {
      var self = this;
      axios.get('localhost:3000/items')
      .then(function(response) {
        console.log(response.data);
        self.items = response.data
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  }
})
