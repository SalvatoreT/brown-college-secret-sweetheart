$(document).ready(function() {
    var scrollorama = $.scrollorama({    	
        blocks:'.scrollblock',
        enablePin: false
    });
    var HEIGHT = $(window).height();
    var WIDTH = $(window).width();

	scrollorama
		.animate('#left-buble1',{ delay: -HEIGHT, duration: HEIGHT/2, property:'left', start:-WIDTH/2 })
		.animate('#left-buble1',{ delay: -HEIGHT, duration: HEIGHT/2, property:'opacity', start:0 });
	scrollorama
		.animate('#right-buble1',{ delay: -HEIGHT, duration: HEIGHT/2, property:'left', start:WIDTH/2 })
		.animate('#right-buble1',{ delay: -HEIGHT, duration: HEIGHT/2, property:'opacity', start:0 });

	scrollorama
		.animate('#left-buble2',{ delay: 0, duration: HEIGHT/2, property:'left', start:-WIDTH/2 })
		.animate('#left-buble2',{ delay: 0, duration: HEIGHT/2, property:'opacity', start:0 });
	scrollorama
		.animate('#right-buble2',{ delay: 0, duration: HEIGHT/2, property:'left', start:WIDTH/2 })
		.animate('#right-buble2',{ delay: 0, duration: HEIGHT/2, property:'opacity', start:0 });

	scrollorama
		.animate('#left-buble3',{ delay: HEIGHT/4, duration: HEIGHT/2, property:'left', start:-WIDTH/2 })
		.animate('#left-buble3',{ delay: HEIGHT/4, duration: HEIGHT/2, property:'opacity', start:0 });
	scrollorama
		.animate('#right-buble3',{ delay: HEIGHT/4, duration: HEIGHT/2, property:'left', start:WIDTH/2 })
		.animate('#right-buble3',{ delay: HEIGHT/4, duration: HEIGHT/2, property:'opacity', start:0 });
});