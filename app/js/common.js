$(function() {
	$('.cards .chart-card.inizialization').DonutWidget({
		max: 100,
		value: 50,
		text: "",
		rotate: 0,
		caption: "",
		 template: [
			'<div class="donut-bite" data-segment-index="0"></div>',
			'<div class="donut-bite" data-segment-index="1"></div>',
			'<div class="donut-bite" data-segment-index="2"></div>',
			'<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'
		  ].join(''),
		  colors: {
			primary: "#5EB6D8",
			background: "#10204A"
		  },
		  size: "normal"
	});
	
	var $logLink = $('header .log-in .login-link'),
		$modalClose = $('.modal-form .modal-close');
	$logLink.click(function() {
		$('.modal-form.login-modal').fadeIn(500);
	});
	$modalClose.click(function() {
		$(this).closest('.modal-form').fadeOut(500);
	});
	
	$('.modal-form .modal-contents form .sign-up').click(function() {
		$(this).closest('.modal-form.login-modal').fadeOut('fast', function() {
			$('.modal-form.sign-in-modal').fadeIn('fast');
		});
	});
	
	$('.modal-form .modal-contents form .log-in').click(function() {
		$(this).closest('.modal-form.sign-in-modal').fadeOut('fast', function() {
			$('.modal-form.login-modal').fadeIn('fast');
		});
	});
	
	$('.modal-form .modal-contents form .forgot-password').click(function() {
		$(this).closest('.modal-form.login-modal').fadeOut('fast', function() {
			$('.modal-form.reset-password').fadeIn('fast');
		});
	});
	
	var ctx = $("#myChart");
	var densityData = {
	  label: '',
	  data: [0, 20, 40, 60, 70,],
	  backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)'
      ]
	};

	var barChart = new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "N/A"],
		datasets: [densityData]
	  },
	  options: {
		  legend: {
			  display: false
		  }
	  }
	});
	
});