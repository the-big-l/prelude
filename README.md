# Prelude


[prelude]: [http://prelude-music.herokuapp.com/]

[Prelude][prelude] is a single page, music application built on a React/Redux frontend and a Ruby on Rails backend. Inspired by Spotify, Prelude allows users to create/edit playlists and browse for new music all while continuously playing music while navigating the site.

## Features

- Robust authentication
- Create, update, and delete playlists
- Browse for music and add to playlists
- View other users playlists and add them to your own

### Authentication

User's passwords are stored in the database as a salted hash using BCrypt. Salting a password prepends a random string the password so even users with duplicate passwords will not have the same hash stored in the backend.

![signup_flow](/docs/images/signup_flow.png)
![signup_form](/docs/images/signup_form.png)

### Playlist CRUD

Create playlists instantly from any page no matter where it was you were inspired. Easily update existing playlists to adapt to your evolving tastes. Music can be added to playlists from the browse page or directly from the current playlist.


![playlist_create](/docs/images/playlist_create.gif)
![playlist_update](/docs/images/playlist_update.gif)
![add_playlist](/docs/images/add_playlist.gif)



### Follow Playlists

Browse through other user's playlist and add them to your own. Conveniently access all the playlists you're following by scrolling through the main navigation bar. Follow and unfollow playlists from the view page.
![follow_playlist](/docs/images/follow_playlist.gif)


## Implementation

Prelude utilizes the following technologies:

- Ruby on Rails
- jBuilder
- React.js
- Redux
- JQuery
- SASS
- AWS S3
- jQuery



## Future

* [ ] User follows
* [ ] Image uploads for profiles/playlists
* [ ] Artist/Album browse pages
* [ ] Live updates
* [ ] Messages Search
