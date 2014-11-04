ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "southerAQTM6JZeZ",
      "user"     => "be9c0a03cb9d49",
      "password" => "73b41dff",
      "host"     => "us-cdbr-azure-northcentral-a.cleardb.com",
      "socket"   => "",
      "table_prefix"   => "wp_",
      "clean_entities" => true,
      "comments"       => false,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "status"         => ["publish","draft"]
    })'