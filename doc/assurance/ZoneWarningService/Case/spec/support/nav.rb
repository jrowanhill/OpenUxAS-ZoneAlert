require 'spec_helper.rb'

##
# General navigation examples. These are meant to be loaded with 
# `include_examples`, rather than `it_behaves_like`. There should already be a
# `before` block specifying `Capybara.reset_sessions!` and visiting the correct
# page.
shared_examples 'general nav' do
  it 'has nav' do
    expect(page).to have_selector 'nav > *'
  end
  
  it 'has correct nav positioning' do
    skip("nav positioning")
    expect([-1,0]).to include page.evaluate_script('$("nav > ul > li:last-child").offset().left')
  end
  
  it 'reveals the nav menu on mouseover' do
    find('nav').hover
    expect([-1,0]).to include page.evaluate_script('$("nav > ul").offset().left')
  end

  it 'has a working Intro link' do
    find('nav').hover
    find('nav').click_link('Intro')
    expect(page).to have_title('Introduction')
  end
  
  it 'has a working Index link' do
    find('nav').hover
    find('nav').click_link('Index')
    expect(page).to have_title('Argument Index')
  end

  it 'has a working Arguments link' do
    find('nav').hover
    find('nav').click_link('Arguments')
    expect(page).to have_title('Arguments Table')
  end

  it 'has a working Documents link' do
    find('nav').hover
    find('nav').click_link('Attachments')
    expect(page).to have_title('Attachments Table')
  end
  
  it 'has a working Help link' do
    find('nav').hover
    find('nav').click_link('Help')
    expect(page).to have_title('Safety-Case Help')
  end  
  
  context 'arguments menu' do
    let(:menu_item)   { '#arguments-menu' }
    let(:menu_proper) { '#arguments-menu > table' }
  
    it_behaves_like 'a menu'
  end

  context 'attachments menu' do
    let(:menu_item)   { '#attachments-menu' }
    let(:menu_proper) { '#attachments-menu > table' }
  
    it_behaves_like 'a menu'
  end
    
  context 'references menu' do
    let(:menu_item)   { '#references-menu' }
    let(:menu_proper) { '#references-menu > table' }
  
    it_behaves_like 'a menu'
  end
    
  context 'help menu' do
    let(:menu_item)   { '#help-menu' }
    let(:menu_proper) { '#help-menu > table' }
  
    it_behaves_like 'a menu'
  end

  it 'has a working Safety-Case Technology link' do
    find('nav').hover
    find('#help-menu').hover
    find('#help-menu').click_link('Safety-Case Technology')
    expect(page).to have_title('Safety-Case Technology')       
  end

  it 'has a working Development Terminology link' do
    find('nav').hover
    find('#help-menu').hover
    find('#help-menu').click_link('Development Terminology')
    expect(page).to have_title('Development Terminology')       
  end
end
