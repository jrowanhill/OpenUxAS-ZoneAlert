# ---------------------------------------------------------------------------- #
# spec-helper.rb
# ---------------------------------------------------------------------------- #

# Set this to true if you want to test a deliverable, rather than a test
TEST_DELIVERABLE = false

# Set this to the name of the build to test
BUILD_NAME = 'for-spec'
BUILD_DIRECTORY = (TEST_DELIVERABLE ? 'deliverables/' : 'tests/') << BUILD_NAME

DOCUMENTS = 'assets/documents'
ARGUMENTS = 'assets/arguments'

require 'capybara'
require 'capybara/rspec'
require 'selenium/webdriver'

# This would be the one to use except it can't be
# used within a Docker container as root
#Capybara.default_driver = :selenium_chrome_headless
#Capybara.javascript_driver = :selenium_chrome_headless

# The file path has to point to the generated test cases
# and be a valid URL
assurance_case_top = File.expand_path(__dir__ + '/..')
app_host_url = 'file://' + assurance_case_top + '/'
Capybara.app_host = app_host_url << BUILD_DIRECTORY

Capybara.register_driver :selenium_chrome_headless_docker_friendly do |app|
  Capybara::Selenium::Driver.load_selenium
  browser_options = ::Selenium::WebDriver::Chrome::Options.new
  browser_options.args << '--headless'
  browser_options.args << '--disable-gpu'
  # Sandbox cannot be used inside unprivileged Docker container
  browser_options.args << '--no-sandbox'
  Capybara::Selenium::Driver.new(app, browser: :chrome, options: browser_options)
end

Capybara.default_driver = :selenium_chrome_headless_docker_friendly
Capybara.javascript_driver = :selenium_chrome_headless_docker_friendly
Capybara.raise_server_errors = true

RSpec.configure do |config|
  config.include(Capybara::DSL)
  
  config.color = true
  config.order = :rand
  config.formatter = :documentation 
end

# Load in shared examples
Dir["./spec/support/**/*.rb"].each {|f| require f}

# Tell the user what is under test
puts "Testing #{BUILD_DIRECTORY}"
