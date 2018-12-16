new Vue({
  el: "#vue-app",

  data: {
    name: "Dirkleton Jeffreys",
    job: "Unemployed",
    website: "https://charlesrobertson.co",
    text: "A glorious field of text",
    hotlink: '<a href="http://www.superbad.com">superbad.com</a>'
  },

  methods: {
    greet: function() {
      return "Good Morning, " + this.name + " have a nice day working at " + this.job + ".";
    }
  }
})
