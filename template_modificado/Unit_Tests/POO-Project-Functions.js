users = [{
    username: 'Fábio',
    email: 'fabio@gmail.com',
    password: "1234"
  },
  {
    username: 'Tomás',
    email: 'tomas@gmail.com',
    password: "123"
  },
]

// ADICIONAR UTILIZADOR
exports.add = function (username, email, password) {
  username = username.trim()
  email = email.trim()

  if (users.some((user) => user.username === username)) {
    throw Error(`O nome de utilizador "${username}" já existe!`);

  } else if (username.includes(" ")) {
    throw Error(`Nome de utilizador inválido!`);

  } else if (users.some((user) => user.email === email) || email.indexOf("@") < 1 || email.includes(" ")) { 
    throw Error(`Email inválido!`);

  } else {

    users.push({
      username: username,
      email: email,
      password:password
    }, )

    return users
  }
}

// LOGIN DO UTILIZADOR
exports.login = function (usernameOrEmail, password) {
  usernameOrEmail = usernameOrEmail.trim()
  password = password.trim()

  const userByUsername = users.find(
    (user) => user.username === usernameOrEmail && user.password === password
  );
  if (userByUsername != null) { //Se o utilizador e a password estão válidos
    return true;
  }

  const userByEmail = checkLoginWithEmail(usernameOrEmail, password)
  if (userByEmail != null) { //Se o email e a password estão válidos
    return true;
  }

  throw Error("Login Inválido!");
}

// VERIFICAR SE O UTILIZADOR QUERIA FAZER LOGIN COM O EMAIL
function checkLoginWithEmail(email, password) {
  return users.find(
    (user) => user.email === email && user.password === password
  );
}