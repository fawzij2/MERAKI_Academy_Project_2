const accounts = window.localStorage;
const favourite = window.localStorage;
sessionStorage.setItem(`loggedIn`, `false`)
sessionStorage.setItem(`lastvisted` ,`h_page`)

const home = $(`#home`);
const airing = $(`#airing`);
const movies = $(`#movies`);
const login1 = $(`#login1`);
const loggedIn = $(`#loggedIn`)
const signOut = $(`#login2`);
const h_page = $(`#home_page`);
const a_page = $(`#airing_page`);
const m_page = $(`#movies_page`);
const log_reg = $(`#log_reg`);
const info_page = $(`#info_page`)
const new_acc = $(`#new_a`)
const log_button = $(`#log_button`)
const reg_button = $(`#reg_button`)
const panel = $(`.overview`)


home.on(`click`, () => {
    h_page.css(`display`, `block`);
    a_page.css(`display`, `none`);
    m_page.css(`display`, `none`);
    log_reg.css(`display`, `none`);
    info_page.css(`display`, `none`);
    sessionStorage.setItem(`lastvisted` ,`h_page`);
});
airing.on(`click`, () => {
    h_page.css(`display`, `none`);
    a_page.css(`display`, `block`);
    m_page.css(`display`, `none`);
    log_reg.css(`display`, `none`);
    info_page.css(`display`, `none`);
    sessionStorage.setItem(`lastvisted` ,`a_page`);
});
movies.on(`click`, () => {
    h_page.css(`display`, `none`);
    a_page.css(`display`, `none`);
    m_page.css(`display`, `block`);
    log_reg.css(`display`, `none`);
    info_page.css(`display`, `none`);
    sessionStorage.setItem(`lastvisted` ,`m_page`);
});
login1.on(`click`, () => {
    h_page.css(`display`, `none`);
    a_page.css(`display`, `none`);
    m_page.css(`display`, `none`);
    log_reg.css(`display`, `block`);
    $(`#log1`).css(`display`, `block`);
    $(`#reg`).css(`display`, `none`);
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
        // loggedIn = true
        // let welcomeText = `welcome ${user}`
        login1.css(`display`, `none`);
        loggedIn.text(`welcome ${user}`);
        loggedIn.css(`display`, `block`);
        signOut.css(`display`, `block`);
        sessionStorage.setItem(`loggedIn`, `true`);
        log_reg.css(`display`, `none`)
        let lastVisited = sessionStorage.getItem(`lastvisted`);
        sessionStorage.setItem(`loggedIn`, `true`)
            if (lastVisited === `h_page`){
                h_page.css(`display`, `block`)
            } else if (lastVisited === `a_page`){
                a_page.css(`display`, `block`)
            } else if (lastVisited === `m_page`){
                m_page.css(`display`, `block`)
            }
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
            log_reg.css(`display`, `none`)
            let lastVisited = sessionStorage.getItem(`lastvisted`);
            // let welcomeText1 = `welcome` + user;
            loggedIn.text(`welcome ${user}`);
            loggedIn.css(`display`, `block`);
            login1.css(`display`, `none`);
            signOut.css(`display`, `block`);
            sessionStorage.setItem(`loggedIn`, `true`)
            if (lastVisited === `h_page`){
                h_page.css(`display`, `block`)
            } else if (lastVisited === `a_page`){
                a_page.css(`display`, `block`)
            } else if (lastVisited === `m_page`){
                m_page.css(`display`, `block`)
            }
        } else {
            $(`#pass_check`).css(`display`, `block`)
        }
    } else {
        $(`#userCheck`).css(`display`, `block`)
    }
});

signOut.on(`click`, () => {
    login1.css(`display`, `block`);
    loggedIn.text(``);
    signOut.css(`display`, `none`);
    log_reg.css(`display`, `none`)
    let lastVisited = sessionStorage.getItem(`lastvisted`);
    if (lastVisited === `h_page`){
        h_page.css(`display`, `block`)
    } else if (lastVisited === `a_page`){
        a_page.css(`display`, `block`)
    } else if (lastVisited === `m_page`){
        m_page.css(`display`, `block`)
    }
})

// just for testing purposes
$.getJSON(
    `https://kitsu.io/api/edge/anime/1376`, (data) => {
        console.log(data);
    }
)

panel.on(`click`, () => {
    info_page.css(`display`, `block`);
    h_page.css(`display`, `none`);
    a_page.css(`display`, `none`);
    m_page.css(`display`, `none`);
    $.getJSON(
        `https://kitsu.io/api/edge/anime/1376`, (data) => {
            let posterImage = data.data.attributes.posterImage.original
            console.log(posterImage);
            $(`#poster1`).attr(`src`, data.data.attributes.posterImage.original);
            $(`#ani_title`).text(data.data.attributes.canonicalTitle);
            $(`#rating`).text(data.data.attributes.averageRating);
            $(`#eps`).text(data.data.attributes.episodeCount);
            $(`#s_date`).text(data.data.attributes.startDate);
            $(`#e_date`).text(data.data.attributes.endDate);
            $(`#ani_desc`).text(data.data.attributes.description);
            // $(`#`)
            // $(`#`)
            // $(`#`)
            // $(`#`)

        })
})