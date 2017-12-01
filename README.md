This application allows a user to create a list of favourite albums.

It uses react and redux for structure of the application. you can see the store structure in [Google Chrome Devtool](https://github.com/gaearon/redux-devtools).

It is tiny (140kB) and fully responsive.

### Installation

```
npm install
```

### Run the project

```
npm start
```

### Structure

All of the useful codes are in the "src" folder. as you see there are separate folders to hold basic structure of the application. as we use redux, we have two folders for action creators and reducers and there is a file named store.js that has redux store configurations. because of the test I open the redux devtools for anyone who like to know how it works!

In the assets folder I use styles directly from the component because this method have a nice performance to render the styles on the page. I used [Remo Color Theme](https://color.adobe.com/Retro-color-theme-10216393/) to get a nice color harmony.

Two folders components and containers are react components that I made them for the application. I used functional components for the containers.

So in the below we want to explain critical files and folders:

### Actions

As you can see there are two actions in my application, one of them is for favourite functionals like add to favorites or remove from favourites list.
In addFavorite function I checked the current status of the store and I putted the item that user added, into the favorites array.
And in the removeFavourite I just send the ID of the entity and then remove it from array in my redux reducer.

In the searchInfo action, First, I get the request title and then I make the search item and send the request to the api with a promise. If it resolved, I put the data into the store and if it goes to error I make an error text and exchange error with the data.

### Containers

There are two containers, one of them named AppContainer that hold the whole application routes, if we want to add a page we can add a route here easily.
HomeContainer is the base of my application. It holds all of the components that you see in components folder.
This file uses a functional component to get the props from an input argument. HomeContainer has a directly access to the store by mapDispatchToProps so it can change the store.
I use mapDispatchToProps for the update of the each section of the store, like search items and favourite items.
AS you see there are four different components in this class. I used FavouritesListPopup component to show the items that a user added to his favourite list.

### Components

* TextInput: The basic component in this application is text input to receive an argument from user and then fetch the data base on that. When you click on the green search button or press enter, you can send the information to the api.
* FavoriteButton: It holds the number of favourite items. after a user click on an item, the animation will be play and then user can see the number of his favourite list. if the favourite items become bigger than 0, then you can click on this button to see the popup tha contains favourite list.
* FavoriteList: It's the container for favourite items that you can see it in the popup.
* FavoriteListPopup: This is the popup for the favourite items that holds a SelectBox for showing the name of the singers and the favourites list in the below. I have a field in my store named favoritePopupShow to control the showing and hiding the popup.
* SelectBox: This component includes the singer's names for the filtering favourite list by name. I'v used lodash package to make distinct array of singer because it's very awesome package.
* SearchItemPlaceholder: When the ajax call is fetching the data, this component will be show. It has a nice smooth animation of 5 boxes to show to the user before he can see the results. Because seeing a white page isn't good for a user.
* SearchList: This component controls the actions when api is fetching and after fetching. it shows placeholder when the api is fetching, shows data or show a related message.
* SearchItem: All of the items (search item or favourite item) render with this component. It checks if the item already exists in favourite list or not. And it has to function for adding or removing the item from favourite list.
