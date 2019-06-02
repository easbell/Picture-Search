
<template>
  <div class="hello">
    <input type='text' id='search'/>
    <div v-for='photo in photos' v-bind:key='photo' class='photos'>
      <img v-bind:src='photo'/>
    </div>
  </div>
</template>


<script>
import { accessKey } from "../keys.js";

export default {
  name: 'HelloWorld',
  data () {
    return {
      key: accessKey,
      search: '',
      photos: []
    }
  },

  async created () {
    this.getPhotos()
  },

  methods: {
    async getPhotos () {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=dog&client_id=${this.key}`)
      try {
        if(response.ok) {
          const photos = await response.json();
          this.cleanPhotoData(photos.results);
        }
      } catch(error) {
        console.log(error.message)
      }
    },

    cleanPhotoData (photos) {
      this.photos = photos.map(photo => photo.urls.regular)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
