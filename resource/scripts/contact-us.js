function handlerFunc(e) {
    e.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const commentInput = document.getElementById("commentInput");
    const data = {
        email: emailInput.value,
        comment: commentInput.value,
    };

    console.log("Before send");
    axios
        .post("/contact-us", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    console.log("After send");

    return false;
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", handlerFunc);
