new Vue({
 el: '#app',
 data: {
     attachRed:false,
     color:'green',
     width:100,
     bgColor:'gray'
 },
 computed:{
     divClasses:function () {
         return {
             red:this.attachRed
         }
     },
     divStyles:function () {
         return {
             backgroundColor : this.bgColor,
             width: this.width + 'px'
         }
     }
 }

})