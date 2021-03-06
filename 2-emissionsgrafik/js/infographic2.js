// Load the Infographic & fractions:
var s = Snap("#snappy");

Snap.load("infographic2.svg", function(f) {
	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended

	var infosAll = f.selectAll("*[class^='info-']");

	// Animation box Lines in Between:
	var boxLineL = f.selectAll("*[id^='btw-']>line:first-child"),
		boxLineR = f.selectAll("*[id^='btw-']>line:nth-child(2)");
	boxLineL.attr({ x2 : '540'});
	boxLineR.attr({ x2 : '858'});


	infosAll.forEach( function(a) {

		a.mouseover(function(e) { 
			iconClass = this.attr('class');

			for (var i = 0; i < infosAll.length; i++) {
				if (infosAll[i].attr('class') == iconClass ) {
					thatInfo = infosAll[i];
					thatInfo.addClass('check');

					if (thatInfo.attr('id') == "btw-farming" || thatInfo.attr('id') == "btw-building" || thatInfo.attr('id') == "btw-transport" || thatInfo.attr('id') == "btw-energy" ) {
						var lineL = thatInfo.select("line:first-child"),
							lineR = thatInfo.select("line:nth-child(2)");
						lineL.animate({ x2 : '579'}, 350, mina.ease);
						lineR.animate({ x2 : '819'}, 350, mina.ease);
					}

				}
			}

		});

		a.mouseout(function(e) { 			
			iconClass = this.attr('class');

			for (var i = 0; i < infosAll.length; i++) {
				if (infosAll[i].attr('class') == iconClass) {
					infosAll[i].removeClass('check');

					if (thatInfo.attr('id') == "btw-farming" || thatInfo.attr('id') == "btw-building" || thatInfo.attr('id') == "btw-transport" || thatInfo.attr('id') == "btw-energy" ) {
						var lineL = thatInfo.select("line:first-child"),
							lineR = thatInfo.select("line:nth-child(2)");
						lineL.animate({ x2 : '540'}, 350, mina.ease);
						lineR.animate({ x2 : '858'}, 350, mina.ease);
					}

				}
			}
		});

	});

	// infoIconsBg circle infinite animation:
	var iconsAll = f.selectAll("*[class^='info-']>.icon");

	function iconsPulse() {
		iconProcessed = 0;

		iconsAll.forEach( function(e) {
			iconBg = e.select('.bg');

			iconBg.stop().animate({ r: 23.5 }, 1500, mina.elastic,
			function() { 
				var check = this.parent().parent().hasClass('check');
				iconProcessed++;

				if (!check) { this.attr({ r: 21.5 }); }

				if (iconProcessed == 12) {
					iconsPulse(); // Repeat this animation so it appears infinite.
				}
				
			}, 200, mina.ease);
		});
	}
	iconsPulse();


	// infoIconBg circle infinite animation:
	var infoIconBg =  f.select("#info-icon>circle"); 

	function infoPulse() {
		infoIconBg.stop().animate({ r: 23 }, 1500, mina.elastic,
		
		function() { 
			infoIconBg.attr({ r: 20.5 }); 

			infoPulse();
		
		}, 200, mina.ease);
	}
	infoPulse();

	// All Snap appends:
	s.append(mainGraph);
});


/* Add sound 
function playclip() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		if (document.all) {
		  document.all.sound.src = "audio/click.mp3";
		}
	}

else {
		{ 
			var audio = document.getElementsByTagName("audio")[0];
			audio.play();
		}
	}
}

*/
