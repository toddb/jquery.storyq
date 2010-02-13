describe('Basic plugin initialization', {
  
  before_all: function() {      
		$('#results').storyq({
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
     $('#results').empty()
   },

 	'should be able see that version of project': function(){
     value_of($.storyq.VERSION).should_be('0.3.0')
 	},
	
	'should be able see that element is visible': function(){
    value_of($('#results').is(':visible')).should_be_true()
	},
	
	'should display the top node tree and a bottom pane for results': function(){
	  value_of($("#tree").css("display")).should_be('block')
	  //value_of($("#summary").css("display")).should_be('block')
	},
	
	'should have display the PROJECT at the top with the number of tests': function(){
	  value_of($('.project').text()).should_be('<StoryQ.Demo> (3 Tests) 2 Tests failed') 
	},
	
	'should separate out the namespace with the number of tests': function(){
    value_of($('.namespace').text()).should_be('StoryQ.Demo (3 Tests) 2 Tests failed')
 	},
	
	'should have have a parent node for each Test class with the number of tests': function(){
  	 value_of($('.test').size()).should_be(3)	 
	},
	
	'should have separate lines for each test with passed, pending or failed': function(){
 	  value_of($('.passed>span').text()).should_be('PassingExample Success')	 
 	  value_of($('.pending>span').text()).should_be('PendingExample Ignored: Pending')	 
 	  // Shows a design smell for targetting!
 	  //value_of($('.failed>span').text()).should_be('FailingExample Failed: Exception: No button with that name found!')	 
	},
	
	'should make each line clickable with the correct results being shown in a separate pane': function(){
		$('.namespace').click()
		value_of($('#summary').text()).should_not_be_null()
	}
})