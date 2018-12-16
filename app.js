new Vue({
  el: "#vue-app",

  data: {
    age: 75,
    x: 0,
    y: 0
  },

  methods: {
    add: function (amount) {
      this.age += amount;
    },
    subtract: function (amount) {
      this.age -= amount;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert("Nice try sucka'");
    }
  }
})
