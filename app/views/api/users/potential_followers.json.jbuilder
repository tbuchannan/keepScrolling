@potentials.each do |user|
  json.partial! "api/users/potentials", user: user
end
