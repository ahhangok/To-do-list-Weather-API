const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function hadleSubmit(event) {
  // event가 발생하면 이게 올라가면서 document까지 올라가는데 그 document는 프로그램 되어진
  // 다른곳으로 넘어가서 그것을 막기위해 preventDefault()를 사용함 그러면 enter를 눌러도 아무일이 일어나지않음
  event.preventDefault();
  const currentValue = input.value;
  // what is your name에 적은것을 보여줌
  paintGreeting(currentValue);
  // 새로고침하면 what is your name이 나오고 이름이 저장이 안되니까 그것을 저장하는 함수호출
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", hadleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
