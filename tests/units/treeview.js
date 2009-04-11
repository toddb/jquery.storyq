module("Treeview")

test('Setup tree', function(){
  
  stop()
  
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
			start()
   	}
  })
  
})

test('Should display the tree', function(){
  
	equals($("#tree").css("display"), 'block')
	equals($('ul#tree li>span').size(), 26, "Results in the list")
	equals($('span.result').size(), 23, "Results with a passed, pending, failed icon only")
	equals($('span.result-long').size(), 3, "Results with folder or project and status")
	
	equals($('ul#tree > li').size(), 1, "A the top of the list")
	equals($('ul#tree > li > ul > li').size(), 2, "Stories in the list")
	equals($('ul#tree > li > ul > li > ul > li').size(), 4, "Narratives in the list")
	equals($('ul#tree > li > ul > li > ul > li > ul > li').size(), 19, "Tests in the list")

	equals($('span.passed').size(), 5, "Results with a passed only")
	equals($('span.pending').size(), 13, "Results with a pending only")
	equals($('span.failed').size(), 5, "Results with a failed only")

	equals($('span.failedproject').size(), 1, "Results with a failed project only")
	equals($('span.failedscenario').size(), 2, "Results with a failed scenario only")
	
})

test('Should display counts correctly on lines', function(){
  equals($('ul#tree > li > span>span.count').size(), 1, "Count on the story")
  equals($('ul#tree > li > ul > li > span>span.count').size(), 2, "Count on the scenario")
  equals($('ul#tree > li > ul > li > ul > li > span>span.count').size(), 4, "Count on the narrative")
})

test('Should not display counts on the test lines', function(){
  equals($('ul#tree > li > ul > li > ul > li > ul > li > span>span.count').size(), 0, "Count on the tests")  
})

test('Clean up', function(){
  $('#tree').remove()
})
  