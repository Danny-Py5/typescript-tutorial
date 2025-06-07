let data: [number[], string[]] = [
  [1, 2, 3, 4, 5],
  ["2", "4", "5"],
];

data.push([3, 4, 6]); // ts shouldn't have allowed me. But it does

let rgb: [number, number, number] = [22, 32, 224];

let user: [number, string] = [22, "Olamide"]; //can't take more in definition
user[1] = "Ayomide";
user.push(23); // but it does here.

export {};
