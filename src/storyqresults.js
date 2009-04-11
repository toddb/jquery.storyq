function StoryQResults(xml){
	if(xml) this.parse(xml);
};

StoryQResults.prototype = {
  
  version: '0.1',
  items: [],
	
	parse: function(xml){
				
		var result = this;
		
		$('story', xml).each( function() {
        
      var session = new StoryQItem();
      
      session.type = 'project';
      session.title = $(this).attr('namespace');
      session.description = $(this).find('title').text();
      session.tests = $(this).find('narrative').size();
			session.result = $(this).processResult()
			//console.log($(this).processTotals())
			session.items = []
			
			$('scenario', this).each( function(){
				
				var scenario = new StoryQItem();
				
        scenario.type = 'scenario';
        scenario.tests = $(this).find('narrative').size();
				scenario.result = $(this).processResult()
				scenario.items = []
				
				if ($(this).attr('dialect') == 'InOrder'){
					scenario.title =  'In order to' + $(this).find('value').text() + ', ' +
									          'I want '     + $(this).find('role').text() + ' ' +
									          'so that '	  + $(this).find('action').text();
				} else {
					scenario.title =  'As a '     + $(this).find('role').text() + ', ' +
									          'I want '   + $(this).find('action').text() + ' ' +
									          'so that '  + $(this).find('value').text();
				}
								
				session.items.push(scenario)

				$('narrative', this).each( function(){
					var narrative = new StoryQItem();

          narrative.type = 'narrative';
          narrative.tests = $(this).find('*').size();
					session.result = $(this).processResult()
					narrative.items = []
					
					scenario.items.push(narrative)
					
					$('*', this).each(function(){
						var item = new StoryQItem();
						
						item.type = 'test'
						item.title = this.nodeName + ' ' + $(this).text()
						item.result = $(this).processResult(':self')						

						narrative.items.push(item)
					})
				})

			})
          
            result.items.push(session);
        });        
		
	}
}
