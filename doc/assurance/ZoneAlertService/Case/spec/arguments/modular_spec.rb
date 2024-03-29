require 'spec_helper.rb'

describe 'modular.html' do
  it_behaves_like 'an argument' do
    let(:path) { 'assets/arguments/modular.html' }

    it 'has the correct title' do
      expect(page.title).to eq 'Example Modularization'
    end
  end
end