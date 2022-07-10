import { icp_twenty } from "../../declarations/icp_twenty";

window.onload = async () => {
  const achievements = await icp_twenty.queryAll();

  for (let achievement of achievements) {
    const del = '---';
    
    let [date, description] = achievement.split(del);
    const parsedDate = new Date(Number.parseInt(date)).toLocaleString();
    const parsedAchievement = `${parsedDate} ${del} ${description}`;

    const el = document.createElement('p');
    el.innerText = parsedAchievement;
    document.querySelector('main').appendChild(el);  
  }
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await icp_twenty.createAchievement(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
