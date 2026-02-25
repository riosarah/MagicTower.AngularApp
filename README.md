# Magic Tower
This project is a modern take on classic text-based RPG adventures. Inspired by early role-playing games where players progress through typed commands, this game combines nostalgic gameplay with cutting-edge AI technology.

At its core, the game uses an AI agent to dynamically generate scenarios, encounters, and enemies in real time. Instead of relying on predefined story paths, the world evolves based on player input — creating a unique experience in every playthrough.

To ensure consistent rules, reliable game mechanics, and transparent character statistics, the AI agent operates through structured MCP tools with predefined methods. This guarantees that while the narrative is generated dynamically, all gameplay mechanics follow strict and reproducible logic. Player stats, combat outcomes, and environmental interactions remain fair and traceable.

Enemy generation is intelligently constrained based on the selected player character and context. This ensures logical balancing and allows the frontend to dynamically render appropriate avatars for both the player and opponents.

On the frontend, responsive UI logic displays characters and environments using predefined PNG assets. Based on the current game state, stats, characters, and surroundings, the correct visuals are automatically rendered — creating an immersive atmosphere that enhances the text-driven adventure with rich visual feedback.

The result is a hybrid experience:

Classic text-based roleplaying

AI-generated dynamic storytelling

Structured, rule-based mechanics

Visually supported immersive gameplay

Each session becomes a unique adventure while maintaining game integrity and balance.
 
 # MagicTowerAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Installation

Before running the application, you need to install the dependencies:

```bash
npm install
```

This will install all required packages listed in `package.json` into the `node_modules` directory.

### Translation Support

This project includes internationalization support using ngx-translate. The required packages are already included in the dependencies:

- `@ngx-translate/core`
- `@ngx-translate/http-loader`

If you need to add translation support to a new project, you can install these packages manually:

```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```

## Development server

After installing the dependencies, you can start a local development server by running:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
