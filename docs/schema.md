# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## user_follows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_link_one   | integer   | not null,  foreign key (references users), unique with link two
user_link_two   | integer   | not null,  foreign key (references users), unique with link one

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## playlist_follows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null,  foreign key (references users), indexed
playlist_id     | integer   | not null,  foreign key (references users), indexed

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | not null, foreign key (references playlists), indexed
spotify_id  | string    | not null

## playlist_members
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | not null, foreign key (references playlists), indexed
song_id     | integer   | not null, foreign key (references songs), indexed

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
spotify_id  | string    | not null

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
spotify_id  | string    | not null
