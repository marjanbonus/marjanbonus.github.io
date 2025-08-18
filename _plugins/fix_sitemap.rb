Jekyll::Hooks.register :site, :post_write do |site|
  sitemap_path = File.join(site.dest, "sitemap.xml")
  if File.exist?(sitemap_path)
    text = File.read(sitemap_path)
    # Remove both xmlns:xsi and xsi:schemaLocation
    text.gsub!(/\s+xmlns:xsi="[^"]+"/, "")
    text.gsub!(/\s+xsi:schemaLocation="[^"]+"/, "")
    File.write(sitemap_path, text)
  end
end