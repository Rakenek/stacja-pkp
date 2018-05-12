$(function() {
	switch (menu) {
	case 'Strona domowa':
		$('#home').addClass('nav-item active');
		break;
	case 'O nas':
		$('#about').addClass('nav-item active');
		break;
	case 'Kontakt':
		$('#contact').addClass('nav-item active');
		break;
	case 'Uslugi':
		$('#services').addClass('nav-item active');
		break;
	default:
		$('#home').addClass('nav-item active');

	}
}

);