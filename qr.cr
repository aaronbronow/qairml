# TODO organize driver to require this lib
# require "qairml"

require "yaml"

# TODO move this into src/qairml/models
# class Survey
#   YAML.mapping(
#     name: String,
#     questions: Array(Hash(String, Hash(String, String)))
#   )
# end

class Survey
  YAML.mapping(
    name: String,
    questions: Array(Question)
  )
end

class QuestionAttributes
  YAML.mapping(
    text: String,
    answers: Array(String)
  )
end

class Question < Hash(String, QuestionAttributes)
  def text
   self.first_value.text
  end
  def answers
   self.first_value.answers
  end
end

first = File.open("surveys#{File::SEPARATOR}first.qairml")

data = Survey.from_yaml(first)

# puts "Name: #{data.name}"
# puts "Question keys: #{data.questions.map { |q| q.first_key }}"
data.questions.each_with_index do |q, i|
  puts <<-END
    Question #{i}:
     Canonical: #{q.first_key}
          Text: #{q.text}
       Answers: #{q.answers}
    END
end
