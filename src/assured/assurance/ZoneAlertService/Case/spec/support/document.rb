require 'spec_helper.rb'

shared_examples 'a document' do
  # Don't use a let(:page) here; that creates infinite recursion, since Capybara
  # tries to set a local named page.
  before(:each) do
    Capybara.reset_sessions!
    visit '/' + path
  end

  it_behaves_like 'a scripted page'
  it_behaves_like 'a page with valid links'

  it 'has content' do
    expect(page).to have_selector 'section#content > *'
  end
  
  context 'with nav' do
    include_examples 'general nav'
  end
end