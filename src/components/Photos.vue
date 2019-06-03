
<template>
  <div class="photos">
    <form v-on:submit.prevent='getPhotos'>
      <input type='text' id='search' v-model="search" placeholder='Search for an image'/>
    </form>
    <img v-if='loading' src='https://ui-ex.com/images/transparent-background-loading.gif' />
    <div class='photo-container'>
      <div v-for='photo in photos' v-bind:key='photo.display' >
        <a v-bind:href='photo.link' target="_blank">
          <img v-bind:src='photo.display' class='single-img'/>  
        </a>
      </div>
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
      this.photos = [];
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
      this.search = '';
      this.loading = false;
    },

    cleanPhotoData (photos) {
      this.photos = photos.map(photo => ({display: photo.urls.regular, link: photo.links.html}))
    }
  }
}
</script>

<style scoped>
.photo-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  margin-top: 50px;
}

.single-img {
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  max-width: 100%;
}

input {
  font-size: 16px;
  padding: 9px;
  padding-left: 15px;
  width: 550px;
  border-radius: 102px;
  border-style: solid;
  border: 1px solid #cccccc;
  outline: none;
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
