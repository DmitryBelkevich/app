export default class UnitTest {
  check(title, result, expected) {
    const condition = result == expected;
    
    const icons = {
      true: "🟢",
      false: "🔴",
    }
    
    const message = icons[condition] + title + ": " + result + " | " + expected;

    console.log(message);
  }
}
