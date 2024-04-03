console.log(0 || NaN || "Rikkei Academy" || null);
// Kết quả: "Rikkei Academy"
// Giải thích: "Rikkei Academy" là giá trị đầu tiên trong danh sách đánh giá là "truthy".

console.log(null || NaN || false || null);
// Kết quả: null
// Giải thích: Tất cả các giá trị trong danh sách đánh giá đều là "falsy", nên kết quả là giá trị cuối cùng trong danh sách.

console.log(undefined || 1 || 5 || null);
// Kết quả: 1
// Giải thích: undefined là giá trị "falsy", 1 là giá trị đầu tiên trong danh sách đánh giá là "truthy".

console.log("" || null || 5 || NaN);
// Kết quả: 5
// Giải thích: "" và null là giá trị "falsy", 5 là giá trị đầu tiên trong danh sách đánh giá là "truthy".

console.log(1 || null || 12 || NaN);
// Kết quả: 1
// Giải thích: 1 là giá trị đầu tiên trong danh sách đánh giá là "truthy".