import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'

export default {
    getAllFilms(){
        return Axios.get('/episodes')
            .then(resp => {
                return resp.data
            })
            .catch(()=>{})
    },
    getFilmBySeason(saesonNumber){
        return Axios.get(`/episodes?season=${saesonNumber}`)
        .then(resp => {
            return resp.data
        })
        .catch(()=>{})
    }
}