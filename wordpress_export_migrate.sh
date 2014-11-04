ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordpressDotCom.run({
      "source" => "/Users/kirkham/Downloads/southerneer.wordpress.2014-11-04.xml",
      "no_fetch_images" => false,
      "assets_folder" => "assets"
    })'