<template>
  <div class="container my-5">
      <div class="row mb-5">
          <select-season 
            :seasons="seasons"
            @onSelectedSeason="onSelectedSeason"/>
      </div>
      <div class="row">
          <film-card :seasonList="seasonList" :seasonNumber="seasonNumber"/>
      </div>
  </div>
</template>

<script>
import DataService from '@/services/dataservice'

import FilmCard from '@/components/FilmCard.vue'
import SelectSeason from '@/components/SelectSeason.vue'
import dataservice from '@/services/dataservice'

export default {
    name:'walking-dead',
    components:{FilmCard, SelectSeason},
    data(){
        return{
            seasonList:[],
            seasons:[],
            seasonNumber:1
        }
    },
    created(){
        DataService.getAllFilms()
            .then(result => {
                this.seasons = [...new Set(result.map(x => x.season))]
               // console.log(this.seasons)
                
               // this.seasonList=result
                  dataservice.getFilmBySeason(this.seasons[0])        
            .then( result => {
                this.seasonList = result
            })  
                //console.log(this.seasonList)
            })
    },
    methods:{
        onSelectedSeason(event){
            // console.log(event.target.value)
            this.seasonNumber = event.target.value

            dataservice.getFilmBySeason(event.target.value)        
            .then( result => {
               // this.seasonList = result
               this.seasonList = result.map( x => {
                if( x.image == null){
                    x.image = {
                        medium: 'https://via.placeholder.com/170x120'
                    }
                }
                return x
               })
            })   
        }
    }
}
</script>

<style>

</style>