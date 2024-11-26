require 'spec_helper.rb'

describe 'hazards.html' do
  it_behaves_like 'a document' do
    let(:path) { 'assets/documents/hazards.html' }

    it 'has the correct title' do
      expect(page.title).to include 'Hazards'
    end
  end
end