# Rakefile for jquery plugin gen        -*- ruby -*-
require 'rubygems' unless ENV['NO_RUBYGEMS']

require 'jquery_plugin_gen/tasks'

JQUERY_PLUGIN  = 'jquery.storyq'
PLUGIN_VERSION = '0.3.0'

# Load your custom tasks from tasks folder
Dir.glob("tasks/*.rake").each{ |t| import t rescue nil }

# Alternatively, create any new tasks here
# task :default => [:task, :dependencies] do
#   yours
# end