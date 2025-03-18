require 'spec_helper.rb'

describe 'safety-case.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/help/safety-case.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Safety-Case Technology'
    end
  end
end