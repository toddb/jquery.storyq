describe('Tree display : ', {
  
  before_all: function() {
		results = $('#results').storyq({
        url: 'data/results-01.xml'
    })
    
    pause = function(milliseconds) {
    	var dt = new Date();
    	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
    }

    // put in a wait flag for the xml to be loaded - errr
    pause(300)
    
   },
   
   after_all: function(){
     results.empty()
   },
   
  'should display a tree' : function() {
    tree = $('#'+$.storyq.defaults.tree)
	  value_of(tree.length).should_be(1);
	  value_of($("#tree").css("display")).should_be('block')
	  value_of($("#tree").is(":visible")).should_be(true)
  },
	
	'should display the top node tree': function(){
	  value_of($("#tree > li").size()).should_be(1)
	},

	'should display 1 project': function(){
  	value_of($("#tree li>span.project").size()).should_be(1)
	},

	'should display 1 namespace': function(){
  	value_of($("#tree li>span.namespace").size()).should_be(1)
	},

	'should display 1 class': function(){
  	value_of($("#tree li>span.class").size()).should_be(1)
	},

	'should display 3 sets of stories': function(){
  	value_of($("#tree code.story").size()).should_be(3)
	},	

	'should display 3 sets of stories which are not visible': function(){
  	value_of($("#tree code.story:hidden").size()).should_be(3)
	},	
	
	'should have 1 project line and contain \'<StoryQ.Demo> (3 Tests) 2 Tests failed\'': function(){
	  value_of($('.project').text()).should_be('<StoryQ.Demo> (3 Tests) 2 Tests failed') 
	},
	
	'should have 1 Namespace and contain \'StoryQ.Demo (3 tests) 2 Tests failed\'': function(){
	  value_of($('.namespace').text()).should_be('StoryQ.Demo (3 Tests) 2 Tests failed') 
	},

	'should have 1 Class and contain \'DemoTest (3 tests) 2 Tests failed\'': function(){
	  value_of($('.class').text()).should_be('DemoTest (3 Tests) 2 Tests failed') 
	},
	
	'should have 3 story tests': function(){
  	 value_of($('.story').size()).should_be(3)	 
	},
	
	'should have 1 story passed': function(){
 	 value_of($('.passed', $('ul#tree > li>ul > li>ul > li>ul > li')).size()).should_be(1)
	},
	'should have 1 story pending': function(){
	 value_of($('.pending', $('ul#tree > li>ul > li>ul > li>ul > li')).size()).should_be(1)
	},
	'should have 1 story failed': function(){
	 value_of($('.failed', $('ul#tree > li>ul > li>ul > li>ul > li')).size()).should_be(1)
	},

	'should have \'PassingExample Success\'': function(){
 	 value_of($('li:first>.result>span', $('ul#tree > li>ul > li>ul > li>ul')).text()).should_be('PassingExample Success')	   
	},
	
	'should have \'PendingExample Ignored: Pending\'': function(){
  	 value_of($('li::nth-child(2)>.result>span', $('ul#tree > li>ul > li>ul > li>ul')).text()).should_be('PendingExample Ignored: Pending')	   
	},
	
	'should have \'FailingExample Failed: Exception: No button with that name found!\'': function(){
  	 value_of($('li:last>.result>span', $('ul#tree > li>ul > li>ul > li>ul')).text()).should_be('FailingExample Failed: Exception: No button with that name found!')	   
	},
	
	
})