# Get the followees (people that this user follows)
json.set! follow.followee_id do
  json.username follow.followee.username
  json.email follow.followee.email
end
