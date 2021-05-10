const tmap = [
  ["G", "C", "T", "A"],
  ["C", "G", "A", "U"],
];
class Transcriptor {
  toRna(dna: string): string {
    let rna = "";
    for (let i = 0; i < dna.length; i++) {
      if (!tmap[0].includes(dna[i])) {
        throw new Error("Invalid input DNA.");
      }
      let index = tmap[0].indexOf(dna[i]);
      rna += tmap[1][index];
    }
    return rna;
  }
}

export default Transcriptor
