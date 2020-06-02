# Random Sequence Stream

Randomized DNA/RNA sequence generator.

## Usage

### CLI demo

```shell
$ npx random-sequence-stream --DNA
$ npx random-sequence-stream --RNA
```

### As a dependency

```shell
$ yarn add random-sequence-stream
```

```typescript
import RandomSequenceStream from "random-sequence-stream";
const randomSequenceStream = new RandomSequenceStream({ DNA: true });
randomSequenceStream.pipe(process.stdout);
```
