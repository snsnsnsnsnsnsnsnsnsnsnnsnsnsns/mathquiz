function adduser()
{
var player1name=document.getElementById("player1_input").value;
var player2name=document.getElementById("player2_input").value;
localStorage.setItem("player1_name", player1name);
localStorage.setItem("player2_name", player2name);
window.location = "game_page.html";
window.location = "game_page.html";
} 