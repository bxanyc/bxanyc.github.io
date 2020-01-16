var varLine; //variable for var text in intro
var nameLine; //variable for name text in intro 

// Wait for document to load
$(function() {
	// Load confirmation
	console.log("Page has loaded.");
	


	startIntroSequence(); //start typing animation
	windowScrollTriggers();
	typingText();
});

/*
 *	handle the queuing of different parts of the opening sequence
 *	to prevent everything running simultaneously
 */
function startIntroSequence() {
	varLine = $('p#var-line');
	nameLine = $('p#name-line');

	
	typeLine(1) //enter first line and wait for completion 
	.promise().done(function() {
		setTimeout(function() { //wait 1.5 seconds
			removeCursor(varLine); //remove cursor for first line
			typeLine(2) //enter second line and wait for completion
			.promise().done(function() {
				setTimeout(function() {//wait 1 second
					$('div.intro-line-div').addClass("intro-line-div-extend");//animate line div
					$('div#intro-text').addClass("visible-intro"); //animate intro text
					// removeCursor(nameLine);
					setTimeout(function() {
						$("div#scroll-arrow-parent").css({"visibility":"visible", "opacity":"1"}); //fade in the arrow scrolling indicator
					}, 2300);
				},1000);
			});
		}, 1500);
	});
}

//input the parent element and remove the respective span.ti-cursor element
function removeCursor(parentElement) { parentElement.children("span.ti-cursor").remove(); }

//animate typeIt effect for text
//take sequence number to prevent autoplaying of effect
function typeLine(sequenceOrder) {
	if(sequenceOrder == 1) {
		return varLine.typeIt({
			speed: 50,
	     	autoStart: false
		})
		.tiType('<span class="blue">var </span>')
		.tiPause(100)
		.tiType('<span class="pink">myName =</span>');
	}
	
	if(sequenceOrder == 2) {

		return nameLine.typeIt({
			speed: 50,
	     	autoStart: false
		})
		.tiType('BRIAN ')
		.tiPause(100)
		.tiType('AUTAR');
	}
}

// triggers for scrolling through page
function windowScrollTriggers() {
	$(window).on("scroll", function() {
		// console.log("scrollTop(): " + $(window).scrollTop());
		shrinkLogo();
	});
}

//when the scrollbar is greater than 100px, shrink the logo
function shrinkLogo() {
	// if($(window).scrollTop() > 100) {
	// 	console.log("Greater than 100");
	// }
	$("div#logo-container").toggleClass("shrinkLogo", $(window).scrollTop() > 100);
}

function typingText() {
	return $('p#projects-line').typeIt({
		speed: 50,
	    autoStart: false,
	    // callback: removeCursor($('p#projects-line'))
	    callback: function() {
	    	//alert("done");
	    	removeCursor($('p#projects-line'));
	    }
	})
	.tiType('PROJECTS'), 
	$('p#ripple-line').typeIt({
		speed: 50,
	    autoStart: false,
	    // callback: removeCursor($('p#projects-line'))
	    callback: function() {
	    	//alert("done");
	    	removeCursor($('p#ripple-line'));
	    }
	})
	.tiType('RIPPLE'), 
	$('p#ghg-line').typeIt({
		speed: 50,
	    autoStart: false,
	    // callback: removeCursor($('p#projects-line'))
	    callback: function() {
	    	//alert("done");
	    	removeCursor($('p#ghg-line'));
	    }
	})
	.tiType('GREATEST')
	.tiBreak()
	.tiType('HOTELS')
	.tiBreak()
	.tiType('GROUP'), 
	$('p#smart-line').typeIt({
		speed: 50,
	    autoStart: false,
	    // callback: removeCursor($('p#projects-line'))
	    callback: function() {
	    	//alert("done");
	    	removeCursor($('p#smart-line'));
	    }
	})
	.tiType('SMART');
}