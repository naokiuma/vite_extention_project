//表示中のブラウザwebページ上の処理
console.log('contenxts_scriptです')
const body = document.querySelector("body");
if (body) {
  const button = document.createElement("button");
  button.innerText = "アラートを表示";
  button.addEventListener("click", () => {
    alert("おめでとうございます！");
  });
  body.appendChild(button);
}