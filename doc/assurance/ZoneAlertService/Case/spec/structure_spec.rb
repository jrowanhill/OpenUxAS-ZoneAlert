require 'spec_helper.rb'

describe 'build structure' do
  before(:each) do
    @old_dir = Dir.pwd
    Dir.chdir BUILD_DIRECTORY
  end

  def expect_directory(name)
    expect(File.exist? name).to be true
    expect(File.directory? name).to be true
  end
  
  def expect_directory_with_index(name)
    expect_directory(name)
    expect(File.exist? "#{name}/index.html").to be true
  end

  it 'has assets' do
    expect_directory 'assets'
  end
  
  it 'has case.html' do
    expect(File.exist? 'case.html').to be true
  end
  
  [
    'arguments',
    'documents',
    'evidence',
    'figures',
    'help',
    'layout',
    'libraries',
    'references',
    'scripts'
  ].each do |directory|
    it "has assets/#{directory}" do
      expect_directory_with_index("assets/#{directory}")
   end
  end
  
  after(:each) do
    Dir.chdir @old_dir
  end
end
