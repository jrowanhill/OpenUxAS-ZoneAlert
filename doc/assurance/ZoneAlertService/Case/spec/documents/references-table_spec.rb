require 'spec_helper.rb'

describe 'references-table.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/documents/references-table.html' }

    it 'has the correct title' do
      expect(page.title).to include 'References Table'
    end
  end
end