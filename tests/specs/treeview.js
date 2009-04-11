describe('I need to be able to populate the treeview', {
  
  'before all': function() {
    $('<ul id="tree" class="storyq">').insertAfter('#main')

		$('#tree').storyq({
        url: 'data/results-01.xml',	
        success: function(feed) {
          
					$("#tree").treeview({
						collapsed: false,
						animated: "medium",
						control:"#sidetreecontrol",
						persist: "location"
					});
     	}
    })
	},
	
	'after all': function(){
	  $('#tree').remove()
	},
	
	'should display the top node tree and have 26 items': function(){
	  value_of($("#tree").css("display")).should_be('block')
	  value_of($('ul#tree > li').size()).should_be(1)
  	value_of($("ul#tree li>span").size()).should_be(26)
	},
	
	'should have scenarios': function(){
	  value_of($('ul#tree > li > ul > li').size()).should_be(2) 
	},
	
	'should have narratives': function(){
  	 value_of($('ul#tree > li > ul > li > ul > li').size()).should_be(4)
	},
	
	'should have tests': function(){
  	 value_of($('ul#tree > li > ul > li > ul > li > ul > li').size()).should_be(19)	 
	},
	
	'should have the correct passed, pending and failed results': function(attribute){
 	 value_of($('span.passed').size()).should_be(5)
	 value_of($('span.pending').size()).should_be(13)
	 value_of($('span.failed').size()).should_be(5)
	 value_of($('span.failedproject').size()).should_be(1)
	 value_of($('span.failedscenario').size()).should_be(2)
	 value_of($('span.passedproject').size()).should_be(0)
	 value_of($('span.passedscenario').size()).should_be(0)
	 value_of($('span.pendingproject').size()).should_be(0)
	 value_of($('span.pendingscenario').size()).should_be(0)
	},

	'stories, scenarios and narratives should have test counts': function(){
	  value_of($('ul#tree > li > span>span.count').size()).should_be(1)
	  value_of($('ul#tree > li > ul > li > span>span.count').size()).should_be(2)
	  value_of($('ul#tree > li > ul > li > ul > li > span>span.count').size()).should_be(4)
	},
	
	'tests should not have test counts': function(){
	  value_of($('ul#tree > li > ul > li > ul > li > ul > li span>span.count').size()).should_be(0)	 	 
	},
	
})