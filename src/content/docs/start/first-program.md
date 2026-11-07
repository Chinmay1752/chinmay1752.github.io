---
title: Your first program
description: Make a project with fels new, build it, run it and test it.
---

`fels new` sets up a project with a build file, a small program and a test:

```sh
fels new hello
cd hello
fels build run
fels test
```

This is the `src/main.fels` it writes for you:

```fels
#import std.io;

// The sum of the numbers from 1 to `n`.
sum_to :: fn(n: i32) -> i32 {
    total := 0;
    i := 1;
    while i <= n {
        total += i;
        i += 1;
    }
    return total;
}

main :: fn() -> i32 {
    io::println("Hello from hello!");
    io::println("1 + 2 + ... + 10 = {sum_to(10)}");
    return 0;
}

#test
sum_to_adds_the_numbers :: fn(t: *Test) {
    t.eq(sum_to(0), 0);
    t.eq(sum_to(1), 1);
    t.eq(sum_to(10), 55);
}
```

A few things to notice:

- `name :: value` declares a constant. A function is a constant whose value is a `fn`.
- `name := value` declares a variable, and its type comes from the value.
- Text in braces inside a string is printed in its place: `{sum_to(10)}`.
- A `#test` function takes a `*Test` and checks things with it. `fels test` runs them all.

For a single file without a project, `fels run hello.fels` builds and runs it in one step.

## Where to go next

- The [overview](/docs/overview/) walks through the whole language.
- [Memory and zones](/docs/memory-zones/) explains how memory works without a garbage collector.
- [Compile-time execution](/docs/comptime/) shows what `#run` can do.
- The [examples](https://github.com/fels-lang/fels/tree/main/examples) folder has a raytracer, a
  raycaster, a Win32 disk analyzer, a UEFI app and small kernels.
