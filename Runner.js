class Runner{
    constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    this.rank=null;
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function (data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    
    update(){
        var playerIndex = "runners/runner" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
      static getPlayerInfo(){
        var playerInfoRef = database.ref('runners');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
      getCarsAtEnd(){
        database.ref('carsAtEnd').on("value",(data)=>{
          this.rank=data.val();
        })
      }
      static updateCarsAtEnd(rank){
      database.ref('/').update({
        carsAtEnd:rank
      })
      }
}