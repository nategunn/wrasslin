

var ToolBelt = {

	
	
	life:50,
	punDam:[3,2,4,5],
	exclamations: ["Wow! ", "Oh no! ", "God almighty! ", "Good Gracious! "],
	leadIn: ["That was a nasty ", "What a powerful ", "A horrifying ", "That was an illegal "], 
	strikes: ["uppercut!", "chairshot!", "Lucy lick!", "monkey punch!", "jab", "Bug meow!", "dropkick!"],
	done: ["You should stop.", "Is he still breathing?", "Someone call the cops!", "ok, turn the lights out when you leave."],

	punch:function(){

		var x = ToolBelt.random(0,ToolBelt.punDam.length);
		var exc = ToolBelt.random(0,ToolBelt.exclamations.length);
		var lead = ToolBelt.random(0,ToolBelt.leadIn.length);
		var str = ToolBelt.random(0,ToolBelt.strikes.length);
		var dn = ToolBelt.random(0,ToolBelt.done.length);
		var string = ToolBelt.exclamations[exc] + ToolBelt.leadIn[lead] + ToolBelt.strikes[str];

		ToolBelt.life -= ToolBelt.punDam[x];

		document.getElementById("lif").innerHTML = ToolBelt.life + " hit points left!";

		if(ToolBelt.life <= 0){
			document.getElementById("commentator").innerHTML = ToolBelt.done[dn];
		}else{
			document.getElementById("commentator").innerHTML = string;
		};
	},

	random: function(max, min){
		return Math.floor(Math.random()*(max-min)+min);
	}
  

};


