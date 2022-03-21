export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function formateDateOnly(date) {
  return date.toISOString().substring(0, 10);
}

export function getUserSeed() {
  return [
    {
      id: uuidv4(),
      firstName: "John",
      lastName: "Doe",
      email: "jon@yopmail.com",
      designation: "SWE",
      dateOfBirth: formateDateOnly(new Date(1996, 11, 11)),
      createdDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
    },
    {
      id: uuidv4(),
      firstName: "Marilyn",
      lastName: "M Ray",
      email: "marlin@yopmail.com",
      designation: "Product Manager",
      dateOfBirth: formateDateOnly(new Date(1995, 10, 12)),
      createdDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 2),
    },
    {
      id: uuidv4(),
      firstName: "Dirk P",
      lastName: "Peeples",
      email: "dirik@yopmail.com",
      designation: "Sys Admin",
      dateOfBirth: formateDateOnly(new Date(1994, 10, 22)),
      createdDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
    },
    {
      id: uuidv4(),
      firstName: "Wendy",
      lastName: "K. Heinz",
      email: "wendy@yopmail.com",
      designation: "Quality Assurance",
      dateOfBirth: formateDateOnly(new Date(1993, 7, 12)),
      createdDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 4),
    },
    {
      id: uuidv4(),
      firstName: "George",
      lastName: "M. Munoz",
      email: "george@yopmail.com",
      designation: "Admin",
      dateOfBirth: formateDateOnly(new Date(1992, 8, 10)),
      createdDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 5),
    },
  ];
}

export function saveToLocalStorage(data, key) {
  window.localStorage.removeItem(key);
  window.localStorage.setItem(key, JSON.stringify(data));
}

export function calculateAge(date) {
  var today = new Date();
  var birthDate = new Date(date);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}