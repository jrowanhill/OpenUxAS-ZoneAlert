require 'spec_helper.rb'

describe 'attachments-table.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/documents/attachments-table.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Attachments Table'
    end
  end
end