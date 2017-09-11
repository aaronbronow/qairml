require "yaml"

yaml = <<-END
  name: "foo"
  children:
  - name: "bar"
  - name: "baz"
  END

class Foo
  YAML.mapping(
    name: String,
    children: Array(Hash(String,String))
  )
end

foo = Foo.from_yaml(yaml)

puts foo.to_yaml