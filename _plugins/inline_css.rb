module Jekyll
  class InlineCssTag < Liquid::Tag
    def initialize(tag_name, path_to_main_css, tokens)
      super
      full_path_to_main_css = File.expand_path(path_to_main_css.gsub("\"", '').strip)
      @main_css_raw = File.read(full_path_to_main_css)
    end

    def render(context)
      source = '<style type="text/css" media="screen">'
      source += @main_css_raw
      source += '</style>'
    end
  end
end

Liquid::Template.register_tag('inline_css', Jekyll::InlineCssTag)