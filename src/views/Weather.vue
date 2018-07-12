<template>
  <div class="home">
    <div class="row">      
      <div class="col-8 offset-2 text-center"> 
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Enter Location">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-outline-secondary" type="button">Search</button>          
            </div>  
        </div>
      </div>
      <div class="col-8 offset-2 text-center" v-if="forecast"> 
        <div class="card text-white bg-primary mb-3">
            <div class="card-header">{{forecast.name}}, {{forecast.sys.country}}</div>
            <div class="card-body">
              <h4 class="card-title"> {{forecast.weather[0].main}} : {{forecast.weather[0].description}}</h4>
              <div  class="card-text icon-temp">
                <span class="emoji">  
      
                  <img v-bind:src="'http://api.openweathermap.org/img/w/' + forecast.weather[0].icon">
                       {{forecast.main.temp}} ° celsius</span>

              </div>
              <div class="card-text">
                <p>{{forecast.main.humidity}} % chance d'Humidité</p>
              </div>
            </div>
        </div>

      </div>

      
    </div>

    <p>{{forecast}}</p>
  </div>
</template>

<script>

import API from '@/lib/API';
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      city: '',
      location: '',
      address: '',
      forecast: {
      }

    };
  },
  mounted (){
      this.loadWeather('Paris')
  }, 
  methods: {
    loadWeather(search) {
      API.getAdress(search).then(result => {
        this.address = result;
        console.log(result);
      });
        API.getForecast(search).then(result => {
        this.forecast = result;
        console.log(result);
      });

    },
    updateLocation() {
      API.getCoordinates(this.location).then(result => {
      this.loadWeather(result.name);
        console.log(result);

      });
    },
  }

};
</script>
<style>
body {
  font-size: 2em;
}
  p {
    color:white;
  }
  .emoji {
      font-size: 2em;

  }
</style>

