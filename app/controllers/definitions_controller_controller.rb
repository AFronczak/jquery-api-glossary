class DefinitionsControllerController < ApplicationController
  def search
    @term = params[:term]

    @term_definitions_json = HTTParty.get("http://api.wordnik.com:80/v4/word.json/#{URI::escape(@term)}/definitions?limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")

    @definitions = @term_definitions_json.map {|definitions| definitions["text"]}
  end
end
