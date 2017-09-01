import React, { Component } from 'react';


const axios = new view({
    el: '#app',
    data: {
      results: []
    },
    mounted() {
      axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your_api_key")
      .then(response => {this.results = response.data.results})
    }
  });

  export getdata;