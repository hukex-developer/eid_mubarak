document.addEventListener("DOMContentLoaded", () => {
    // Generate Stars Background
    const starsContainer = document.getElementById("stars");
    const numStars = 60;
    const eidElements = ['🌙', '🏮', '✨', '🕌', '⭐'];
    const numEidElements = 20;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;

        starsContainer.appendChild(star);
    }

    // Floating Eid Emojis
    for (let i = 0; i < numEidElements; i++) {
        let el = document.createElement("div");
        el.classList.add("eid-element");
        el.innerText = eidElements[Math.floor(Math.random() * eidElements.length)];

        el.style.left = `${Math.random() * 100}%`;
        el.style.top = `110%`; // Start slightly offscreen below

        let size = Math.random() * 1.5 + 1.2;
        el.style.fontSize = `${size}rem`;

        // Float up slowly, vary the timings
        el.style.animationDuration = `${Math.random() * 15 + 12}s`;
        el.style.animationDelay = `${Math.random() * 10}s`;

        starsContainer.appendChild(el);
    }

    // Toggle Salami Payment Card
    const salamiBtn = document.getElementById("salami-btn");
    const paymentCard = document.getElementById("payment-card");

    salamiBtn.addEventListener("click", () => {
        if (paymentCard.classList.contains("hidden")) {
            paymentCard.classList.remove("hidden");
            paymentCard.classList.add("animating");

            // Allow display block to apply before animating opacity/transform
            requestAnimationFrame(() => {
                setTimeout(() => {
                    paymentCard.classList.remove("animating");
                }, 50);
            });

            salamiBtn.innerHTML = "Hide Salami Details ✨";
        } else {
            paymentCard.classList.add("animating");
            setTimeout(() => {
                paymentCard.classList.add("hidden");
                paymentCard.classList.remove("animating");
                salamiBtn.innerHTML = "Give Salami ✨";
            }, 500); // Wait for transition
        }
    });

    // Copy Number Logic
    const copyBtn = document.getElementById("copy-btn");
    const bkashNumber = document.getElementById("bkash-number").innerText;

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(bkashNumber).then(() => {
            copyBtn.innerText = "কপি হয়েছে! ✅";
            copyBtn.classList.add("success");

            // Revert back after 2.5 seconds
            setTimeout(() => {
                copyBtn.innerText = "কপি করুন 📋";
                copyBtn.classList.remove("success");
            }, 2500);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    });
});
