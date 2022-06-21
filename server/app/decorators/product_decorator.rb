class ProductDecorator < Draper::Decorator
    delegate_all

    def as_json *args
      {
       id: id,
       name: name,
       price: price,
       description: description
      }
    end
end