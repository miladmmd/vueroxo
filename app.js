new Vue({
 el: '#app',
 data: {
     counter : 0,
     counterSecond:0
 },
 computed:{
     output:function (){
         console.log('computed')
         return this.counter > 5 ?'شمارنده بیشتر از عدد 5 است':'کمتر از عدد 5 است اون'
     }
 },
 watch:{
     counter: function (value){
         var vm = this;
         setTimeout(function (){
             vm.counter = 0;
         },2000)
     }
 },
 methods:{
     increase:function () {
         this.counter++;
     },
     decrease:function () {
         this.counter--;
     },
     result:function () {
         console.log('method')
         return this.counter > 5 ?'شمارنده بیشتر از عدد 5 است':'کمتر از عدد 5 است اون'
     }
 }
})