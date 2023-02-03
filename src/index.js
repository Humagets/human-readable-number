module.exports = function toReadable(number) {
  const ones = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine"
  ];
  const tens = [
    "ten", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
  ];
  const teens = [
    "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  if (number < 10) return ones[number];
  if (number < 20) return teens[number - 11];
  if (number < 100) return tens[Math.floor(number / 10) - 1] + (number % 10 ? " " + toReadable(number % 10) : "");
  if (number < 1000) return toReadable(Math.floor(number / 100)) + " hundred " + (number % 100 ? toReadable(number % 100) : "");
  if (number < 1000000) return toReadable(Math.floor(number / 1000)) + " thousand " + (number % 1000 ? toReadable(number % 1000) : "");
  return toReadable(Math.floor(number / 1000000)) + " million " + (number % 1000000 ? toReadable(number % 1000000) : "");
}
