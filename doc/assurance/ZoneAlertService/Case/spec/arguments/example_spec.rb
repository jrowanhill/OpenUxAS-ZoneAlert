require 'spec_helper.rb'

describe 'example.html' do
  it_behaves_like 'an argument' do
    let(:path) { 'assets/arguments/example.html' }

    it 'has the correct title' do
      expect(page.title).to eq 'GSN Example'
    end
  end
end