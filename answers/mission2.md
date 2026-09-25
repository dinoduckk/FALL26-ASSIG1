# Mission 2: Console attack, sabotage the purge button

## Evidence

The button dodges (two positions), with my attacker counter visible:

![position 1](img/m2-pos1.png)
![position 2](img/m2-pos2.png)

A legitimate click does nothing after my attack (log still reads "No purge requested"):

![click does nothing](img/m2-click.png)

## My attack script

Paste the full contents of `attacks/m2_runaway.js`, with one sentence per block:

```js
(() => {
  const zone = document.getElementById("danger-zone");
  const original = document.getElementById("purge-btn");
  //created a variable that will count how many times the button "runs away"
  let counter = 0;

  // removed the portal's legitimate click listener.
  original.replaceWith(original.cloneNode(true));
  // stopped keyboard users from reaching the button.
  window.addEventListener('keydown', () => alert('Not today, buddy.'));
  // made the button jump inside zone on every approach, no overlap.
  zone.addEventListener('mouseover', () => movebtn())
  function movebtn() {
    counter ++;
    original.style.left = 3 + 'px';
    original.style.top = 3 + 'px';
  }
  // created a NEW element that shows the dodge counter.
  console.log("Runaway counter: ", counter);
  // my creative twist.
  console.log("Couldn't catch me!");

  console.log("[attack] runaway button installed");
})();
```

- **How do you remove the portal's original click handler without reloading?**

  > your answer

- **How do you stop a keyboard user from triggering the button?**

  > By cloning it without the capability of being pressed

- **How do you keep the button fully inside `#danger-zone` and off its previous position?**

  > your answer

## Creativity: my twist, R5

> your answer

## Think like a defender

The mouse trick is theater. The real problem is that attacker code ran in the operator's page at all. If "Purge All Incidents" were a real, destructive action:

1. Where must the actual protection live?

   > your answer

2. What should the server check on every purge request? Name at least two things.

   > your answer

3. Which Unit 1.3 slide or takeaway does this map to?

   > Slide 20-23

## Documentation log

| Page I used, with URL | One thing I learned from it |
|---|---|
| | |
