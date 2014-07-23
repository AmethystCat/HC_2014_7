$(function() {
	$("#icontent1").load("./pages/governmentS.html");
	$("#icontent2").load("./pages/policeS.html");
	$("#icontent4").load("./pages/phoneS.html");
	$("#icontent3").load("./pages/safeK.htm");
	$(document).on("click",".cl3 li a",function() {
			var go = ""+"."+this.id+"";
			 $.scrollTo(go,800,{offset:-50});
		});
});
