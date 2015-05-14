$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
		anchors: ['firstPage', 'secondPage', 'thirdPage'],
		navigation: true,
		navigationPosition: 'right',
		slidesNavigation: true,
		controlArrows: false,
		responsive: 900
	});
});
