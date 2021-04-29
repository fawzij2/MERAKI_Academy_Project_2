const accounts = window.localStorage;
const favourite = window.localStorage;
let loggedIn = false
localStorage.setItem(`loggedIn`, loggedIn)

const home = $(`#home`);
const airing = $(`#airing`);
const movies = $(`#movies`);
const login = $(`#login`)
const h_page = $(`#home_page`);
const a_page = $(`#airing_page`);
const m_page = $(`#movies_page`);
const log_reg = $(`#log_reg`);
const new_acc = $(`#new_a`)
const log_button = $(`#log_button`)
const reg_button = $(`#reg_button`)


home.on(`click`, () => {
    h_page.css(`display`, `block`)
    a_page.css(`display`, `none`)
    m_page.css(`display`, `none`)
    log_reg.css(`display`, `none`)
});
airing.on(`click`, () => {
    h_page.css(`display`, `none`)
    a_page.css(`display`, `block`)
    m_page.css(`display`, `none`)
    log_reg.css(`display`, `none`)
});
movies.on(`click`, () => {
    h_page.css(`display`, `none`)
    a_page.css(`display`, `none`)
    m_page.css(`display`, `block`)
    log_reg.css(`display`, `none`)
});
login.on(`click`, () => {
    h_page.css(`display`, `none`)
    a_page.css(`display`, `none`)
    m_page.css(`display`, `none`)
    log_reg.css(`display`, `block`)
    $(`#log1`).css(`display`, `block`)
    $(`#reg`).css(`display`, `none`)
});
new_acc.on(`click`, () => {
    $(`#log1`).css(`display`, `none`);
    $(`#reg`).css(`display`, `block`);
});
log_button.on(`click`, () => {
    const user = $(`#l_user`).val();
    console.log(user);
    const pass = $(`#l_pass`).val();
    console.log(pass);
    if (accounts[user] === pass){
        loggedIn = true
        login.text(`welcome` + user);
    } else {
        $(`#user_check`).css(`display`, `block`)
    }
});

reg_button.on(`click`, () => {
    const user = $(`#r_user`).val();
    console.log(user);
    const pass = $(`#r_pass`).val();
    console.log(pass);
    const con_pass = $(`#c_pass`).val();
    console.log(con_pass);
    if (!accounts[user]) {
        if (pass === con_pass){
            accounts[user] = pass
        } else {
            $(`#pass_check`).css(`display`, `block`)
        }
    } else {
        $(`#userCheck`).css(`display`, `block`)
    }
});