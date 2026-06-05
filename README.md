# TextioJS

A vanilla JavaScript educational exercise repository for learning core JS concepts through a fictional SMS messaging platform called **Textio**.

## Topics

| Directory | Concepts |
|-----------|----------|
| `Arrays/` | `.length`, `.slice()`, spread `[...]`, destructuring, `for...of`, `.includes()` |
| `Classes/` | `class`, constructor, getters/setters, private fields `#`, `static`, `extends`, `super` |
| `Errors/` | Error objects, `try/catch`, `throw`, `finally` |
| `functions/` | Anonymous functions, default params, IIFEs, early returns, pass-by-value, scopes, conditionals |
| `Loops/` | `for`, `while`, `break`, `continue`, `for...in` |
| `Maps/` | `Map` basics, key types, Map vs Object |
| `Objects/` | Object literals, methods, bracket notation, spread `...`, destructuring, optional chaining `?.`, arrow functions, `this` binding |
| `Promises/` | `Promise` constructor, `async`/`await`, `setTimeout`, microtask ordering |
| `Prototypes/` | `Object.create()`, prototype inheritance chain |
| `Sets/` | `Set` deduplication |
| `TheEventLoop/` | Task queue, microtask queue, non-blocking patterns |
| `Modules/` | ES module `import`/`export` (with HTML demo pages) |
| `Runtimes/` | Browser DOM interaction (with HTML demo page) |

## Testing

Each topic has a custom `unit_test.js` mini-framework and per-concept `*_test.js` files. Run tests with Node:

```bash
node Arrays/array_len_test.js
```

To include submission-only test cases:

```bash
SUBMIT=true node Arrays/array_len_test.js
```

## Development

```bash
npm run dev      # Start Vite dev server for HTML demos
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## License

This project is for educational use as part of the Boot.dev curriculum.
