let add = document.querySelector('#add');
let re = document.querySelector('#re');
let container = document.querySelector('.container');
let count = 0;
let sub = document.getElementById('sub');
let id = document.getElementById('id');
let Points = document.getElementById('Points');
let field = document.querySelector('.field');
let temp='';
class Player{
    constructor(Name,points){
        this.Name=Name;
        this.points=points;
    }
}
let Players=[];


add.onclick=()=>{

    Players[count]=new Player(prompt('New name:'),0);
    count++;
    
    refr();
    
}



function refr(){
    temp ='';
    for(let i = 0; i<Players.length;i++){
        temp += "<br>Player " + i+ ": " + Players[i].Name + " <br>Points :" + Players[i].points+ "<br>";
        
        
        
    }
    field.innerHTML = temp;
}
sub.onclick=()=>{
    let ID = id.value;
    let P = Points.value;
    Players[ID].points+=Number(P);
    refr();
    
}



