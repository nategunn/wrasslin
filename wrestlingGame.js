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
	name: "Monte Hawkins",
	nickname: "the Bull",
	finisher: "the Stampede"
},
{
	hitPoints: 50,
	moveset: 1,
	name: "Roy Castle",
	nickname: "the Cooler",
	finisher: "the Freezer"
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
wrestler1: null,
nick1: null,
wrestler2: null,
nick2: null,
hp1: null,
hp2: null,



handleClick: function(el){
	this.currentWrasslerKey = el.value;
},

assign: function(){
	if(this.currentWrasslerKey==null){return;}
	var x = this.currentWrasslerKey;
	this.wrestler1 = this.wrestler[x].name;
	this.nick1 = this.wrestler[x].nickname;
	this.hp1 = this.wrestler[x].hitPoints;

	var y = this.random(0,this.wrestler.length);
	if(y == x && y > 0)
	{
		y -= 1;
	}else if(y == x && y === 0)
	{
		y += 2;
	}
	this.wrestler2 = this.wrestler[y].name;
	this.nick2 = this.wrestler[y].nickname;
	this.hp2 = this.wrestler[y].hitPoints;

	document.getElementById("commentator").innerHTML = "Tonight's matchup features " + "\'" + this.nick1 + "\' " + this.wrestler1 + " against " + "\'" + this.nick2 + "\' " + this.wrestler2 + "!";

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

	//document.getElementById("commentator").innerHTML = string;
	//document.getElementById("lif").innerHTML = this.hp1;
},

random: function(max, min){
		return Math.floor(Math.random()*(max-min)+min);
}

};
