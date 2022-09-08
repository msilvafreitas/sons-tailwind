function showContent(id) {
    var players = document.getElementById(id);
    if (players.style.display === "none") {
      players.style.display = "block";
    } else {
      players.style.display = "none";
    }
  } 