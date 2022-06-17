const {add,login} = require('./POO-Project-Functions')

/* Função que adiciona um utilizador */
describe('Add User', () => {
    const password = "123"

    test('Username already exists', () => {
        const username = "Fábio"
        expect(() => add(username, 'fabio@gmail.com', password)).toThrow(`O nome de utilizador "${username}" já existe!`);
    });

    test('Username with at least one whitespace', () => {
        expect(() => add("to mas", "tomas@gmail.com", password)).toThrow(`Nome de utilizador inválido!`);
    });
    
    describe('Invalid Email', () => {

        test('Email already exists', () => {
            expect(() => add("Miguel","tomas@gmail.com", password)).toThrow(`Email inválido!`);
        });

        test('Email without @', () => {
            expect(() => add("Miguel","tomasgmail.com", password)).toThrow(`Email inválido!`);
        });

        test('Email with at least one whitespace', () => {
            expect(() => add("Miguel","tomas gmail.com", password)).toThrow(`Email inválido!`);
        });
        
    });

    test('User added successfully', () => {
        const users = add("Miguel", "miguel@gmail.com", password)
        expect(users.some(user => user.username === "Miguel")).toBeTruthy() ;
    });
})

/* Função que permite o login de um utilizador */
describe('Login User', () => {

    test('Logged successfully with username', () => {
        loggedSuccessfully = login("    Tomás    ", '123')
        expect(loggedSuccessfully).toBeTruthy();
    });

    test('Logged successfully with email', () => {
        loggedSuccessfully = login("    fabio@gmail.com", '1234')
        expect(loggedSuccessfully).toBeTruthy();
    });

    describe('Logged insuccessfully', () => {

        test('Wrong email', () => {
            expect(()=> login("    fabio@gmail.co    ", '1234') ).toThrow("Login Inválido!") ;
        });
    
        test('Wrong username', () => {
            expect(()=> login("fabi    ", '1234') ).toThrow("Login Inválido!") ;
        });
    
        test('Wrong password', () => {
            expect(()=> login("Fábio    ", '123') ).toThrow("Login Inválido!") ;
        });
    })
    
})