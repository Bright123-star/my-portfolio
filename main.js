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


function sumOfAllOdd(num) {
    //iterate from 1 to num
    //find number not divisible by two(odd numbers);
    //add them to the storage (sumOfOdd);
    //Output results on console.
    let sumOfOdd = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            sumOfOdd += i;
        }
    }
    console.log('The sum of all odd numbers from 1 to ', num, ' is ',sumOfOdd);
}



//Accept number as input
//in a for loop of 1 to twelve multiply i to the number and print out the result.
function multiplyTable(num) {
    for (i = 1; i <= 12; i++){
        let result = num * i;
        console.log(num,' x ', i,' = ', result);
    }
}

//Accept num as input
//iterate from 1 to num;
//create a memory location(product);
//store one as the initial value of product
//multiply i to product after each iteration.
//print out the final result of product as the factorial of num

//DAY EIGHT
function fact(num) {
    let product = 1;
    for (i = 1; i <= num; i++){
        product *= i;
    }
    if (num >= 1) {
        console.log("The factorial of ", num, " is ", product);    
    } else {
        console.log('The factorial of zero or negative number cannot be found')
    }
    
}




