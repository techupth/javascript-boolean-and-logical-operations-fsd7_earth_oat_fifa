let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here
isOver18 = true;
hasCriminalBlacklist = false;
isAllow = true;
isAllow = (isOver18 => 18) && !hasCriminalBlacklist;
console.log(isAllow);
