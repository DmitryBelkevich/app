export default class Tuning extends Array {
  isStandard() {
    const isEqual = (a, b) => a.length === b.length && a.every((val, i) => val === b[i]);
    
    // *** Guitars ***
    
    if (isEqual(this, ["E", "A", "D", "G", "B", "E"]))
      return true;

    // *** Bass Guitars ***
    
    if (isEqual(this, ["E", "A", "D", "G"]))
      return true;

    // *** 5-strings Bass Guitars ***
    
    if (isEqual(this, ["B", "E", "A", "D", "G"]))
      return true;
    
    return false;
  }

  droppedTo() {
    const isEqual = (a, b) => a.length === b.length && a.every((val, i) => val === b[i]);
    
    // *** Guitars ***
    
    // standards
    if (isEqual(this, ["E", "A", "D", "G", "B", "E"]))//0
      return 0;

    if (isEqual(this, ["D#", "G#", "C#", "F#", "A#", "D#"]))//-1
      return -1;

    if (isEqual(this, ["D", "G", "C", "F", "A", "D"]))//-2
      return -2;

    if (isEqual(this, ["C#", "F#", "B", "E", "G#", "C#"]))//-3
      return -3;
    
    // drops
    if (isEqual(this, ["D", "A", "D", "G", "B", "E"]))//0
      return 0;

    if (isEqual(this, ["C#", "G#", "C#", "F#", "A#", "D#"]))//-1
      return -1;

    if (isEqual(this, ["C", "G", "C", "F", "A", "D"]))//-2
      return -2;

    if (isEqual(this, ["B", "F#", "B", "E", "G#", "C#"]))//-3
      return -3;

    // *** Bass Guitars ***

    // standards
    if (isEqual(this, ["E", "A", "D", "G"]))//0
      return 0;

    if (isEqual(this, ["D#", "G#", "C#", "F#"]))//-1
      return -1;

    if (isEqual(this, ["D", "G", "C", "F"]))//-2
      return -2;

    if (isEqual(this, ["C#", "F#", "B", "E"]))//-3
      return -3;

    // drops
    if (isEqual(this, ["D", "A", "D", "G"]))//0
      return 0;

    if (isEqual(this, ["C#", "G#", "C#", "F#"]))//-1
      return -1;

    if (isEqual(this, ["C", "G", "C", "F"]))//-2
      return -2;

    if (isEqual(this, ["B", "F#", "B", "E"]))//-3
      return -3;

    // *** 5-strings Bass Guitars ***

    if (isEqual(this, ["B", "E", "A", "D", "G"]))//0
      return 0;

    if (isEqual(this, ["D#", "D#", "G#", "C#", "F#", "A#"]))//-1
      return -1;

    if (isEqual(this, ["A", "D", "G", "C", "F"]))//-2
      return -2;

    if (isEqual(this, ["G#", "C#", "F#", "B", "E"]))//-3
      return -3;
  }

  get title() {
    const isEqual = (a, b) => a.length === b.length && a.every((val, i) => val === b[i]);
    
    // *** Guitars ***
    
    // standards
    if (isEqual(this, ["E", "A", "D", "G", "B", "E"]))//0
      return "Standard E";

    if (isEqual(this, ["D#", "G#", "C#", "F#", "A#", "D#"]))//-1
      return "Standard D#";

    if (isEqual(this, ["D", "G", "C", "F", "A", "D"]))//-2
      return "Standard D";

    if (isEqual(this, ["C#", "F#", "B", "E", "G#", "C#"]))//-3
      return "Standard C#";
    
    // drops
    if (isEqual(this, ["D", "A", "D", "G", "B", "E"]))//0
      return "Drop D";

    if (isEqual(this, ["C#", "G#", "C#", "F#", "A#", "D#"]))//-1
      return "Drop C#";

    if (isEqual(this, ["C", "G", "C", "F", "A", "D"]))//-2
      return "Drop C";

    if (isEqual(this, ["B", "F#", "B", "E", "G#", "C#"]))//-3
      return "Drop B";

    // *** Bass Guitars ***

    // standards
    if (isEqual(this, ["E", "A", "D", "G"]))//0
      return "Standard E";

    if (isEqual(this, ["D#", "G#", "C#", "F#"]))//-1
      return "Standard D#";

    if (isEqual(this, ["D", "G", "C", "F"]))//-2
      return "Standard D";

    if (isEqual(this, ["C#", "F#", "B", "E"]))//-3
      return "Standard C#";

    // drops
    if (isEqual(this, ["D", "A", "D", "G"]))//0
      return "Drop D";

    if (isEqual(this, ["C#", "G#", "C#", "F#"]))//-1
      return "Drop C#";

    if (isEqual(this, ["C", "G", "C", "F"]))//-2
      return "Drop C";

    if (isEqual(this, ["B", "F#", "B", "E"]))//-3
      return "Drop B";

    // *** 5-strings Bass Guitars ***

    if (isEqual(this, ["B", "E", "A", "D", "G"]))//0
      return "Standard E";

    if (isEqual(this, ["D#", "D#", "G#", "C#", "F#", "A#"]))//-1
      return "Standard D#";

    if (isEqual(this, ["A", "D", "G", "C", "F"]))//-2
      return "Standard D";

    if (isEqual(this, ["G#", "C#", "F#", "B", "E"]))//-3
      return "Standard C#";
  }
}
