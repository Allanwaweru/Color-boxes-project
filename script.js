document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const hideButtons = document.querySelectorAll("[id^='hideBox']");
    const showAllButton = document.getElementById("showAll");
    const resetColorsButton = document.getElementById("resetColors");
    
    const originalColors = ['#FF5733','#0015cfcc','#7CFC00'];
    const originalBorderColors = ['black', 'yellow', 'purple'];
    
    function changeBoxColor(box, color, borderColor) {
        box.style.backgroundColor = color;
        box.style.borderColor = borderColor;
    }

    function hideBox(box) {
        box.style.visibility = "hidden";
    }

    function showBox(box) {
        box.style.visibility = "visible";
    }

    function hideAllBoxes() {
        boxes.forEach(box => {
            hideBox(box);
        });
    }

    function showAllBoxes() {
        boxes.forEach(box => {
            showBox(box);
        });
    }

    function resetBoxColors() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = originalColors[i];
            boxes[i].style.borderColor = originalBorderColors[i];
        }
    }

    document.getElementById("changeBox1").addEventListener("click", function() {
        changeBoxColor(boxes[0], getRandomColor(), getRandomBorderColor());
    });

    document.getElementById("changeBox2").addEventListener("click", function() {
        changeBoxColor(boxes[1], getRandomColor(), getRandomBorderColor());
    });

    document.getElementById("changeBox3").addEventListener("click", function() {
        changeBoxColor(boxes[2], getRandomColor(), getRandomBorderColor());
    });

    document.getElementById("changeAll").addEventListener("click", function() {
        for (let i = 0; i < boxes.length; i++) {
            changeBoxColor(boxes[i], getRandomColor(), getRandomBorderColor());
        }
    });

    hideButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            hideBox(boxes[index]);
        });
    });

    showAllButton.addEventListener("click", function() {
        showAllBoxes();
    });

    resetColorsButton.addEventListener("click", function() {
        resetBoxColors();
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomBorderColor() {
        return originalBorderColors[Math.floor(Math.random() * originalBorderColors.length)];
    }
});
