$(function() {
	toastr.options = {
		"closeButton": true,
		"debug": false,
		"newestOnTop": false,
		"progressBar": false,
		"positionClass": "toast-top-right",
		"preventDuplicates": false,
		//"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "3000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	}

	toastr.options.closeHtml = '<i class="icon-close"></i>';

	$('#success').click(function(event) {
		$(this).prop('disabled', true)
		toastr.success('You clicked Success toast');
	});
	$('#info').click(function(event) {
		toastr.info('You clicked Info toast')
	});
	$('#error').click(function(event) {
		toastr.error('You clicked Error Toast')
	});
	$('#warning').click(function(event) {
		toastr.warning('You clicked Warning Toast')
	});

	// Toast Image and Progress Bar
	$('#image').click(function(event) {
		toastr.options.progressBar = true,
		toastr.info('<img src="assets/images/flags/1x1/us.svg" style="width:50px;">', 'Toast Image')
	});

	// Toast Position
	$('#position').click(function(event) {
		var pos = $('input[name=position]:checked', '#positionForm').val();
		toastr.options.positionClass = "toast-" + pos;
		toastr.options.timeOut = "1000";
		toastr.options.extendedTimeOut = "1000";
		console.log(toastr.options.positionClass);
		toastr.success('This sample position', 'Toast Position');
		toastr.clear();
	});

	toastr.success('This sample pos', 'Toast');

	// Callbacks
	toastr.options.onShown = function() {
		console.log('hello');
	}
});
