//STEP 1
const movies0 = ["joker", "dark knight", "spongebob the movie", "avengers", "forest gump"];
window.console.log(movies0[1]);

//STEP 2
const movies = new Array(5);
movies[0] = "joker";
movies[1] = "dark knight";
movies[2] = "spongebob the movie";
movies[3] = "avengers";
movies[4] = "forest gump";
console.log(movies[0]);

//STEP 3
const movies2 = new Array(5);
movies2[0] = "joker";
movies2[1] = "dark knight";
movies2[2] = "spongebob the movie";
movies2[3] = "avengers";
movies2[4] = "forest gump";
movies2.splice(2, 0, "dont go");
console.log(movies2);

//STEP 4
const movies3 = {
    0: "joker",
    1: "dark knight",
    2: "spongebob the movie",
    3: "avengers",
    4: "forest gump"
}
delete movies3[0];
console.log(movies3);

//STEP 5
const movies4 = {
    0: "joker",
    1: "dark knight",
    2: "spongebob the movie",
    3: "avengers",
    4: "forest gump",
    5: "gont go",
    6: "mine"
}
for(let i = 0; i < 7; i++){
    console.log(movies4[i]);
}

//STEP 6
const movies5 = {
    0: "joker",
    1: "dark knight",
    2: "spongebob the movie",
    3: "avengers",
    4: "forest gump",
    5: "gont go",
    6: "mine"
}
for(var property in movies5){
    console.log(movies5[property]);
}

//STEP 7
const movies6 = {
    0: "joker",
    1: "dark knight",
    2: "spongebob the movie",
    3: "avengers",
    4: "forest gump",
    5: "gont go",
    6: "mine"
}
for(var property in movies6){
    console.log(`${property}: ${movies6[property]}`);
}

//STEP 8
const movies7 = {
    0: "joker",
    1: "dark knight",
    2: "spongebob the movie",
    3: "avengers",
    4: "forest gump",
    5: "gont go",
    6: "mine"
}
const leastFavMovies = ["dunkirk", "haunting", "you again"];
console.log("\nMovies I like:\n\n");
for(var property in movies7){
    console.log(movies7[property]);
}
console.log("\nMovies I regret watching:\n\n");
for(var property in leastFavMovies){
    console.log(leastFavMovies[property]);
}

//STEP 9
const movies8 = [
    "joker",
    "dark knight",
    "spongebob the movie",
    "avengers",
    "forest gump",
    "gont go",
    "mine"
]
const leastFavMovies2 = ["dunkirk", "haunting", "you again"];
const movies9 = movies8.concat(leastFavMovies2);
for(let i = movies9.length - 1; i > 0; i--){
    console.log(movies9[i]);
}
//STEP 10
const element = movies9.pop();
console.log(element);


