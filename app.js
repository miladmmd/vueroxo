new Vue({
 el: '#nabard',
 data: {
    playerHealth:100,
     monsterHealth:100,
     gameIsRunning:false
 },

 methods:{
     startGame: function(){
         this.gameIsRunning = true;
         this.playerHealth = 100;
         this.monsterHealth = 100
     },
     attack:function(){
          var damage = this.calculateDamage(10,3);
          this.monsterHealth -=damage
         if(this.checkWin()){
             return;
         }
        this.monsterAttack(5.12);

         var damage = this.calculateDamage(12,5);
         this.playerHealth -=damage
         this.checkWin();

     },
     specialAttack:function () {
         var damage = this.calculateDamage(10,3);
         this.monsterHealth -=damage
         if(this.checkWin()){
             return;
         }



     },
     heal:function () {
         
     },
     giveUp:function(){

     },
     monsterAttack: function(min,max){
         var damage = this.calculateDamage(min,max);
         this.playerHealth -=damage
         this.checkWin()
     },
     calculateDamage:function(min,max){
         return Math.max((Math.floor(Math.random()*max)+1),min);
     },
     checkWin:function(){
         if(this.monsterHealth <=0){
             if(confirm('شما برنده هستید آیا میخواهید بازی جدیدی را آغاز کنید')){
                 this.playerHealth = 100;
                 this.monsterHealth = 100;
                 this.gameIsRunning = false;
                 return true;
             }
             return false
         }else if(this.playerHealth <= 0){
             if(confirm('شما بازنده هستتید آیا میخواهید بازی جدیدی را آغاز کنید')){
                 this.playerHealth = 100;
                 this.monsterHealth = 100;
                 this.gameIsRunning = false;
                 return true;
             }
             return false;
         }
         return false;
     }



 }


})