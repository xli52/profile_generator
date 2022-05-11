const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyQuestions = [
"What's your name? Nicknames are also acceptable :) ",
"What's an activity you like doing? ",
"What do you listen to while doing that? ",
"Which meal is your favourite (eg: dinner, brunch, etc.) ",
"What's your favourite thing to eat for that meal? ",
"Which sport is your absolute favourite? ",
"What is your superpower? In a few words, tell us what you are amazing at! "
];

const answers = {};
let index = 0;
const askNextQuestion = function(index, question, answer) {
  answers[question] = answer;
  index++;
  if (index < surveyQuestions.length) {
    rl.question(surveyQuestions[index], (ans) => {
      askNextQuestion(index, surveyQuestions[index], ans);
    });
  }
  if (index >= surveyQuestions.length) {
    console.log('Thanks for your valuable feedback:')
    console.log(answers);
    rl.close();
  }
}

rl.question(surveyQuestions[index], (ans) => {
  askNextQuestion(index, surveyQuestions[index], ans)
});
