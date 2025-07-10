'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// この演習では講義で説明されていないテクニックを自分で調べる必要があるかもしれません。
// 先ほど作成した関数 isOfAge が「boolean 型の値を返す動きに加えて、
// 飲酒可能年齢なのかどうかを表す文字列をコンソールに表示する関数」になるよう修正しましょう。
console.log("===================");
console.log("中級演習1");
const isOfAge = (age) => {
    let msg;
    if (age>=18) {
        msg = `${age}歳は飲酒可能です`;
    } else {
        msg = `${age}歳は飲酒駄目よ`;
    }
    return msg;
}
console.log(isOfAge(20));
console.log(isOfAge(18));
console.log(isOfAge(16));

// 引数に数値 n をとる isEven という名前の関数を作成しましょう。
// 引数が偶数であれば true を、そうでなければ false を返してください。
console.log("===================");
console.log("中級演習2");
const isEven = (num) => {
    return num % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));

// 2 つの引数 username と password をとる validCredentials という名前の関数を作成しましょう。
// 両方の引数が十分な長さであれば true を、そうでなければ false を返してください。
// 「十分な長さ」は自由に決めてください。
console.log("===================");
console.log("中級演習3");
const validCredentials = (username, password) => {
    return (username.length >= 3 && password.length>=8);
}
console.log(validCredentials("Taro", "1234"));
console.log(validCredentials("me", "ABCDEFGH"));
console.log(validCredentials("綾小路太郎左衛門", "secretpassword"));


// ％ 演算子を使用しないで isEven 関数を書き換えてください。
console.log("===================");
console.log("応用演習1");
const isEven2 = (num) => {
    return !Boolean(num & 1);      // 1との各ビットAND演算 0と1をブーリアンにする
};
console.log(isEven2(2));
console.log(isEven2(3));
console.log(isEven2(4));

// 2 つの引数のうち大きい数値を返す getGreaterValue という名前の関数を作成してください。
console.log("===================");
console.log("応用演習2");
const getGreaterValue = (num1, num2) => {
    return num1>num2 ? num1 : num2;    // 三項演算子
}
console.log(getGreaterValue(10, 15)); // 15 を表示
console.log(getGreaterValue(15, 10)); // 15 を表示

// 与えられた引数のうち一番大きい数値を返すgetGreatestValue という名前の関数を作成してください。
console.log("===================");
console.log("応用演習3");
const getGreatestValue = (...arr) => {  //引数は配列ではなく配列を展開した複数の要素（スプレッド構文）
    let greatestValue = arr[0];
    arr.forEach((element) => {
        greatestValue = element > greatestValue ? element : greatestValue;
    });
    return greatestValue;
}
console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示


// flatten という名前の関数を作成しましょう。
// 引数に、入れ子になった配列を与えると、
// 全部の要素を入れ子のない一つの配列に入れて返すようにしてください。
console.log("===================");
console.log("ナイトメア問題 😈");
const flatten = (arr) => {
    let result = [];
    for (let i=0; i<arr.length; i++) {          // forEachは再帰には適さないのでforを使う
        const element = arr[i];
        if (typeof element==="object") {        // 配列の要素が入れ子になっている配列ならば
            result.push(...flatten(element));   // その配列について再帰でflattenし、外の[]を外して個々の値をpushする
        } else {                                // 配列の要素が配列ではなく数値や文字列ならば
            result.push(element);               // 単にpushする
        }
    };
    return result;
}
console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [[3]], [4, [[5], 6]]])); // [1, 2, 3, 4, 5, 6]
