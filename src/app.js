import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [
      ],
      selectedCountry: null,
    },
    computed:{
      totalPop: function() {
        return this.countries.reduce((runningTotal, country) => {
          return runningTotal += country.population;
        }, 0)
      }
    },
    selectedCountry: function(index) {
      let selections = this.countries[index].map((country) => {
        return selections;
      })
    },
    mounted(){
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function () {
      const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(payload => this.countries = payload);
      }
    }
  });
});
