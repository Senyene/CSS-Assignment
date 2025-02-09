document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach((faq) => {
        const question = faq.querySelector(".faq-question");

        question.addEventListener("click", function () {
            const answer = faq.querySelector(".faq-content");
            answer.classList.toggle("active");

            // Toggle the "+" to "-" when opened
            const icon = question.querySelector("span");
            icon.textContent = answer.classList.contains("active") ? "−" : "+";
        });
    });
});
