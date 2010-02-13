describe('Data loading : ', {
  
  before_each: function(){
  	target_success = {};
  	target_load = {};
  		$().storyq({
          url: 'data/results-01.xml',	
  		    load: function(feed) {
  					target_load = feed
       	},
          success: function(feed) {
  					target_success = feed
       	}
      }) 
  },
  
  'should return an object because success function is chained through allowing for custom function through hook': function() {
		value_of(target_success).should_not_be_null()
	},

  'should return an object because load function is chained through allowing for custom function through hook': function() {
 		value_of(target_load).should_not_be_null()
 	},
	
	'should not be a function': function() {
		value_of(typeof target_success).should_not_be(typeof Function )
		value_of(typeof target_load).should_not_be(typeof Function )
	},
	
});