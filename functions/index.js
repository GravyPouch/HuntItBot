const Slimbot = require("slimbot");

const slimbot = new Slimbot("TOKEN GOES HERE");

let users = [];

function callback(err, obj) {
  if (err) {
    // handle error
    console.log(obj);
  }
  // handle returned object
  console.log(obj);
}

slimbot.on("message", async (message) => {
  if (message.text == "69669") {
    await slimbot.sendMessage(
      message.chat.id,
      "[1/11] : At the end of the coffee road there is a dock, You will find me there.",
      callback
    );
  } else if (message.text == "22140") {
    await slimbot.sendMessage(
      message.chat.id,
      "[2/11] : The old Gage house is quite lonely you should pay it a visit",
      callback
    );
  } else if (message.text == "50680") {
    await slimbot.sendMessage(
      message.chat.id,
      "[3/11] : Americas Shortest Street according to someone....",
      callback
    );
  } else if (message.text == "96901") {
    await slimbot.sendMessage(
      message.chat.id,
      "[4/11] : On the only brick road in snell isle I reside at the intersection ",
      callback
    );
  } else if (message.text == "17998") {
    await slimbot.sendMessage(
      message.chat.id,
      "[5/11] : Hello I am hanging above the best drifting corner in Snell Isle.",
      callback
    );
  } else if (message.text == "89620") {
    await slimbot.sendMessage(
      message.chat.id,
      "[6/11] : This one is also pretty good, say hi to grace while your here.",
      callback
    );
  } else if (message.text == "84550") {
    await slimbot.sendMessage(
      message.chat.id,
      "[7/11] : The islander market is pretty cool, you should chill there for a little bit. (This is the halfway point of the hunt) you will be forced to wait 5 mins. This rule does not apply if your in last place.",
      callback
    );
    async function myFunction(item, index) {
      await slimbot.sendMessage(
        item,
        "[announcement] : " + message.chat.username + "'s team is halfway done",
        callback
      );
    }
    users.forEach(myFunction);
  } else if (message.text == "25765") {
    await slimbot.sendMessage(
      message.chat.id,
      "[8/11] : At the end of Carolina where the short man's car lurks",
      callback
    );
  } else if (message.text == "73429") {
    await slimbot.sendMessage(
      message.chat.id,
      "[9/11] : We took their land but now they have a park. Hint: He just shot me with a _______.",
      callback
    );
  } else if (message.text == "19560") {
    await slimbot.sendMessage(
      message.chat.id,
      "[10/11] : My favorite sub place in st.pete",
      callback
    );
  } else if (message.text == "68853") {
    await slimbot.sendMessage(
      message.chat.id,
      "[11/11] : ///paraded.tumble.letters , bring a shovel",
      callback
    );
  } else if (message.text == "92466") {
    await slimbot.sendMessage(
      message.chat.id,
      "YOU WON!!!! Congrats on this magnificent achievement!",
      callback
    );
    slimbot
      .sendPhoto(
        message.chat.id,
        "https://image.freepik.com/free-vector/you-win-lettering-pop-art-text-banner_185004-60.jpg"
      )
      .then((message) => {
        console.log(message.result.photo);
      });

    async function myFunction(item, index) {
      await slimbot.sendMessage(
        item,
        "[announcement] : " +
          message.chat.username +
          "'s team has just won. Thanks for playing.",
        callback
      );
    }
    await users.forEach(myFunction);
    slimbot.stopPolling();
  } else if (message.text == "/start") {
    if (users.indexOf(message.chat.id) > -1) {
      await slimbot.sendMessage(
        message.chat.id,
        "You have already joined no need to do it again.",
        callback
      );
    } else {
      users.push(message.chat.id);
      await slimbot.sendMessage(
        message.chat.id,
        "Thanks you have joined the Hunt. I will send you updates throughout the game!",
        callback
      );
      await slimbot.sendMessage(
        message.chat.id,
        "Rules: Teams of 3-4. No Tresspassing. Be Safe and Have Fun!",
        callback
      );
      await slimbot.sendMessage(
        message.chat.id,
        "And dont forget the game will be contained within this area: ",
        callback
      );
      slimbot
        .sendPhoto(message.chat.id, "https://i.imgur.com/LYraQbF.jpg")
        .then((message) => {
          console.log(message.result.photo);
        });
    }
  } else {
    await slimbot.sendMessage(message.chat.id, "Invalid Code", callback);
  }
});

console.log("Bot Started......");

slimbot.startPolling(callback);
