function cleanup() {
  try {
    throw new Error("Textio processing failed");
  } catch (err) {
    throw new Error("Error in catch block");
  } finally {
  console.log("Cleanup complete");
  }
}


try {
  cleanup();
} catch (err) {
  console.log(err.message);
}

