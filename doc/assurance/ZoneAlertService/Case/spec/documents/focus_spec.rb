require 'spec_helper.rb'

describe 'focus.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/help/focus.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Argument Viewer Help — Focus Options'
    end
  end
end