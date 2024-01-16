require 'spec_helper.rb'

describe 'acronyms.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/references/acronyms.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Acronyms'
    end
  end
end