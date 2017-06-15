$(document).ready(function(){
	$('#index_router').find('li').hover(function(){
		$('#index_router').find('.zhezhao').hide();
		$(this).find('.zhezhao').show();
	});
	$('.table_box').hover(function(){
		$(this).find('.zhezhao').show();
		$(this).siblings().find('.zhezhao').hide();
	},function(){
		$(this).find('.zhezhao').hide();
	})
	
})
