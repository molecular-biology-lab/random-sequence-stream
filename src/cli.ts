#!/usr/bin/env node
import process from "process";
import RandomSequenceStream from "./";
import meow from "meow";

const cli = meow(
  `
	Usage
	  $ random-sequence-stream

	Options
    --size, -s  Size of sequence.
    --DNA, -d   Generate DNA Sequence.
    --RNA, -r   Generate RNA Sequence.

	Examples
	  $ random-sequence-stream --size=8 --DNA
    5'-ATGCATGC-3'
`,
  {
    flags: {
      help: {
        type: "boolean",
        alias: "h",
        default: false,
      },
      version: {
        type: "boolean",
        alias: "v",
        default: false,
      },
      size: {
        type: "number",
        alias: "s",
        default: -1,
      },
      dna: {
        type: "boolean",
        alias: "d",
      },
      DNA: {
        type: "boolean",
      },
      rna: {
        type: "boolean",
        alias: "r",
      },
      RNA: {
        type: "boolean",
      },
    },
  }
);

if (cli.flags.help) {
  cli.showHelp();
} else if (cli.flags.version) {
  cli.showVersion();
} else {
  let nucleotide: "DNA" | "RNA" | undefined;
  if (cli.flags.DNA || cli.flags.dna) {
    nucleotide = "DNA";
  } else if (cli.flags.RNA || cli.flags.rna) {
    nucleotide = "RNA";
  }

  const size = cli.flags.size;

  const randomSequenceStream = new RandomSequenceStream({
    nucleotide,
    size,
  });
  randomSequenceStream.pipe(process.stdout);
}
