function getRandomPhrase () {
    const firstPhrase = ["Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering",
        "Once you start down the dark path, forever will it dominate your destiny. Consume you, it will", 
        "Always pass on what you have learned", "Patience you must have my young Padawan", "In a dark place we find ourselves, and a little more knowledge lights our way"];
    const booleans = [true, false];
    const randomNumbers = [1, 4, 67, 2022, 44, 78, 22];
    const actions = ["do", "attempt", "complete", "perform", "initiate"];
    const tasks = ["push-ups", "squats", "lightsaber swings", "meditations", "Jedi jumps"];
    const emojis = ["💪", "🧘", "⚔️", "🌌", "🚀", "🔥", "🧠"];


    const phrases = firstPhrase[Math.floor(Math.random() * firstPhrase.length)];
    const bool = booleans[Math.floor(Math.random() * booleans.length)];
    const randomNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const task = tasks[Math.floor(Math.random() * tasks.length)];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    return `Message: ${phrases}, if it is ${bool}, ${action} ${randomNumber} ${task}. ${emoji}`;
}

console.log(getRandomPhrase());
