function generateLove() {
  const name1 = document.getElementById("lover1").value.trim();
  const name2 = document.getElementById("lover2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names ❤️");
    return;
  }

  const score = Math.floor(Math.random() * 101); // 0–100
  let message = "";

  if (score <= 10) {
    message = "😢 You are unlucky in love. Maybe not a perfect match.";
  } else if (score <= 30) {
    message = "💔 There's a spark, but not enough to start a fire.";
  } else if (score <= 50) {
    message = "🤔 Hmm... it might work, but it'll take effort.";
  } else if (score <= 70) {
    message = "😊 You’re compatible! Things are looking good.";
  } else if (score <= 90) {
    message = "😍 Wow! There's real love in the air!";
  } else {
    message = "💘 100% match! You two are made for each other!";
  }

  document.getElementById("love-score").innerText = `Love Score: ${score}%`;
  document.getElementById("love-message").innerText = message;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}