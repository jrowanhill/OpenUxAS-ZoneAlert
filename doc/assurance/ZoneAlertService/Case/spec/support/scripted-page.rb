require 'spec_helper.rb'

##
# Common behaviors to a page that has JavaScripts. The page should already be
# loaded before these examples are asserted through `it_behaves_like`
shared_examples 'a scripted page' do
  it 'does not report any errors' do
    skip("skip error_messages/undefined")
    expect(page.driver.error_messages.size).to eq(0)
  end

  it 'successfully loads jQuery' do
    expect(page.evaluate_script('typeof(window.jQuery) != "undefined"')).to be true
  end
end
