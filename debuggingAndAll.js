const measurementkelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees Celsius : ')),
  };
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);

  // console.error(measurement.value);
  // console.warn(measurement.value);

  //B) FIND
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measurementkelvin());



git add .
git commit -m "javaScript"
git push origin main  # or your branch name
