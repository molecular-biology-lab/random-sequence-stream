import { Readable } from "stream";
import crypto from "crypto";

type Options = {
  nucleotide?: "DNA" | "RNA";
  size?: number;
};
export default class RandomSequenceStream extends Readable {
  private nucleotide: "DNA" | "RNA" = "DNA";
  private end5 = "5'-";
  private end3 = "-3'";
  private dnaBase = ["A", "T", "G", "C"];
  private rnaBase = ["A", "U", "G", "C"];
  private size = -1;

  constructor(options: Options = {}) {
    super();
    if (options.nucleotide) {
      this.nucleotide = options.nucleotide;
    }
    if (typeof options.size === "number") {
      this.size = options.size;
    }
    this.push(this.end5);
  }

  _read() {
    this.push(this.randomBase());
    if (this.size > 0) {
      this.size--;
    }

    if (this.size === 0) {
      this.push(this.end3);
      this.destroy();
    }
  }

  private randomBase() {
    const hex = crypto.randomBytes(1).toString("hex");
    const index = parseInt(hex, 16) % 4;
    if (this.nucleotide === "DNA") {
      return this.dnaBase[index];
    } else {
      return this.rnaBase[index];
    }
  }
}
