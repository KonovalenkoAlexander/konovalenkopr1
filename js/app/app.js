import { router } from './router.js';

document.addEventListener('DOMContentLoaded',function(){
    const main = {
        data(){
            return {
                
            }
        },
        watch:{
            $router:function(){
                this.init();
            }
        },
        mounted:function(){
            this.init();
        },
        methods:{
            init(){

            }
        }
    };
    var app = Vue.createApp(main)
    
    .use(router)
    .mount('#content');
})