json.set! user.id do
  json.id user.id
  json.username user.username
  json.email user.email
  json.avatar asset_path(user.avatar)
end
