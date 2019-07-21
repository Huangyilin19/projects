$(document).ready(function(){
	let i=0;
	function turn(){
		let bns=$('.bn'),
		span=$('.labels span');
		bns.hide();
		console.log('i',span[i]);
		$(span).removeClass('active');
		$(span[i]).addClass('active');
		$(span).parent().siblings('.bn').hide();
		$(bns[i]).show();
		i=(i+1)%4;
	}
	setInterval(turn,3000);
})
