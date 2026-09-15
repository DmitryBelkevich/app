export default class Tuning {
  static isStandard(tuning) {
    const isEqual = (a, b) => a.length === b.length && a.every((val, i) => val === b[i]);
    
    // *** Guitars ***
    
    if (isEqual(tuning, ["E", "A", "D", "G", "B", "E"]))
      return true;

    // *** Bass Guitars ***
    
    if (isEqual(tuning, ["E", "A", "D", "G"]))
      return true;

    // *** 5-strings Bass Guitars ***
    
    if (isEqual(tuning, ["B", "E", "A", "D", "G"]))
      return true;
    
    return false;
  }

  static getTitle(tuning) {
    const isEqual = (a, b) => a.length === b.length && a.every((val, i) => val === b[i]);
    
    // *** Guitars ***
    
    // standards
    if (isEqual(tuning, ["E", "A", "D", "G", "B", "E"]))//0
      return "Standard E";

    if (isEqual(tuning, ["D#", "G#", "C#", "F#", "A#", "D#"]))//-1
      return "Standard D#";

    if (isEqual(tuning, ["D", "G", "C", "F", "A", "D"]))//-2
      return "Standard D";

    if (isEqual(tuning, ["C#", "F#", "B", "E", "G#", "C#"]))//-3
      return "Standard C#";
    
    // drops
    if (isEqual(tuning, ["D", "A", "D", "G", "B", "E"]))//0
      return "Drop D";

    if (isEqual(tuning, ["C#", "G#", "C#", "F#", "A#", "D#"]))//-1
      return "Drop C#";

    if (isEqual(tuning, ["C", "G", "C", "F", "A", "D"]))//-2
      return "Drop C";

    if (isEqual(tuning, ["B", "F#", "B", "E", "G#", "C#"]))//-3
      return "Drop B";

    // *** Bass Guitars ***

    // standards
    if (isEqual(tuning, ["E", "A", "D", "G"]))//0
      return "Standard E";

    if (isEqual(tuning, ["D#", "G#", "C#", "F#"]))//-1
      return "Standard D#";

    if (isEqual(tuning, ["D", "G", "C", "F"]))//-2
      return "Standard D";

    if (isEqual(tuning, ["C#", "F#", "B", "E"]))//-3
      return "Standard C#";

    // drops
    if (isEqual(tuning, ["D", "A", "D", "G"]))//0
      return "Drop D";

    if (isEqual(tuning, ["C#", "G#", "C#", "F#"]))//-1
      return "Drop C#";

    if (isEqual(tuning, ["C", "G", "C", "F"]))//-2
      return "Drop C";

    if (isEqual(tuning, ["B", "F#", "B", "E"]))//-3
      return "Drop B";

    // *** 5-strings Bass Guitars ***

    if (isEqual(tuning, ["B", "E", "A", "D", "G"]))//0
      return "Standard E";

    if (isEqual(tuning, ["D#", "D#", "G#", "C#", "F#", "A#"]))//-1
      return "Standard D#";

    if (isEqual(tuning, ["A", "D", "G", "C", "F"]))//-2
      return "Standard D";

    if (isEqual(tuning, ["G#", "C#", "F#", "B", "E"]))//-3
      return "Standard C#";
  }
}
