describe('I need to read the xml and convert into object', {
	'before all': function() {
		target = {};
		$().storyq({
        url: 'data/results-01.xml',	
		    load: '',
        success: function(feed) {
					target = feed
     	}
    })
   
	},
	
	'should return an object': function() {
		value_of(target).should_not_be_null()
	},
	
	'should not be a function': function() {
		value_of(typeof target).should_not_be(typeof Function )
	},
	
	'should have a version': function(){
		value_of(target.version).should_be('0.1')
	},
	
	'should have items': function(){
		value_of(target.items).should_not_be_empty()
	},
	
	'should have the same value as the reference object in data/results-01.js': function(){
		value_of(reference).should_not_be_undefined()
		value_of(target).should_be(reference)
	},
	
})