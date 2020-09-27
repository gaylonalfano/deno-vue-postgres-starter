interface User {
  id: string;
  username: string;
}

const users = new Map<string, User>();

users.set("1", {
  id: "1",
  username: "Gaylon",
});

users.set("2", {
  id: "2",
  username: "Ashley",
});

users.set("3", {
  id: "3",
  username: "Aaron",
});

export default users;
