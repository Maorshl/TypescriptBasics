type Combinable = number | string;
type ConversionDescriptor = "as-text" | "as-number";

const combine = (
  num1: Combinable,
  num2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("30", "26", "as-number");
console.log(combinedNames);
