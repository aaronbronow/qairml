require "http/server"
require "uri"

config = {
  host: "0.0.0.0",
  port: 8080,
  url: "https://goodworldsolutions.atlassian.net/browse/",
  message: "pong",
  plural_message: "Are these the links you're looking for?",
  keys: "MLL,LIQ,LP"
}

server = HTTP::Server.new(config[:host], config[:port]) do |context|
  output = ""
  message = config[:message]
  context.response.content_type = "text/plain"
  output = message
  context.response.print output
end

puts "Branch: #{`git rev-parse --abbrev-ref HEAD`}"
puts "Listening on #{config[:host]}:#{config[:port]}"
server.listen