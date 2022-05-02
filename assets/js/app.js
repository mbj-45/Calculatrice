let app = new Vue ({
<<<<<<< HEAD
    el: '#app',
    data: {
      total: 0,
      check: ''
    },
   methods: {
=======
  el: '#app',
  data: {
    total: 0,
    check: ''
  },
 methods: {
  key: function(n) {
    if(this.total == 0) {
      this.total = n
    }
    else {
      this.total = "" + this.total + n
      this.check = "" + this.total
    }
  },
  inverse: function() {
    this.total = this.total*-1
  },
  verif: function(o) {
    if(this.check !== o) {
        this.total = "" + this.total + o;
        this.check = o;
    }
},
  clear: function() {
    this.total = 0
  },
  equal: function() {
    let equal = this.total;
    return this.total = eval(equal);
   },
   pourcentage: function()  {
    this.total = this.total/100
   }     
 }
>>>>>>> 694568e1ba4a8dc59fd7e74e5e4fd28198348410

    key: function(n) {
      if(this.total == 0) {
        this.total = n
      }
      
      else {
        this.total = "" + this.total + n
        this.check = "" + this.total
      }
    },

    verif: function(o) {
      if(this.check !== o) {
          this.total = "" + this.total + o;
          this.check = o;
      }
  },

    clear: function() {
      this.total = 0
    },

    equal: function() {
      let equal = this.total;
      return this.total = eval(equal);
     },

     pourcentage: function()  {
      this.total = this.total/100
     }     
   }
  
  })