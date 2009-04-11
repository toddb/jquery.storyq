jQuery.fn.storyQ = {}

jQuery.fn.storyq = jQuery.fn.storyQ.getResults = function(options) {
    options = jQuery.extend({
    
        url: null,
        data: this,
        success: null,

		load: function(feed){
						// recurse through the structure: story > scenario > narrative > test
						function node(item, appendTo){
							if (item.items == undefined) return
							var parent = $().storyQ.treeview.createNode( { 
												item: item, 
												appendTo: appendTo 
												})
							$.each(item.items, function() {
								node(this, parent)								
							})							
						}
						node (feed.items[0], this.data)
					},
        
    }, options);

    if(options.url) {

        $.ajax({
            type: 'GET',
            url: options.url,
            data: options.data,
            dataType: 'xml',
            success: function(xml) {
                var feed = new StoryQResults(xml);

                if(jQuery.isFunction(options.load)) options.load(feed)
                if(jQuery.isFunction(options.success)) options.success(feed)
            }
        });
    }
};
