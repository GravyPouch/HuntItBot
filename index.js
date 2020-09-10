const Slimbot = require("slimbot");

const slimbot = new Slimbot("1348152115:AAG1twiJB8tpABbxbw13azvzBfkK-wyUZgI");

let users = [];

function callback(err, obj) {
  if (err) {
    // handle error
    console.log(obj);
  }
  // handle returned object
  console.log(obj);
}

slimbot.on("message", (message) => {
  if (message.text == "69669") {
    slimbot.sendMessage(
      message.chat.id,
      "[1/11] : At the end of the coffee road there is a dock, You will find me there.",
      callback
    );
  } else if (message.text == "22140") {
    slimbot.sendMessage(
      message.chat.id,
      "[2/11] : The old Gage house is quite lonely you should pay it a visit",
      callback
    );
  } else if (message.text == "50680") {
    slimbot.sendMessage(
      message.chat.id,
      "[3/11] : Americas Shortest Street according to someone....",
      callback
    );
  } else if (message.text == "96901") {
    slimbot.sendMessage(
      message.chat.id,
      "[4/11] : On the only brick road in snell isle I reside at the intersection ",
      callback
    );
  } else if (message.text == "17998") {
    slimbot.sendMessage(
      message.chat.id,
      "[5/11] : Hello I am hanging above the best drifting corner in Snell Isle.",
      callback
    );
  } else if (message.text == "89620") {
    slimbot.sendMessage(
      message.chat.id,
      "[6/11] : This one is also pretty good, say hi to grace while your here.",
      callback
    );
  } else if (message.text == "84550") {
    slimbot.sendMessage(
      message.chat.id,
      "[7/11] : The islander market is pretty cool, you should chill there for a little bit. (This is the halfway point of the hunt) you will be forced to wait 5 mins. This rule does not apply if your in last place.",
      callback
    );
    function myFunction(item, index) {
      slimbot.sendMessage(
        item,
        "[announcement] : A team is halfway done",
        callback
      );
    }
    users.forEach(myFunction);
  } else if (message.text == "25765") {
    slimbot.sendMessage(
      message.chat.id,
      "[8/11] : At the end of Carolina where the short man lurks",
      callback
    );
  } else if (message.text == "73429") {
    slimbot.sendMessage(
      message.chat.id,
      "[9/11] : We took their land but now they have a park. Hint: He just shot me with a _______.",
      callback
    );
  } else if (message.text == "19560") {
    slimbot.sendMessage(
      message.chat.id,
      "[10/11] : My favorite sub place in st.pete",
      callback
    );
  } else if (message.text == "68853") {
    slimbot.sendMessage(
      message.chat.id,
      "[11/11] : ///paraded.tumble.letters , bring a shovel",
      callback
    );
  } else if (message.text == "92466") {
    slimbot.sendMessage(
      message.chat.id,
      "YOU WON!!!! Congrats on this magnificent achievement!",
      callback
    );

    function myFunction(item, index) {
      slimbot.sendMessage(
        item,
        "[announcement] : Another team has just won. Thanks for playing.",
        callback
      );
    }
    users.forEach(myFunction);
  } else if (message.text == "join" || "Join") {
    users.push(message.chat.id);
    slimbot.sendMessage(
      message.chat.id,
      "Thanks you have joined the Hunt. I will send you updates throughout the game!",
      callback
    );
  } else {
    slimbot.sendMessage(message.chat.id, "Invalid Code", callback);
  }
});

console.log("Bot Started......");

slimbot.startPolling(callback);
