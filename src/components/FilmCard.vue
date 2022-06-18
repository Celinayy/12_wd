<template>
  <div 
    class="card-group col-12 col-md-3 mb-2"
    v-for="item in seasonList"
    :key="item.id"
    
  >
  

    <div class="card">
      <img 
        v-if="item.image"
        :src="item.image.medium" 
        class="card-img-top" 
        alt="..." 
        />
      <div class="card-body">
        <h5 class="card-title">{{ item.name}}</h5>
        <p class="card-text" v-html="item.summary"></p>
        <div class="card-footer d-flex justify-content-center">
            <a 
                :href="item.url" 
                target="_blank"
                class="btn btn-primary"
            >Goto webpage</a>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "film-card",
  props:['seasonList']
};
</script>

<style>
</style>