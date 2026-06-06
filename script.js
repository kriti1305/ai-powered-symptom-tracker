function goToDashboard(){
    alert("Navigate to Dashboard (connect later)");
} const ctx = document.getElementById('chart');

if(ctx){
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['M','T','W','T','F','S','S'],
            datasets: [{
                data: [2,5,3,8,4,6,3],
                borderWidth: 2
            }]
        }
    });
}// CHIP SELECT
function selectChip(el){
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    el.classList.add("active");
}

// SLIDER
let slider = document.getElementById("duration");
let text = document.getElementById("durText");

if(slider){
    slider.oninput = function(){
        text.innerHTML = this.value + " mins";
    }
}

// SAVE FUNCTION
function saveSymptom(){
    let type = document.getElementById("type").value;
    let duration = document.getElementById("duration").value;
    let note = document.getElementById("note").value;
    let intensity = document.querySelector(".chip.active").innerText;

    let data = JSON.parse(localStorage.getItem("aiws") || "[]");

    data.push({
        type,
        duration,
        intensity,
        note,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("aiws", JSON.stringify(data));

    alert("Saved successfully!");
    window.location.href = "history.html";
}