require 'spec_helper.rb'

describe 'subsystem.html' do
  it_behaves_like 'an argument' do
    let(:path) { 'assets/arguments/subsystem.html' }

    it 'has the correct title' do
      expect(page.title).to eq 'Subsystem'
    end
  end
end