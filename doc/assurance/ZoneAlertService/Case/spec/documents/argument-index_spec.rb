require 'spec_helper.rb'

describe 'argument-index.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/documents/argument-index.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Argument Index'
    end
  end
end