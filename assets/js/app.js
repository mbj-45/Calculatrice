let app = new Vue ({
  el: '#app',
  data: {
    total: 0,
    check: ''
  },
 methods: {
  //method nombres
  key: function(n) {
    if(this.total == 0) {
      this.total = n
    }
    else {
      this.total = "" + this.total + n
      this.check = "" + this.total
    }
  },
  //method +/-
  invers: function() {
    this.total = this.total*-1
  },
  // Method pour éviter la répétition d'un signe
  verif: function(o) {
    if(this.check !== o) {
        this.total = "" + this.total + o;
        this.check = o;
    }
},
  //method AC
  clear: function() {
    this.total = 0
  },
  //method =
  equal: function() {
    let equal = this.total;
    return this.total = eval(equal);
   },
   //method %
   pourcentage: function()  {
    this.total = this.total/100
   }     
 }

})