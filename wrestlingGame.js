var ToolBelt = {

commentary:{
	exclamations: ["Wow! ", "Oh no! ", "God almighty! ", "Good Gracious! "],
	leadIn: ["That was a nasty ", "What a powerful ", "A horrifying ", "That was an illegal "]
},

moves:[
	["dropkick", 5],
	["clothesline", 4],
	["backdrop", 4],
	["punch", 3]
],

wrestler:[
{
	hitPoints: 50,
	moveset: 1,
	name: "Zeb Jackson",
	nickname: "Hulk",
	finisher: "the Hulk Smash"
},
{
	hitPoints: 50,
	moveset: 1,
	name: "Jack Hogan",
	nickname: "Lightning",
	finisher: "Electrocutioner"
}
],



currentWrasslerKey: null,
hp1: null,


handleClick: function(el){
	this.currentWrasslerKey = el.value;
},

assign: function(){
	if(this.currentWrasslerKey==null){return;}
	var x = this.currentWrasslerKey;
	var i = this.wrestler[x].name;
	this.hp1 = this.wrestler[x].hitPoints;
	
},

attack: function(){
	if(this.currentWrasslerKey==null){return;}
	var string ='';
	for(key in this.commentary){
		var comm = this.commentary[key];
		var x = this.random(0,comm.length);
		string += comm[x] + " ";
	} 

	var rand = this.random(0, this.moves.length);
	var moveName = this.moves[rand][0];
	string += moveName;

	var dam = this.moves[rand][1];
	this.hp1 -= dam;

	document.getElementById("commentator").innerHTML = string;
	document.getElementById("lif").innerHTML = this.hp1;
},

random: function(max, min){
		return Math.floor(Math.random()*(max-min)+min);
}

};
