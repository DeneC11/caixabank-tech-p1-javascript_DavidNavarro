
export class User {
  constructor(gender, name, location, login, email, picture) {
    this.gender = gender;
    this.name = name;
    this.location = location;
    this.login = login;
    this.email = email;
    this.picture = picture;
  }

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

export const loadUsers = async (n) => {
  const response = await fetch(`https://randomuser.me/api?results=${n}`);
  const { results } = await response.json();
  const users = [];
  for (const { gender, name, location, login, email, picture } of results) {
    users.push(new User(gender, name, location, login, email, picture));
  }
  return users;
};
