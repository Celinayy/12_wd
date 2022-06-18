<template>
  <div class="container my-5">
      <div class="row mb-5">
          <select-season 
            :seasons="seasons"
            @onSelectedSeason="onSelectedSeason"/>
      </div>
      <div class="row">
          <film-card :seasonList="seasonList"/>
      </div>
  </div>
</template>

<script>
import DataService from '@/services/dataservice'

import FilmCard from '@/components/FilmCard.vue'
import SelectSeason from '@/components/SelectSeason.vue'

export default {
    name:'walking-dead',
    components:{FilmCard, SelectSeason},
    data(){
        return{
            seasonList:[],
            seasons:[]
        }
    },
    created(){
        DataService.getAllFilms()
            .then(result => {
                this.seasons = [...new Set(result.map(x => x.season))]
                console.log(this.seasons)
                
                this.seasonList=result
                //console.log(this.seasonList)
            })
    },
    methods:{
        onSelectedSeason(event){
            console.log(event.target.value)
        }
    }
}
</script>

<style>

</style>