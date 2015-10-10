json.array!(@tables) do |table|
  json.extract! table, :id, :restaurant_id, :status, :capacity
  json.url table_url(table, format: :json)
end
