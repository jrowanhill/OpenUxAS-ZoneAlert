require 'spec_helper.rb'

describe 'view.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/help/view.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Argument Viewer Help — View Options'
    end
  end
end