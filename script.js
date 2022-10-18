//  Text Adventure Game

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const start = `Welcome to the Scream Text Adventure Game. Click 'OK' to start the game.`;

const q1 = `You are trying to survive a killer. It is called ghost face or sometimes just the killer. Unlike other stories it is not a supernatural monster it is just someone or someones in a costume trying to kill you and other people you know. Should you...
1. Leave school by yourself
OR
2. Wait for a friend to drive you home
${enter}`;

const gameOver1 = `You never see your home you die. ${gameOver}`;

const q2 = `You arrive home safely. Then you get a phone call. You answer and it is a wrong number. You hang up and he immediately calls again, Should you...
1. Keep talking to him he sounds cute
OR
2. Hang up and call the police you can't be too careful with a killer on the loose
${enter}`;

const gameOver2 = `You talk to the caller for several minutes. Then he asks your name and you say why. He says I want to know who I'm looking at. A chair crashes through the glass door and he runs in to stab you 14 times. YOU DIE!!! ${gameOver}`;

const q3 = `The police arrive and they tell you they saw someone run off but lost them. Glad you called the police. They are leaving a couple of cops at your house tonight. You go to school and Billy your boyfriend stops you and says he needs to talk to you alone. Should you...
1. Say OK and Billy says you should leave school to go to a private place
OR
2. Tell Billy you will talk to him after class
${enter}`;

const gameOver3 = `He takes you to a storage room you have never been to before. YOU GET STABBED AND DIE! ${enter0}`;

const q4 = `You meet Billy after class and he complains that you haven't been the same since your mother died and he wants girlfriend back.  He thinks you should just get over it ...
1. You tell him he is being unreasonable. Your mother died and it will take as long as it takes for you to deal with it. You then say that if he cannot deal with that he should find another girlfriend.
OR
2. You tell him you are sorry you shouldn't keep wallowing in your grief and should do what he says. 
${gameOver}`;

const gameOver4 = `He takes you to a storage room you have never been to before. YOU GET STABBED AND DIE!. ${gameOver}`;

const q5 = `Billy goes into a rage and pulls out a bloody knife. You now know that he is the killer you panic and run. Should you...
1. Run to the room at the end of the hall to hide
OR
2. Run out the exit door of the building
${enter}`;

const gameOver5 = `You run to the room at the end of the hall. There is no way out and nothing to hide behind. Billy kills YOU! ${gameOver}`;

const win = `You run out of the building. You then run past a group of cops that see you and Billy. They arrest Billy throwing him to the ground and take the knife in as evidence. CONGRATULATIONS! YOU SURVIVED!!!`;


// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1ST Conditional Statement
// NOTE: Prompts returns the value entered as a string. That is why double equals is used instead of triple equals (AKA Strict Equality)
if (userInput == 2){
    userInput = prompt(q2);

    // 2ND Conditional Statement
    if (userInput == 2){
        userInput = prompt(q3);

        // 3RD Conditional Statement
        if (userInput == 2){
            userInput = prompt(q4);

            // 4TH Conditional Statement
            if (userInput == 1){
                userInput = prompt(q5);

                // 5TH Conditional Statement
                if (userInput == 2){
                    alert(win);
                } else {
                    alert(gameOver5);
                }
            } else {
                alert(gameOver4);
            }
        } else {
            alert(gameOver3);
        }
    } else {
        alert(gameOver2);
    }
} else {
    alert(gameOver1);
}