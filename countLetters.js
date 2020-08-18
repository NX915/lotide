const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(txt) {
  const count = {};
  txt = txt.split(' ').join('');
  for (let i = 0; i < txt.length; i++) {
    if (count[txt[i]]) {
      count[txt[i]]++;
    } else {
      count[txt[i]] = 1;
    }
  }
  return count;
};

const counts = countLetters('Lighthouse in the house');
assertEqual(counts['L'], 1);
assertEqual(counts['i'], 2);
assertEqual(counts['g'], 1);
assertEqual(counts['h'], 4);
assertEqual(counts['t'], 2);
assertEqual(counts['o'], 2);
assertEqual(counts['u'], 2);
assertEqual(counts['s'], 2);
assertEqual(counts['e'], 3);
assertEqual(counts['n'], 1);