function lcs(str1, str2) {
  let col, row;
  if (str1.length >= str2.length) {
    col = str1;
    row = str2;
  } else {
    col = str2;
    row = str1;
  }

  let colLength = col.length;
  let rowHeight = row.length;

  let matrix = Array.from({ length: rowHeight + 1 }, () =>
    Array.from({ length: colLength + 1 }, () => 0)
  );

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (col[j - 1] === row[i - 1]) {
        matrix[i][j] = 1 + matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
      }
    }
  }

  let traceResult = [];

  (function tracer(i, j) {
    if (matrix[i][j] === 0) return;
    if (matrix[i][j] === matrix[i][j - 1]) {
      return tracer(i, j - 1);
    } else if (matrix[i][j] === matrix[i - 1][j]) {
      return tracer(i - 1, j);
    } else if (matrix[i][j] === 1 + matrix[i - 1][j - 1]) {
      traceResult.unshift(col[j - 1]);
      return tracer(i - 1, j - 1);
    }
  })(rowHeight, colLength);

  return { count: matrix[rowHeight][colLength], result: traceResult };
}

// console.log(lcs('stone', 'longest'));
