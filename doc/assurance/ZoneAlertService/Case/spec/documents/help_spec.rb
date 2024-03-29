require 'spec_helper.rb'

describe 'help.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/help/help.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Safety-Case Help'
    end
  end
end