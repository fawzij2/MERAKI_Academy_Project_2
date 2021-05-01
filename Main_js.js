const accounts = window.localStorage;
const favourite = window.localStorage;
sessionStorage.setItem(`loggedIn`, `false`)
sessionStorage.setItem(`lastvisted` ,`h_page`)
const showsIds = {death:`1376`, aot:`7442`, dragon:`720`, piece:`12`, naruto:`11`, conan:`210`, mushoku:`42323`, dunk:`148`, haikyuu:`8133`, yugi:`442`, academia:`13881`, jujutsu:`42765`, eva:`21`, punch:`10740`, steins:`5646`, rezero:`11209`, stone:`42080`, jojo:`7158`, kimetsu:`41370`, kaguya:`41373`, bunny:`41056`, boku_s5:`43108`, immortal:`43211`, higehiro:`42923`, revengers:`43321`, 86:`43066`, shaman:`43222`, vivy:`43933`, combatant:`43837`, dynazenon:`42888`, voice:`10028`, kimi:`11614`, spirited:`176`, mononoke:`142`, pancreas:`13723`,weather:`42028`, akira:`29`, garden:`7515`, centimeters:`1517` }

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

const transition = (clickedId) => {
    info_page.css(`display`, `block`);
    h_page.css(`display`, `none`);
    a_page.css(`display`, `none`);
    m_page.css(`display`, `none`);
    console.log(clickedId);
    $.getJSON(
        `https://kitsu.io/api/edge/anime/${showsIds[clickedId]}`, (data) => {
            let posterImage = data.data.attributes.posterImage.original
            $(`#poster1`).attr(`src`, data.data.attributes.posterImage.original);
            $(`#ani_title`).text(data.data.attributes.canonicalTitle);
            $(`#rating`).text(`rating ${data.data.attributes.averageRating}`);
            if (data.data.attributes.episodeCount === null){
                $(`#eps`).text(`# of eps:TBD`)
            } else {
            $(`#eps`).text(`# of eps: ${data.data.attributes.episodeCount}`);
            }
            $(`#s_date`).text(`aired in: ${data.data.attributes.startDate}`);
            if (data.data.attributes.endDate === null){
                $(`#e_date`).text(`ongoing`)
            } else {
            $(`#e_date`).text(`ended in: ${data.data.attributes.endDate}`);
            }
            $(`#ani_desc`).text(`${data.data.attributes.description}`);
        })
}

