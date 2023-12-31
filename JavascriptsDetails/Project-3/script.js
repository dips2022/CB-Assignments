const courses = [
    {
        name: "Compelete MERN course",
        price: "2.3"

    },
    {
        name: "Compelete C++ course",
        price: "2.1"

    },
    {
        name: "Compelete ReactJs course",
        price: "2.7"

    },
    {
        name: "Compelete ReactJs course",
        price: "2.8"

    }
];
function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name)
        const span = document.createElement("span");
        span.classList.add("float-end");

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);
        li.appendChild(span);
        ul.appendChild(li);



    });
};
// generateLIST();
window.addEventListener("load", generateLIST);


const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price)
    generateLIST();
});