document.addEventListener("DOMContentLoaded", function () {
  const codeArea = document.querySelector(".code-area");
  const inputArea = document.querySelector(".input-area");
  const outputArea = document.querySelector(".output-area");
  const runButton = document.querySelector(".controls button");
  const languageSelect = document.querySelector(".controls select");
  const lineNumbers = document.querySelector(".line-numbers");
  // Function to generate line numbers
  const updateLineNumbers = () => {
    const numberOfLines = codeArea.value.split("\n").length;
    lineNumbers.innerHTML = Array(numberOfLines)
      .fill("<span></span>")
      .map((_, idx) => idx + 1)
      .join("<br>");
  };
  // Initial line numbers
  updateLineNumbers();
  // Update line numbers on input
  codeArea.addEventListener("input", () => {
    updateLineNumbers();
  });
  // Event listener for the Run button
  runButton.addEventListener("click", () => {
    const code = codeArea.value;
    const input = inputArea.value;
    const language = languageSelect.value;
    outputArea.value = ""; // Clear previous output
    // Basic error handling
    if (!code) {
      outputArea.value = "Error: No code to execute.";
      return;
    }
    try {
      let result;
      switch (language) {
        case "JavaScript":
          result = executeJavaScript(code, input);
          break;
        case "Python":
          result =
            "Python execution is not supported in the browser. Use a server-side solution.";
          break;
        case "Java":
          result =
            "Java execution is not supported in the browser. Use a server-side solution.";
          break;
        default:
          outputArea.value = "Error: Select a language.";
          return;
      }
      outputArea.value = result;
    } catch (error) {
      outputArea.value = `Error: ${error.message}`;
    }
  });
  // Function to execute JavaScript code
  function executeJavaScript(code, input) {
    try {
      // Override console.log to capture output
      let consoleOutput = "";
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        consoleOutput += args.map((arg) => String(arg)).join(" ") + "\n";
        originalConsoleLog(...args); // Still log to the console
      };
      // Create a function to simulate input
      let inputIndex = 0;
      const getInput = () => {
        const inputs = input.split("\n");
        if (inputIndex < inputs.length) {
          return inputs[inputIndex++];
        } else {
          return ""; // Or handle end of input as needed
        }
      };
      // Prepare the environment for the code
      const context = {
        console: { log: console.log },
        getInput: getInput,
      };
      // Create a function from the user's code
      const execute = new Function("console", "getInput", code);
      // Execute the code
      execute(context.console, context.getInput);
      // Restore original console.log
      console.log = originalConsoleLog;
      // Return the captured console output
      return consoleOutput;
    } catch (error) {
      throw new Error(error.message);
    }
  }
});
