require 'spec_helper.rb'

describe 'devel-terms.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/help/devel-terms.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Development Terminology'
    end
  end
end