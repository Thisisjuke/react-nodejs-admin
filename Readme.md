# How to start ?

```shell
cp .env.dist .env
make install
make up
```

# Whats inside ?

## Backend : Express with Bookshelfjs

```
url : http://localhost:4000/api
```

### Available Routes :

You can find all the available routes in `back/routes`

Here are few routes you can copy and paste to test :
<br>
`http//localhost:4000/api/users`
<br>
`http//localhost:4000/api/users/100`
<br>
`http//localhost:4000/api/users/100/messages`
<br>
`http//localhost:4000/api/users/100/media`
<br>
`http://localhost:4000/api/messages/12`
<br>
`http//localhost:4000/api/count/media`
<br>
`http//localhost:4000/api/count/messages`
<br>
`http//localhost:4000/api/count/users`
<br>
`http//localhost:4000/api/count/cities`
<br>
`http//localhost:4000/api/count/countries`
<br>
`http//localhost:4000/api/count/countries`
<br>
`http//localhost:4000/api/users/100/disable`
<br>
`http//localhost:4000/api/users/100/enable`
<br>
`http//localhost:4000/api/count/countries`
<br>
`http//localhost:4000/api/country/Benin/cities`
<br>
`http//localhost:4000/api/country/Democratic%20People's%20Republic%20of%20Korea/cities`
<br>
`http//localhost:4000/api/count/countries`


## Frontend : React

```
url : http://localhost:4000/api
```

### Available features : 

#### Homepage
- See total users
- See total Messages
- See Total Media
- See total cities and country
#### Users Page
- See all users in a tab
- Filter Users by each property
- Global Search
#### Profile Page 
- Show profile details (click on "show profile" or `http://localhost:3000/profile/3`)
- See Profile messages sent
- See profile messages received
- Enable and disable account
- List medias (no preview because S3 bucket access is blocked)
#### Stats Page
- See all countries
- See all Cities
- Filter Cities by Country
#### Global
- See my handmade interface with tailwindcss
- Babel configuration
- React Router + React Table + Component splitting 

## Thanks for your time!