json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :address, :email, :phone, :avgwaittime
  json.url restaurant_url(restaurant, format: :json)
end
