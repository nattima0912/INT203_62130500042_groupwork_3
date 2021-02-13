const app = {
    data() {
        return {
            travels: [{text: 'จุดที่ดีที่สุด: Murmansk, Siberia, Kola Peninsula', pic: './images/russia.jpg', heart: false},
                      {text: 'จุดที่ดีที่สุด: Kiruna, Abisko, Swedish Lapland', pic: './images/sweden.jpg', heart: false},
                      {text: 'จุดที่ดีที่สุด: Anchorage, Fairbanks, Denali, the Yukon', pic: './images/usa.jpg', heart: false}],
            bgImage:  './images/bg.gif'         
        }

    },
    methods: {
        toggleHeart(index) {
            this.travels[index].heart = !this.travels[index].heart
        }
    },
    computed: {
        countUnPic() {
            return this.travels.filter( t => t.heart ).length
        }
    }
   
    
}
Vue.createApp(app).mount('#app')