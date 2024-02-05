require 'spec_helper.rb'

describe 'references/example-reference' do
  it 'is in the right place' do
    expect(File.exist? 'assets/references/example.pdf').to be true
  end
  
  it 'is in the nav menu' do
    visit '/assets/documents/attachments-table.html' 
    
    expect(page.body).to include 'Example Reference'
  end
end
