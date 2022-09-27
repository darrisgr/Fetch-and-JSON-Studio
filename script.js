// TODO: add code here
window.addEventListener("load", function() {
    let container = document.getElementById("container");
    let astronautCount = document.getElementById("astrocount");

    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        // console.log(response);
        response.json().then(function(json) {
            console.log(json);
            astronautCount.innerHTML += json.length;

            for (let i = 0; i < json.length; i++) {
                let astronaut = json[i];
                let activeStatus;
                if (astronaut.active) {
                    activeStatus = `<span style='color: green;'>${astronaut.active}</span>`
                } else {
                    activeStatus = astronaut.active;
                }
                
                container.innerHTML += `<div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${activeStatus}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
            }
        });
    });
});