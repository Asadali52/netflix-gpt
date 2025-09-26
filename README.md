# Netflix GPT

- create react app
- configure tailwind css
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production 
- Create Sign Up user Account 
- implement sign in user API
- created our redux store with user slice
- implement signout 
- Update profile
- BugFix: Sign up user displayName and profile picture update 
- BugFix: handle protected route
- Unsubscribed to the onAuthStateChanged callback
- Added all hard coded values to the constants.js file
- Register TMDB API and get access token
- Get data from TMDB now playing movies list
- custom hook for useNowPlayingMoviesHook
- create movie slice
- Update store with addTrailerVideo 
- Planing for main container and secondary container
- fetch date for trailer video
- update store with Trailer video data
- embeded video youtube and make it autoplay and mute and hide info
- build video section with content and video (main container)
- build SecondaryContainer
- build movie lsit
- build movie card
- TMDB img CDN URL
- made the browse page UI
- Create custom hook for Movies
- add gpt option in header
- gpt search bar
- added multi-language feature in gpt section
- integrate gpt APIs (get open AI key)
- Fetched gpt movies sugggestion from TMDB
- Create gpt slice added data
- reused movies list component to make movies suggestions container 
- memoization 
- Added .env file 
- Adding .env file to gitignore 
- made app responsive


# Features
- Login/Signup
  - Sign In / Sign Up Form
  - redirect to browse page 
- Browse (after authentication)
  - Header
  - Main Movie
     - Trailer in Background
     - Title and Description
     - Movies suggestions
         - Movie list * N
- Netflix GPT 
  - Search bar
  - Movies 
  



# REDUX SLICE EXPLANATION

- Slice = ek chhota Redux state section + uske update rules (reducers).
- initialState = store ke andar default values.
- reducers = functions jo state ko update karte hain (via dispatched actions).
- actions = auto-generated functions jo dispatch karne ke liye use hote hain.
- reducer = woh function jo store ko actual update karne ka kaam deta hai (configureStore me use hota hai).