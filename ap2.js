const{createApp} = Vue;

let vm =createApp({
    data(){
        return{
            fname: "ion",
            lname: 'pepescu',
            adress: 'brasov',
            message: 'imi place sa mananc',
        }
    },
    methods:{
        myName: function(){
            return 'eu ma numesc ' + this.fname + " " +this.lname + "si sunt din" +this.adress;
        }
    }
}).mount('#app');