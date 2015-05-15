$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['Info', 'Education', 'Skills', 'Works', 'Contact'],
		navigation: true,
		menu: '#menu',
		navigationPosition: 'right',
		slidesNavigation: true,
		controlArrows: false,
		responsive: 900
	});
});
