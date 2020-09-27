interface Message {
  id: string;
  text: string;
  userId: string;
}

const messages = new Map<string, Message>();

messages.set("1", {
  id: "1",
  text: "This is message 1 text from userId 3",
  userId: "3",
});

messages.set("2", {
  id: "2",
  text: "This is message 2 text from userId 1",
  userId: "1",
});
messages.set("3", {
  id: "3",
  text: "This is message 3 text from userId 2",
  userId: "2",
});

export default messages;
