//Sweet Nothings App
console.log("Sweet Nothings App");

//Message building blocks
const nickname = ["Baby", "My Love", "Honey", "Honey Bear", "Dearest", "Babe", "Sweetie", "Boo"];
const comparison = ["you are better than", "I love you more than", "you are more beautiful than", "you are as sweet as", "I need you more than"];
const goodThing = ["the sun", "ice cream", "pie", "the world", "the cherry on top", "the Sistine chapel", "a fairytale", "the Mona Lisa"];

//Return random item from input array
const pickRand = a => a[Math.floor(Math.random() * a.length)];

//Generate random message
const generateMessage = () => {
    const nick = pickRand(nickname);
    const comp = pickRand(comparison);
    const good = pickRand(goodThing);
    return `${nick}, ${comp} ${good}!`;
};
const message = () => {
    console.log(generateMessage());
};
