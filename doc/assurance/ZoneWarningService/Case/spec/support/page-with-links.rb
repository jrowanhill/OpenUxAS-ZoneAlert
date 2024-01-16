require 'spec_helper.rb'

##
# Common behaviors to a page that has JavaScripts. The page should already be
# loaded before these examples are asserted through `it_behaves_like`
shared_examples 'a page with valid links' do
  it 'has no dead or broken links' do
    all('a').collect do |anchor|
      address = anchor[:href] || anchor['xlink:href']
      # Strip out trailing anchor refs
      address.sub(/#.*/,'') if address
      # address can be empty if address was initially "#sc", for example
      address if address && address.match(/html?$/)
    end.uniq.compact.each do |address|
      if address.downcase.include?('http')
        visit address
        expect(page.current_url).to include address
      else
        visit "/#{File.dirname(path)}/#{address}"
        expect(page.current_url).to include address.gsub('../','')
      end
    end
  end
end
