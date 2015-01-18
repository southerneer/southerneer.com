Problem: I wanted to create a link that posted information to a Rails create method. I wanted to use the link helper for modularity. I wanted to append data to the POST dynamically in ajax:beforeSend. For some reason this information wasn't passing through correctly to the backend
Solution: I had to explicitly set the "Content-Type" request header to use "application/x-www-form-urlencoded"...for some reason adding data to the request flipped this to "text/plain" even though I was sending encoded data. Weird.

Files: see friends.js and friends/show.html.erb