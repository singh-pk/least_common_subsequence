function lcs(str1, str2) {
  let larger, smaller;
  if (str1.length >= str2.length) {
    larger = str1;
    smaller = str2;
  } else {
    larger = str2;
    smaller = str1;
  }
  let b = 0;
  let c = 0;
  let r = [];
  let count = 0;
  let result = [];

  for (let i = 0; i < larger.length; i++) {
    for (let j = b; j < smaller.length; j++) {
      if (
        smaller[j] === larger[i] &&
        j === smaller.length - 1 &&
        i !== larger.length - 1
      ) {
        result.push(str2[j]);
        r[c++] = { count: ++count, result: [...result] };
        count--;
        result.pop();
        i++;
        continue;
      } else if (smaller[j] === larger[i]) {
        result.push(smaller[j]);
        count++;
        b = j + 1;
        i++;
      }
    }
  }
  r.push({ count, result });
  let largest = r[0].count;
  let idx = 0;
  for (let i = 1; i <= c; i++) {
    if (r[i].count > largest) {
      idx = i;
    }
  }
  return r[idx];
}

//console.log(lcs('stone', 'longest'));
