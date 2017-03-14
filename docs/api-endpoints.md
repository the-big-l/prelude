# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
- `POST /api/users`

### User follows

- `GET /api/user_follows`
- `POST /api/user_follows`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Playlists

- `GET /api/playlists`
  - Playlists index
- `POST /api/playlists`
- `GET /api/playlists/:id`
 - includes song list
- `DELETE /api/playlists/:id`

### Playlist follows

- `GET /api/playlist_follows`
- `POST /api/playlist_follows`
- `DELETE /api/playlist_follows/:id`

### Songs

- `GET /api/songs`


### Albums

- `GET /api/albums`

### Artists

- `GET /api/artists`
