import "./styles.css";

// 追加ボタン

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  console.log(inputText);
  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  li.innerText = text;
  console.log(li);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押されたら親のdiv を殺す
    // そして 完了へ 足す
    const deleteTarget = completeButton.parentNode;
    deleteFromIncompleteList(deleteTarget);

    console.log(deleteTarget);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      const TargetDiv = backbutton.parentNode;
      deleteFromCompleteList(backbutton.parentNode);
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    document.getElementById("complete-list").appendChild(addTarget);
  });
  console.log(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押されたら親のdiv を殺す
    const deleteTarget = deleteButton.parentNode;
    console.log(deleteTarget);
    deleteFromIncompleteList(deleteTarget);
  });

  console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(div);

  document.getElementById("incomplete-list").appendChild(div);
};
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
