// =====================================================================
// MISSION 2 ATTACK: The Runaway Button
// =====================================================================
// Write your attack here, then COPY the whole file and PASTE it into the
// DevTools Console of http://localhost:3000.
//
// Everything is wrapped in (() => { ... })(); on purpose. It is an
// immediately invoked function: it lets you paste the script again after
// a page reload without "Identifier has already been declared" errors.
//
// Author: Bri Edwards
// =====================================================================

(() => {
  const zone = document.getElementById("danger-zone");
  const original = document.getElementById("purge-btn");
  let counter = 0;

  // TODO R1: remove the portal's legitimate click listener.
  original.replaceWith(original.cloneNode(true));
  // TODO R2: stop keyboard users from reaching the button.
  window.addEventListener('keydown', () => alert('Not today, buddy.'));
  // TODO R3: make the button jump inside zone on every approach, no overlap.
  zone.addEventListener('mouseover', () => movebtn())
  function movebtn() {
    counter ++;
    original.style.left = 3 + 'px';
    original.style.top = 3 + 'px';
  }
  // TODO R4: create a NEW element that shows the dodge counter.
  console.log("Runaway counter: ", counter);
  // TODO R5: your creative twist.
  console.log("Couldn't catch me!");

  console.log("[attack] runaway button installed");
})();
