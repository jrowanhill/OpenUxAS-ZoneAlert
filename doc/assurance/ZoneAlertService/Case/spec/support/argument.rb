require 'spec_helper.rb'

shared_examples 'an argument' do
  # Don't use a let(:page) here; that creates infinite recursion, since Capybara
  # tries to set a local named page.
  before(:each) do
    Capybara.reset_sessions!
    visit '/' + path
  end

  let(:viewer_svg) do
    begin
      Nokogiri::XML(page.evaluate_script('$("#viewer")[0].innerHTML'))
    rescue
      nil
    end
  end
  
  let(:navigator_svg) do
    begin
      Nokogiri::XML(page.evaluate_script('$("#navigator")[0].innerHTML'))
    rescue
      nil
    end
  end
  
  it_behaves_like 'a scripted page'
  it_behaves_like 'a page with valid links'

  it 'does not show comments' do
    expect(page).to_not have_selector 'path.comment'
  end
  
  it 'renders viewer svg' do
    expect(viewer_svg).not_to be_nil
    expect(viewer_svg.css('rect.goal').size).to be >= 1
  end
  
  it 'renders navigator svg' do
    expect(navigator_svg).not_to be_nil
    expect(navigator_svg.css('rect.goal').size).to be >= 1
  end
  
  it 'shows numbering' do
    expect(viewer_svg).not_to be_nil
    
    unnumbered = false
    viewer_svg.css('tspan.name').each do |element|
      unnumbered ||= !element.inner_html.match(/\d+\.\d+: /)
    end
    
    expect(unnumbered).to be false
  end
  
  # TODO: rebuild this to check tspan.gsnid à la the show numbering
  it 'does not show "Not Set"' do
    expect(page).to_not have_content 'Not Set'
  end

  context 'with nav' do
    include_examples 'general nav'
  
    # Don't know how to test the reset link.

    it 'has a working Overview toggle' do
      initially_visible = page.evaluate_script('$("#overview").is(":visible")')
    
      find('nav').hover
      find('#view-menu').hover
      find('#overview-menu').click
      
      if initially_visible
        expect(page.evaluate_script('$("#overview").is(":visible")')).to be false
      else
        expect(page.evaluate_script('$("#overview").is(":visible")')).to be true
      end

      find('#overview-menu').click
      
      if initially_visible
        expect(page.evaluate_script('$("#overview").is(":visible")')).to be true
      else
        expect(page.evaluate_script('$("#overview").is(":visible")')).to be false
      end
    end
    
    it 'has a working Navigator toggle' do
      find('nav').hover
      find('#view-menu').hover
      find('#navigator-menu').click
      expect(page.evaluate_script('$("#navigator").is(":visible")')).to be false
      find('#navigator-menu').click
      expect(page.evaluate_script('$("#navigator").is(":visible")')).to be true
    end
    
    context 'focus menu' do
      let(:menu_item)   { '#focus-menu' }
      let(:menu_proper) { '#focus-menu > ul'  }
      
      it_behaves_like 'a menu'
    end

    context 'view menu' do
      let(:menu_item)   { '#view-menu' }
      let(:menu_proper) { '#view-menu > ul'  }
      
      it_behaves_like 'a menu'
    end
    
    # Focus seems tricky, since it's all visual.
    
    it 'has a working Help View link' do
      find('nav').hover
      find('#help-menu').hover
      find('#help-menu').click_link('View Controls')
      expect(page.title).to include 'Argument Viewer Help — View Options'
    end

    it 'has a working Help Focus link' do
      find('nav').hover
      find('#help-menu').hover
      find('#help-menu').click_link('Focus Controls')
      expect(page.title).to include 'Argument Viewer Help — Focus Options'
    end
  end
end
