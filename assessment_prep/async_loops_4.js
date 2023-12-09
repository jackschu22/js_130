//

for (let i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? 'Go!' : i);
  }, (5 - i) * 1000)
}

// Book answer:
// Block-scoped variables (declared with `let` or `const`, although `const` can't be reassigned)
// are confined to the block they're defined in.