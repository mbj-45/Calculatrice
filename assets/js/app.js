let app = new Vue ({
  el: '#app',
  data: {
    total: 0
  },
 methods: {
  key: function(n) {
    if(this.total == 0) {
      this.total = n
    }
    else {
      this.total = "" + this.total + n
    }
  },
  clear: function() {
    this.total = 0
  }
 }

})