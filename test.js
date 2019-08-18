process.stdin.resume();
process.stdin.setEncoding('utf8')
console.log("<h1>水損公文書修復費用簡易計算プログラム</h1>")

function getValue(idname){
  // value値を取得する
  var result = document.getElementById(idname).value;

  // Alertで表示する
  alert("value値は「" + result + "」です");
}
