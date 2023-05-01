// /**
//  *  const let
//  */

// // var val1 = "var変数";
// // console.log(val1);

// // // 上書きできる
// // val1 = "vr変数を上書き";
// // console.log(val1);

// // // 再宣言可能

// // var val1 = " var 変数を再宣言";
// // console.log(val1);

// // let val2 = "let 変数";
// // console.log(val2);

// // // let は上書きが可能
// // val2 = "let 変数を上書き";
// // console.log(val2);

// // // let は 再宣言ができない
// // let val2 = "let変数を再宣言";

// // const val3 = "const 変数";
// // console.log(val3);

// // //const 変数は上書き不可能
// // val3 = "const 変数を上書き";
// // console.log(val3);

// // const 変数は再宣言もできない
// // const val3 = "const変数を再宣言";

// // // const でもプロパティの変更が出来る
// // const val4 = {
// //   name: "テスト",
// //   age: 33,
// // };
// // val4.name="hoge";
// // val4.address = "japan";
// // console.log(val4);

// // const val5 = ["dog", "cat"];
// // console.log(val5);
// // val5[0] = "bird";
// // console.log(val5);
// // val5.push("monkey");
// // // console.log(val5);

// // // テンプレート文字列
// // const name = "氏名";
// // const age = 33;
// // // 「私の名前は氏名です年齢は33歳です。」

// // // 従来の方法
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// // console.log(message1);

// // // テンプレート文字列

// // const message2 = `私の名前は${name}です。年齢は${age}です。`;
// // console.log(message2);

// // アロー関数

// // // 従来
// // function func1(str) {
// //   return str;
// // }
// // const func2 = function (str) {
// //   return str;
// // };
// // console.log(func1("func1"));
// // console.log(func2("func2"));

// // // アロー関数
// // const func3 = (str) => {
// //   return str;
// // };

// // console.log(func3("func3"));
// // const func4 = (str) => str;

// // console.log(func4("func4"));

// // const func5 = (num1, num2) => num1 + num2;

// // console.log(func5(10, 30));

// // 分割代入

// // const myProfile = {
// //   name: "しめい",
// //   age: 33
// // };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

// // console.log(message1);

// // const { name, age } = myProfile;

// // const message2 = `名前は${name}です。年齢は${age}です。`;
// // console.log(message2);

// // const myProfileArray = ["しめい", 33];

// // const message3 = `名前は${myProfileArray[0]}です。年齢は${myProfileArray[1]}です。`;
// // console.log(message3);

// // const [name2, age2] = myProfileArray;
// // const message4 = `名前は${name2}です。年齢は${age2}です。`;
// // console.log(message4);

// // // デフォルト値

// // const sayHello = (name) => console.log(`こんにちは!${name}さん！`);

// // //こんにちは!しめいさん！
// // sayHello("しめい");

// // // こんにちは!undefinedさん！
// // sayHello();

// // const sayHello2 = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// // //こんにちは!しめいさん！
// // sayHello2("しめい");

// // // こんにちは!ゲストさん！
// // sayHello2();

// // // // スプレッド構文

// // //配列の展開
// // const arr1 = [1,2];
// // // (2) [1, 2]
// // console.log(arr1);
// // // 1 2
// // console.log(...arr1);

// // const sumFunc = (num1,num2) => console.log(num1 + num2);

// // // 3
// // sumFunc(arr1[0], arr1[1]);
// // // 3
// // sumFunc(...arr1);

// // // まとめる

// // const arr2 = [1,2,3,4,5];

// // const [num1, num2, ...arr3] = arr2;
// // // 1
// // console.log(num1);
// // // 2
// // console.log(num2);
// // // (3) [3,4,5]
// // console.log(arr3);
// // // 3 4 5
// // console.log(...arr3);

// // // 配列のコピーと結合
// // const arr4 = [10,20];
// // const arr5 = [30,40];

// // const arr6 = [...arr4];
// // // [10, 20];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // // [10,20,30,40]
// // console.log(arr7);

// // // 代入だと参照になるから展開するほうがいい
// // const arr8 = arr4;
// // // [10,20]
// // console.log(arr8);
// // arr8[0] = 100;
// // // 100, 20
// // console.log(arr4);

// // // スプレット構文で展開してたらベルモの
// // const arr14 = [10,20];
// // const arr15 = [30,40];

// // const arr16 = [...arr14];
// // // [10, 20];
// // console.log(arr16);

// // arr16[0] = 100;
// // // [10, 20]
// // console.log(arr14);

// // map と filter

// // const nameArr = ["田中", "山田", "しめい"];

// // // 従来
// // for (let index = 0 ; index < nameArr.length; index++){
// //   console.log(nameArr[index]);
// // }

// // // map の例
// // // // name Arr の中身を全部そのまま入れる
// // // const nameArr2 = nameArr.map((name)=>{
// // //   return name;
// // // })

// // // // ["田中", "山田", "しめい"]
// // // console.log(nameArr2);

// // // nameArr のすべての要素について console.log を叩く
// // nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];

// // 配列に対し条件に合致するのだけ返す

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; // これに合致したものだけが得られる
// });
// // [1,3,5]
// console.log(newNumArr);

// const newNumArr2 = numArr.filter((num) => {
//   return num % 2 === 0; // これに合致したものだけが得られる
// });
// // [2.4]
// console.log(newNumArr2);

// const nameArr = ["田中", "山田", "しめい"];

// // 従来
// // 1: 田中
// // 2: 山田
// // 3: しめい
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}: ${nameArr[index]}`);
// }

// // これも同じ
// nameArr.map((name, index) => console.log(`${index + 1}: ${name}`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "田中") {
//     return name;
//   } else {
//     return `${name} さん`;
//   }
// });
// // (3) ["田中", "山田 さん", "しめい さん"]
// console.log(newNameArr);

// // 三項演算子
// // ある条件 ? 条件がtrueのとき :条件がfalse のとき

// const val1 = 1 > 0 ? 'true!' : 'false!';
// // true!
// console.log(val1);

// const num = 1300;

// // 1,300
// console.log(num.toLocaleString());

// const numStr = "1300";

// // 1300
// console.log(numStr.toLocaleString());

// var InputNum = "1300";
// var formattedNum = typeof InputNum === 'number' ? num.toLocaleString() : '数値を入力してください';
// // 数値を入力してください
// console.log(formattedNum);

// var InputNum = 1300;
// var formattedNum = typeof InputNum === 'number' ? num.toLocaleString() : '数値を入力してください';
// // 1,300
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています': "許容範囲内です";
// }

// // 許容範囲内です
// console.log(checkSum(50,50));
// // 100 を超えて今s
// console.log(checkSum(100,100));

// // 論理演算子のほんとうの意味を知ろう

// const flag1 = true;
// const flag2 = false;

// //1か2はtrue

// if (flag1 || flag2) {
//   // flag1 || flag2 flag1 が true だから flag1 をかえして true で if true
//   console.log("1か2はtrue");
// }

// //なし
// if (flag1 && flag2) {
//   // flag1 && flag2 flag1 が true だから flag2 をかえして false で if false
//   console.log("1も2もtrue");
// }

// // || の 左側が false なら 右側を返す
// const num = null;
// const fee = num || "金額未設定です";

// // 金額未設定です
// console.log(fee);

// // && の 左側が true なら 右側を返す
// const num2 = 100;
// const fee2 = num2 && "なにか設定されました";

// // なにか設定されました。
// console.log(fee2);
