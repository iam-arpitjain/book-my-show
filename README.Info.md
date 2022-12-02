
# Book My Show clone

This project is the frontend of website Book My Show created using React.js, 
APIs are also used for importing movies from the 'tmdb' database.

## API Reference

#### Get all items


```http
  /movie/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. It returns the moviepage|




## Pages
Contains the 3 pages : 
HomePage, MoviePage and PlayPage

## Layout

Two layouts are created. 
(1) Default layout for HomePage and PlayPage
(2) Movie layout for MoviePage
## Context

Created movie context using ContextAPI to get access to movies anywhere in the whole application
##  Components
### Navbar
Created two Navbar components. 
(1) Navbar for HomePage and PlayPage.
(2) MovieNavbar for MoviePage

### Hero Carousel
Created the sliding carousel for the Hero Section.
Here, the movies are provided by 'tmdb'.

### Poster
Created the Poster of Movies which we got from 'tmdb'.

### Poster Slider
Created the Poster slider to slide and map throug each movie 
we got from the 'tmdb' database.

### Movie Hero 
Created the Hero Section of '/movie/:id' page showing the movie Image
along with some of the Info

### Cast
Created Cast component to show the cast of the movie in a format


### Entertainment 
Created Entertainment Card Slider to show different fun activities.

### Payment Model 
We used headless@UI to create the payment modal and used razorpay API for the transaction

### Play Filter
We used headless@UI to create filter section for the PlayPage

## Authors

- [@iam-arpitjain](https://github.com/iam-arpitjain)

