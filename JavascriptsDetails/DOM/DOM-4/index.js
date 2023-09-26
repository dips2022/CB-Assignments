// const article = document.querySelector("#content");


//  function showMore(){
//     if(article.className=="open"){//read less
//         article.className="";
//         button.innerHTML ="Show More";
//     }else{ //read more
//         article.className = "open";
//         button.innerHTML = "Show less";

//     }
// }

const article = document.querySelector("#content");
const button = document.querySelector("#read-more");
button.addEventListener("click", readMore);
function readMore() {
    if (article.className == "open") {
        // read Less

        article.className = "";
        button.innerHTML = "Show More";
    }
    else {
        article.className = "open";
        button.innerHTML = "Show Less";
    }
}