const counter = document.getElementById("counter");
let isPlaying = true;

const timer = function () {
  return setInterval(() => {
    counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
  }, 1000);
};

let intervalID = timer();

document.getElementById("minus").addEventListener("click", () => {
  //const counter = document.getElementById("counter");
  const current = parseInt(counter.innerHTML, 10);
  current > 0 && (counter.innerHTML = current - 1);
});

document.getElementById("plus").addEventListener("click", () => {
  //const counter = document.getElementById("counter");
  counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
});

document.getElementById("heart").addEventListener("click", () => {
  const num = parseInt(counter.innerHTML, 10);
  const likes = document.querySelector(".likes");
  let li;
  if (
    Array.from(likes.children)
      .map((like) => {
        return parseInt(like.dataset.num);
      })
      .includes(num)
  ) {
    li = document.querySelector(`[data-num="${num}"]`);
    const times = parseInt(li.children[0].innerHTML) + 1;
    li.innerHTML = `${num} has been liked <span>${times}</span> times`;
  } else {
    li = document.createElement("li");
    li.setAttribute("data-num", num);
    li.innerHTML = `${num} has been liked <span>1</span> time`;
    likes.appendChild(li);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  if (isPlaying) {
    console.log("I am here!");
    clearInterval(intervalID);
    document.getElementById("pause").innerHTML = "resume";
    isPlaying = false;
  } else {
    intervalID = timer();
    document.getElementById("pause").innerHTML = "pause";
    isPlaying = true;
  }

  document.querySelectorAll("button").forEach((b) => {
    b.id !== "pause" && (b.disabled = !isPlaying);
  });
});

document.getElementById("comment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const commentsDiv = document.getElementById("list");

  const comment = document.createElement("p");
  comment.innerHTML = document.getElementById("comment-input").value;
  commentsDiv.appendChild(comment);
});
