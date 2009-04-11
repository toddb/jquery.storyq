module("XML");

test("should convert the xml to an object (conversion without showing the tree)", function() {
	
	expect( 5 )
	stop();
	
   $().storyq({
        url: 'data/results-01.xml',	
		    load: '',
        success: function(feed) {
      		ok( feed, "is an object" )
      		ok( !$.isFunction(feed), "is not a function" )
      		ok( feed.version, "has a version: " + feed.version )
      		ok( feed.items, "has items")
      		same( feed, reference, "is the same as the refefence object in data/results-01.js")
      		start();
      	}
    });

});
