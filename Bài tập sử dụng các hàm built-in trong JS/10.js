console.log(0 && 1 && "Rikkei Academy" && null);
// Kết quả: 0
// Giải thích: 0 là giá trị đầu tiên trong danh sách đánh giá là "falsy".

console.log(2 && NaN && false && null);
// Kết quả: NaN
// Giải thích: NaN là giá trị đầu tiên trong danh sách đánh giá là "falsy".

console.log(3 && 1 && 5 && null);
// Kết quả: null
// Giải thích: 3, 1, và 5 đều là giá trị "truthy", nhưng giá trị cuối cùng trong danh sách đánh giá là null (falsy).

console.log("1" && undefined && 5 && NaN);
// Kết quả: undefined
// Giải thích: "1" là giá trị "truthy", nhưng giá trị kế tiếp trong danh sách đánh giá là undefined (falsy).

console.log(1 && null && 12 && NaN);
// Kết quả: null
// Giải thích: 1 là giá trị "truthy", nhưng giá trị kế tiếp trong danh sách đánh giá là null (falsy).