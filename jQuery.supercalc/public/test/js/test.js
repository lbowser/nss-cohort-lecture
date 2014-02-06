/*
test("name of test", function() {
  deepEqual(actual, expected, "my test message");
});
*/


test("containsChar", function() {
  deepEqual(containsChar, ("mouse", "u"), true, "The letter u is in mouse");
  deepEqual(containsChar, ("mouse", "z"), false, "The letter z is not in mouse");
});
