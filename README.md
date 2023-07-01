# GameHub

GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. 

This is the project I build in throughout Ultimate React course. You can find the full course at: https://codewithmosh.com 

## Project Link

https://game-hub-app.netlify.app/

## Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first. 
4. Add the API key to **src/services/api-client.ts**
5. Run `npm run dev` to start the web server.

## Features

- **Game Search:** Search for games by title, platform, genre, or by just typing some prefix of the name of the game.
- **Game Details:** View detailed information about a specific game, including its rating, platforms, and genre.
- **Platform Filter:** Filter games based on the platform (e.g., PC, PlayStation, Xbox).
- **Genre Filter:** Filter games based on the genre (e.g., action, adventure, strategy).

### Usage

1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:5173/`.

### Deployment

To deploy the GameHub app to a production environment, follow these steps:

1. Build the production-ready assets: `npm run build`
2. Deploy the generated `build` directory to your hosting provider of choice.

## Technologies Used

- React: TypeScript library for building user interfaces
- Axios: Promise-based HTTP client for making API requests
- TypeScript
- Chakra UI: Library for building user interfaces

## Authors

- [Jamal SaadEddin](https://github.com/Jamaloooo)

## Acknowledgments

- Thanks to [Mosh Hamedani](https://codewithmosh.com) for the Ultimate React course, which served as the foundation for this project.
