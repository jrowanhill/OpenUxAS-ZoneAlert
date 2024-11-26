require 'spec_helper.rb'

describe 'case.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/documents/case.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Introduction'
    end
  end
end