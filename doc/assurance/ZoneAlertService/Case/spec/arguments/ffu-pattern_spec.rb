require 'spec_helper.rb'

describe 'ffu-pattern.html' do
  it_behaves_like 'an argument' do
    let(:path) { 'assets/arguments/ffu-pattern.html' }

    it 'has the correct title' do
      expect(page.title).to eq 'Pattern: Fit for Use'
    end
  end
end