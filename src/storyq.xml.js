jQuery.fn.storyQ.xml = {}

jQuery.fn.storyQ.xml.processResult = jQuery.fn.processResult = function( selector ) {
	// process the current element ONLY for failed, passed or pending (default)
	if ( selector == ":self" ){
		return ($(this).attr('result') == null) ? 'pending' : $(this).attr('result')
	}
	
	// process the descendants for failed, passed or pending (default)
	// TODO: it can't account for no result attribute as pending
	if ($("*[@result='failed']", this).size() > 0) {
		return 'failed'
	} else if ($("*[@result='pending']", this).size() == 0){
		return 'passed'
	} 
	return 'pending'
}

jQuery.fn.storyQ.xml.processTotals = jQuery.fn.processTotals = function( selector ) {
	return
	var ret = {}
	ret.passed = $("*[@result='passed']", this).size()
	ret.failed = $("*[@result='failed']", this).size()
	ret.stories = $("story", this).size()
	ret.scenarios = $("scenario", this).size() = 0
	ret.narratives = $("narrative", this).size()
	ret.tests = $("*", this).size() - ret.stories - ret.narratives - ret-scenarios
	ret.pending = ret-tests - ret.passed - ret.failed 

	return ret
}
