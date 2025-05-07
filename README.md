# Random Cocktails 🍹

This is a **Vue 3** application built with **Vite** that generates random cocktail recipes using the [TheCocktailDB API](https://www.thecocktaildb.com/). It displays random cocktails with their names, images, instructions, and ingredients. You can refresh the page to load new cocktails.

---

## How to Run the Project

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/random-cocktails.git
cd random-cocktails
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Build for Production
To create a production build:
```sh
npm run build
```
The build files will be in the `dist/` folder.

---

## Build and Run with Docker

### 1. Build the Docker Image
```sh
docker build -t random-cocktails .
```

### 2. Run the Docker Container
```sh
docker run -p 8080:80 random-cocktails
```
The app will be available at [http://localhost:8080](http://localhost:8080).

---

## Features
- Fetches 3 random cocktails from the [TheCocktailDB API](https://www.thecocktaildb.com/).
- Displays cocktail details: name, image, instructions, and ingredients.
- Refresh button to load new cocktails.
- Responsive design with **Tailwind CSS**.

---

## Technologies Used
- **Vue 3**
- **Vite**
- **Tailwind CSS**
- **TheCocktailDB API**
- **Docker**