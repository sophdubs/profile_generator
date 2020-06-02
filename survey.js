const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};
const returnProfile = function(answerObj) {
  const {name, activity, listen, meal, food, sport, superpower} = answerObj;
  return `${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`;
};

rl.question('What is your name? ', (answer) => {
  answers['name'] = answer;
  rl.question('What is an activity you like doing? ', (answer2) => {
    answers['activity'] = answer2;
    rl.question('What do you listen do while doing that? ', (answer3) => {
      answers['listen'] = answer3;
      rl.question('Which meal is your favorite? (eg: dinner, brunch, etc.) ', (answer4) => {
        answers['meal'] = answer4;
        rl.question('What is your favorite thing to eact for that meal? ', (answer5) => {
          answers['food'] = answer5;
          rl.question('Which sport is your absolute favorite? ', (answer6) => {
            answers['sport'] = answer6;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              answers['superpower'] = answer7;
              console.log(returnProfile(answers));
              rl.close();
            });
          });
        });
      });
    });
  });
});