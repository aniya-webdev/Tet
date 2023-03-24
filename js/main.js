/* Mobile Navigation */

const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-menu__focus');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('mobile-menu--active');
});

navLinks.forEach(function (item, index) {
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('mobile-menu--active');
	});

	item.addEventListener('keydown', function (event) {
		if (nav.classList.contains('mobile-menu--active') && event.keyCode === 9) {
			if (event.shiftKey) {
				if (index === 0) {
					event.preventDefault();
					navIcon.focus();
				}
			} else {
				if (index === navLinks.length - 1) {
					event.preventDefault();
					navIcon.focus();
				}
			}
		}
	});
});

navIcon.addEventListener('keydown', function (event) {
	if (nav.classList.contains('mobile-menu--active') && event.keyCode === 9) {
		event.preventDefault();
		navLinks[0].focus();
	}
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('mobile-menu--active');
		modalWindow.classList.remove('modal-block--active');
	}
});


/* Modal Window */

const buttonModal = document.querySelectorAll('.button-modal');
const buttonMobileModal = document.querySelectorAll('.mobile-menu__button-modal');
const modalWindow = document.querySelector ('.modal-block');
const buttonModalClose = document.querySelector ('.btn-close');
const modalInput = document.querySelectorAll('.modal-input');

buttonModal.forEach(function(item) {
  item.addEventListener('click', function() {
    modalWindow.classList.add('modal-block--active');
    modalInput[0].focus();
  });
});

buttonMobileModal.forEach(function(item) {
  item.addEventListener('click', function() {
    navIcon.classList.remove('nav-icon--active');
    nav.classList.remove('mobile-menu--active');
    modalWindow.classList.add('modal-block--active');
    modalInput[0].focus();
  });
});

buttonModalClose.addEventListener('click', function() {
  modalWindow.classList.remove('modal-block--active');
});

modalWindow.addEventListener('keydown', function(event) {
  if (event.keyCode === 9) {
    const focusableElements = modalWindow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        buttonModalClose.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        buttonModalClose.focus();
      }
    }
  }
});

modalInput.forEach(function(item) {
  item.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
      const focusableElements = modalWindow.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          buttonModalClose.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          buttonModalClose.focus();
        }
      }
    }
  });
});

modalInput[0].focus();

/* Phone +X (XXX)XXX-XX-XX */

const phoneInput = document.querySelector('.phone-input');

phoneInput.addEventListener('input', function() {
  let phoneNumber = this.value.replace(/\D/g, '').substring(0, 11);
  let formattedPhoneNumber = '';

  if (phoneNumber.length >= 1) {
    formattedPhoneNumber = `+${phoneNumber.substring(0, 1)} `;
  }
  if (phoneNumber.length > 1 && phoneNumber.substring(1, 4)) {
    formattedPhoneNumber += `(${phoneNumber.substring(1, 4)}) `;
  }
  if (phoneNumber.length > 4 && phoneNumber.substring(4, 7)) {
    formattedPhoneNumber += `${phoneNumber.substring(4, 7)}-`;
  }
  if (phoneNumber.length > 7 && phoneNumber.substring(7, 9)) {
    formattedPhoneNumber += `${phoneNumber.substring(7, 9)}-`;
  }
  if (phoneNumber.length > 9 && phoneNumber.substring(9)) {
    formattedPhoneNumber += `${phoneNumber.substring(9)}`;
  }

  this.value = formattedPhoneNumber;
});

phoneInput.addEventListener('keydown', function(event) {
  if (event.code === 'Backspace') {
    this.value = this.value.slice(0, -1);
    event.preventDefault();
  }
});

/* jQuery */

$(document).ready(function(){
	
	//Who Slider

	$(window).on('load resize', function() {
		if ($(window).width() <= 930) {
		  $('#who-slider:not(.slick-initialized)').slick({
			  arrows: false,
			  variableWidth: true,
			  touchThreshold: 500,
			//   centerMode: true,
			  slidesToShow: 1,
			  speed: 100,
		  });
		} else {
		  $("#who-slider.slick-initialized").slick("unslick");
		}
	  });
	 
	//Preferences Slider

	$(window).on('load resize', function() {
		if ($(window).width() <= 930) {
		  $('#preferences-slider:not(.slick-initialized)').slick({
			  arrows: false,
			  variableWidth: true,
			  touchThreshold: 500,
			//   centerMode: true,
			  slidesToShow: 1,
			  speed: 100,
		  });
		} else {
		  $("#preferences-slider.slick-initialized").slick("unslick");
		}
	  });

	// Team Slider

	const teamSlider = $('#team-slider');
	teamSlider.owlCarousel({
		loop: true,
		items: 4,
		margin: 30,
		dots: false,
		autoWidth:true,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			599: {
				items: 2,
				margin: 30
			},
			930: {
				items: 3
			},
			1199: {
				items: 4
			}
		}
	})

	$('.slider-arrow--left').click(function() {
		teamSlider.trigger('prev.owl.carousel');
	})
	$('.slider-arrow--right').click(function() {
		teamSlider.trigger('next.owl.carousel');
	})

	// Articles Slider
	const articlesSlider = $('#articles-slider');
	articlesSlider.owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		responsive: {
			0: {
				// items: 1,
				autoWidth:true,
				margin: 20
			},
			599: {
				items: 2,
				// autoWidth:true,
				margin: 20
			},
			930: {
				items: 3,
				margin: 20
			},
			1199: {
				items: 3
			}
		}
	})

	$('.section-articles__arrow--left').click(function() {
		articlesSlider.trigger('prev.owl.carousel');
	})
	$('.section-articles__arrow--right').click(function() {
		articlesSlider.trigger('next.owl.carousel');
	})

	//Clients Slider
	const clientsSlider = $('#clients-slider');
	clientsSlider.owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		responsive: {
			0: {
				items: 2,
				autoWidth:true,
				margin: 20
			},
			599: {
				items: 3,
				autoWidth:true,
				margin: 30
			},
			930: {
				items: 5
			},
			1199: {
				items: 6
			}
		}
	})

	$('.section-clients__arrow--left').click(function() {
		clientsSlider.trigger('prev.owl.carousel');
	})
	$('.section-clients__arrow--right').click(function() {
		clientsSlider.trigger('next.owl.carousel');
	})
});
//# sourceMappingURL=main.js.map
