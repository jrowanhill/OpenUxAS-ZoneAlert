require 'spec_helper.rb'

##
# Examples for a menu. These are meant to be loaded with `it_behaves_like`. You
# need to set up two local variables: :menu_proper - a CSS selector for the
# menu you expect to appear and disappear, and :menu_item - a CSS selector for
# the item that, when the mouse is over it, will cause the menu to appear.
shared_examples 'a menu' do
  it 'hides the menu' do
    find('nav').hover
    expect(page.evaluate_script('$("' + menu_proper + '").offset().left')).to be < 0
  end
  
  it 'shows the menu' do
    find('nav').hover
    find(menu_item).hover
    expect(page.evaluate_script('$("' + menu_proper + '").offset().left')).to be >= 0
  end  
end
