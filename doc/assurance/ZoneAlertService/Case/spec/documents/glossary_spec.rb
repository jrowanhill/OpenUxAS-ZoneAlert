require 'spec_helper.rb'

describe 'glossary.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/references/glossary.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Glossary'
    end
  end
end