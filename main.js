document.addEventListener('DOMContentLoaded', () => {

    // section percentage
    function countUp(elementId, limit, speed) {
        let count = 0;
        const counter = document.getElementById(elementId);

        function counting() {
            count++;
            counter.textContent = count;

            if (count < limit) {
                setTimeout(counting, speed);
            }
        }
        counting();
    }
    function startCounting() {
        countUp("counter", 80, 150);
        countUp("pythonCount", 40, 150);
        countUp("Ccount", 40, 150);
        countUp("photoshopcount", 60, 150);

        document.getElementById("webPercent").style.width = "80%";
        document.getElementById("pythonPercent").style.width = "40%";
        document.getElementById("photoshopPercent").style.width = "60%";
        document.getElementById("CPercent").style.width = "40%";


    }



    const skillsSection = document.getElementById("skillsPercentage");
    let start = false;

    window.addEventListener("scroll", () => {
        if (!skillsSection) return;
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100 && !start) {
            startCounting();
            start = true;
        }
    });

    // section menu button

    function clicking(elementId, popupId) {
        const btnclick = document.getElementById(elementId);
        const popup = document.getElementById(popupId);

        btnclick.addEventListener('click', () => {
            popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
        });

        document.addEventListener('click', (event) => {
            if (!btnclick.contains(event.target) && !popup.contains(event.target)) {
                popup.style.display = 'none';
            }


        });
    }
    clicking("webView", "webLinks");
    clicking("pythonView", "pythonLinks");
    clicking("photoshopView", "photoshopLinks")



});


