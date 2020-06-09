# Random Sequence Stream

![https://github.com/molecular-biology-lab/random-sequence-stream/actions](https://github.com/molecular-biology-lab/random-sequence-stream/workflows/publish/badge.svg)

Randomized DNA/RNA sequence generator.

## Usage

### CLI demo

```shell
$ npx random-sequence-stream --size=500
npx: installed 62 in 2.695s
5'-TGGACCCACGACGAGAAAAGCAATGTGGAGGTTCCCTAATCTCGCCTCATTGTCGTTTTTACCTAGTATTCAAGAGAGATCATCACGCGTGAACCGGTGTAGGGATTTTCTTAGGTCCAAGGAAAATTGTATATTTAAATGCGACATATCTGATATACGGGATGCCCCGGTAGGCTGGAGAGAGGTTACGGTCCTATGCTCGAGGTCCGGGAAATGTTTCCCAACTCTGCTCGCATAGTGGCGTACCGCATTAGCCAAGGTTACACGGTGTGCCACTCTAGTGATGCTATGGCGAGCCGCTGTGCCAGGATTAATGTTATTCAATAGACTTCACCTACATTGGTTCCGTCCAGCCTGTCAGTACTTACAGAGTTACCTTTAAGAGCCGCCTACTAGGGCAGCGAACTATGTTCCACGTGTGCTGATCCCTATATATGGGGAGTGGCAATGCATATAGATTTGTATACGCTAGCAAGTATTCTTCCAGGCATGATGCGCGT-3'
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
