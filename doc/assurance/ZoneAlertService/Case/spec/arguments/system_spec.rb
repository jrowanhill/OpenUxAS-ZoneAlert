require 'spec_helper.rb'

describe 'system.html' do
  it_behaves_like 'an argument' do
    let(:path) { 'assets/arguments/system.html' }

    it 'has the correct title' do
      expect(page.title).to eq 'System'
    end
  end
end