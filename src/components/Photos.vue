
<template>
  <div class="photos">
    <form v-on:submit.prevent='getPhotos'>
      <input type='text' id='search' v-model="search"/>
      <button type='submit'>Search</button>
    </form>
    <img v-if='loading' src='https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif' />
    <div v-for='photo in photos' v-bind:key='photo' class='photos'>
      <img v-bind:src='photo'/>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Photos',
  data () {
    return {
      key: process.env.VUE_APP_ACCESS_KEY,
      loading: false,
      search: '',
      photos: []
    }
  }, 

  methods: {
    async getPhotos () {
      this.loading = true;
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${this.search}&client_id=${this.key}`)
      try {
        if(response.ok) {
          const photos = await response.json();
          this.cleanPhotoData(photos.results);
        }
      } catch(error) {
        console.log(error.message)
      }
      this.loading = false;
    },

    cleanPhotoData (photos) {
      this.photos = photos.map(photo => photo.urls.regular)
    }
  }
}
</script>

<style scoped>
.loader {
  background-image: url('https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif')
}
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
