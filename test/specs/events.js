describe('Events on lines : ', {
  
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

   // NOTE: these tests do not test the clicking of the tree expansion itself

 	'should show the results of the test in the pane when clicking a PASSED test': function(){
 	  value_of($('.test', $('#tree')).size()).should_be(3);
 	  $('.test:first', $('#tree')).click()
    value_of($('#summary .summary').size()).should_be(1);
    value_of($('#summary .summary').text()).should_not_be_null();
 	},

 	'should show the results of ALL (3) tests in the pane when clicking on a PROJECT heading': function(){
 	  $('.project:first', $('#tree')).click()
    value_of($('#summary .summary').size()).should_be(3);
 	},

 	'should show the results of ALL (3) tests in the pane when clicking on a NAMESPACE heading': function(){
 	  $('.namespace:first', $('#tree')).click()
    value_of($('#summary .summary').size()).should_be(3);
 	},

 	'should show the results of ALL (3) tests in the pane when clicking on a CLASS heading': function(){
 	  $('.class:first', $('#tree')).click()
    value_of($('#summary .summary').size()).should_be(3);
 	},

});