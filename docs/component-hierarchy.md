## Component Hierarchy

### LoginScreen
**LoginMethod**

**LoginForm**

**SignUpForm**

**LoginFeatures**

### App
**MainHeader**

**NavbarContainer**
 - BrowserIndex
  * BroswerHeader
  * BroswerIndexItem
 - PlaylistIndex
  * PlaylistHeader
  * PlaylistIndexItem
 - CreatePlaylistForm

**AudioPlayer**

**MainContent**
 - AddToPlaylistDropdown
 - ArtistScreen
  * AlbumIndex
    + SongList
 - CardCollection
  * CardIndex
    + Card
 - SongList
  * PlayButton
  * SongListIndex
  * SongListIndexHeader
  * SongListIndexItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/login" | "LoginMethod" |
| "/login/sign-in" | "LoginForm" |
| "/login/sign-up" | "SignUpForm" |
| "/app" | "CardCollection" |
| "/app/playlists" | "CardCollection" |
| "/app/playlist/:playlistId" | "SongList" |
| "/app/artists" | "CardCollection" |
| "/app/artists/:artistId" | "ArtistScreen" |
| "/app/albums" | "CardCollection" |
| "/app/album/:albumId" | "SongList" |
