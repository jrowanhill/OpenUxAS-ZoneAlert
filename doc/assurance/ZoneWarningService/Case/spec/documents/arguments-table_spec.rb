require 'spec_helper.rb'

describe 'arguments-table.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/documents/arguments-table.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Arguments Table'
    end
  end
end