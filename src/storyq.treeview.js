jQuery.fn.storyQ.treeview = {}

jQuery.fn.storyQ.treeview.createNode = function( options ){

	options = jQuery.extend({
    
    item: null,
    appendTo: null,
		countText: ' (' + options.item.tests +' tests)',
		text: options.item.type != 'narrative'?
				    options.item.title:
				    'Narrative',
		rowClass: options.item.type == 'narrative' || options.item.type == 'test' ?
					    'result' :
					    'result-long',
		iconClass: options.item.type == 'narrative' || options.item.type == 'test' ?
					      options.item.result :
					      options.item.result+options.item.type,
		showCount: options.item.type == 'test' ? false : true
        
    }, options);

	var ret = $('<li/>')
			.attr("title", options.item.description)
			.html(options.text)
			.append(options.showCount ? $('<span>').addClass('count').html(options.countText):'')
			.wrapInner($('<span>').addClass(options.iconClass).addClass(options.rowClass))
	 		.appendTo(options.appendTo)
	
	// a test row does not expand so should not be enclosed in a <ul/>
	if (options.item.type == 'test') 
		return ret;
	return $('<ul/>').appendTo(ret)
		 						

}
