# Prelude

[Prelude](http://prelude-music.herokuapp.com/) is a single page, music application built on a React/Redux frontend and a Ruby on Rails backend. Inspired by Spotify, Prelude allows users to create/edit playlists and browse for new music all while continuously playing music while navigating the site.

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

- Ruby
- Rails
- jBuilder
- React.js
- Redux
- JQuery
- SASS
- AWS S3
- jQuery

### Rails

  The Prelude backend employs Ruby on Rails to build a RESTful api in order to uniformly integrate with the frontend. Jbuilder is used to format JSON objects in order to respond to frontend AJAX requests.

  Sample playlist JSON object
  ```javascript
  {
    name: "Newest favs",
    description: "mostly pop",
    author: "guest",
    following: true,
    id: 3176,
    members: [
      {
        member_id: 34416,
        playlist_id: 3176,
        song: {
          album: "Views",
          album_art_url: "<path>",
          artist: "Drake",
          id: 3530,
          src: "<path>",
          title: "Views"
        }
      },
      {
        member_id: 34420
        playlist_id: 3176
        song: {
          album: "Divide"
          album_art_url: "<path>"
          artist: "Ed Sheeran"
          id: 3535
          src: "<path>"
          title: "Shape Of You"
        }
      }
    ],
    errors: []
  }
  ```

### React/Redux
  React and Redux were used on the frontend to create modular components with easy to use apis and a single source of truth for the apps current state.

  A MediaCard can be used to display users, playlists, or artists.

  User cards
  ![user_card](/docs/images/users.png)

  Playlist cards
  ![playlist_card](/docs/images/playlists.png)

  ```javascript
  render() {
    const {
      id,
      title,
      subtitle,
      mediaInfo,
      footer,
      showPath} = this.props;

    return (
      <Link to={showPath}>
        <div className='media-card'>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p className='footer'>{mediaInfo}</p>
          <p className='footer'>{footer}</p>
        </div>
      </Link>
    );
  }
  ```
  The playlist form is used for both creating and updating playlists

  On creation a create function is passed in, along with initial state and appropiate text.
  ```javascript
  const mapStateToProps = ({currentPlaylist}, {closeFormModal, isFormShown, isOpen}) => ({
    closeFormModal,
    isFormShown,
    isOpen,
    titleText: 'Create Playlist',
    submitText: 'Create',
    initialState: {name: '', description: '', id: null},
    errors: currentPlaylist.errors
  });

  const mapDispatchToProps = dispatch => ({
    submitFunction: playlist => dispatch(createPlaylist(playlist))
  });
  ```

  On update the update action is dispatched
  ```javascript
  const mapStateToProps = ({currentPlaylist}, {closeFormModal, isFormShown, isOpen}) => ({
    closeFormModal,
    isFormShown,
    isOpen,
    titleText: 'Update Playlist',
    submitText: 'Update',
    initialState: {
      name: currentPlaylist.name,
      description: currentPlaylist.description,
      id: currentPlaylist.id
    },
    errors: currentPlaylist.errors
  });

  const mapDispatchToProps = dispatch => ({
    submitFunction: playlist => dispatch(updatePlaylist(playlist))
  });
  ```

### SASS
Thoughtful class names allowed reusable styling. Styling was organized by CSS nesting rules which is supported by the use of SASS.

  ```css
  .cc-header {
    padding-left: 32px;
    color: $text-light-grey;

    ul.cc-tabs {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      li {
        border-bottom: 3px solid $light-green;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 14px;
        padding: 10px;

        &.select {
          color: $text-light-white;
        }
      }
    }
  }

  .card-collection {
    display: flex;
    flex-wrap: wrap;
    padding: 16px;

    .mc-wrapper {
      width: 155px;
      background: $background-lighter-grey;
      margin: 12px;

      &:hover {
        background: $background-lightest-grey;
      }
    }

    .media-card {
      padding: 16px;
      h2 {
        height: 72px;
        font-size: 28px;
        color: $text-light-grey;
        font-weight: bold;

      }

      h3 {
        height: 38px;
        color: $text-light-white;
        margin-bottom: 16px;

      }

      p.footer {
        color: $text-light-grey;
        font-size:  14px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

```

## Future

* [ ] User follows
* [ ] Image uploads for profiles/playlists
* [ ] Artist/Album browse pages
* [ ] Live updates
* [ ] Messages Search
