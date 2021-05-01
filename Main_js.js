const accounts = window.localStorage;
const favourite = window.localStorage;
sessionStorage.setItem(`loggedIn`, `false`)
sessionStorage.setItem(`lastvisted` ,`h_page`)
const showsIds = {death:`1376`, aot:`7442`, dragon:`720`, piece:`12`, naruto:`11`, conan:`210`, mushoku:`42323`, dunk:`148`, haikyuu:`8133`, yugi:`442`, academia:`13881`, jujutsu:`42765`, eva:`21`, punch:`10740`, steins:`5646`, rezero:`11209`, stone:`42080`, jojo:`7158`, kimetsu:`41370`, kaguya:`41373`, bunny:`41056`, boku_s5:`43108`, immortal:`43211`, higehiro:`42923`, revengers:`43321`, 86:`43066`, shaman:`43222`, vivy:`43933`, combatant:`43837`, dynazenon:`42888`, voice:`10028`, kimi:`11614`, spirited:`176`, mononoke:`142`, pancreas:`13723`,weather:`42028`, akira:`29`, garden:`7515`, centimeters:`1517` }
localStorage.setItem(`currentColor`, `blue`)

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
            $(`#video`).attr(`src`, `https://www.youtube.com/embed/${data.data.attributes.youtubeVideoId}`)
            console.log(`https://www.youtube.com/embed/${data.data.attributes.youtubeVideoId}`);
        })
}

$(`#home`).on(`mouseover`,() => {
    $(`#home`).animate({fontSize:28},`linear`);
});
$(`#home`).on(`mouseout`,() => {
    $(`#home`).animate({fontSize:20},`linear`);
});
$(`#airing`).on(`mouseover`,() => {
    $(`#airing`).animate({fontSize:28},`linear`);
});
$(`#airing`).on(`mouseout`,() => {
    $(`#airing`).animate({fontSize:20},`linear`);
});
$(`#movies`).on(`mouseover`,() => {
    $(`#movies`).animate({fontSize:28},`linear`);
});
$(`#movies`).on(`mouseout`,() => {
    $(`#movies`).animate({fontSize:20},`linear`);
});
$(`#login1`).on(`mouseover`,() => {
    $(`#login1`).animate({fontSize:28},`linear`);
});
$(`#login1`).on(`mouseout`,() => {
    $(`#login1`).animate({fontSize:20},`linear`);
});

$(`#changeColor`).on(`click`, () => {
    const current = localStorage.getItem(`currentColor`)
    if (current === `blue`){
        $(`#changeColor`).on(`mouseout` ,() => {
            $(`#changeColor`).css(`background-color`,`#14213d`)
            $(`#changeColor`).css(`border`, `solid #fca311 2px`);
        })
        $(`#changeColor`).on(`mouseover`, () => {
            $(`#changeColor`).css(`background-color`,`#f1faee`)
            $(`#changeColor`).css(`border`, `solid #1d3557 2px`);
        })
        $(`body`).css(`background-color`, `#14213d`);
        $(`.colorScheme1`).css(`color`, `#000000`);
        $(`.colorScheme2`).css(`border`, `solid #FFFFFF 2px`);
        $(`.colorScheme2a`).css(`border-bottom`, `solid #FFFFFF 2px`);
        $(`.confirm`).on(`mouseover`,() => {
            $(`.confirm`).css(`color`, `#fca311`);
            $(`.confirm`).css(`background-color`, `#000000`);
        })
        $(`.confirm`).on(`mouseout`,() => {
            $(`.confirm`).css(`color`, `#000000`);
            $(`.confirm`).css(`background-color`, `#fca311`);
        })
        $(`.insText`).css(`color`, `#ffffff`);
        $(`.colorScheme3`).css(`color`, `#ffffff`);
        $(`.colorScheme4`).css(`background-color`, `#fca311`);
        $(`.colorScheme5`).css(`border`, `solid #fca311 2px`);
        $(`.colorScheme6`).css(`border-bottom`, `solid #fca311 2px`);
        $(`.colorScheme7`).css(`border-top`, `solid #fca311 2px`)
        localStorage.setItem(`currentColor`, `yellow`)
    }
    if (current === `yellow`){
        $(`#changeColor`).on(`mouseout` ,() => {
            $(`#changeColor`).css(`background-color`,`#f1faee`)
            $(`#changeColor`).css(`border`, `solid #1d3557 2px`);
        })
        $(`#changeColor`).on(`mouseover`, () => {
            $(`#changeColor`).css(`background-color`,`#14213d`)
            $(`#changeColor`).css(`border`, `solid #fca311 2px`);
        })
        $(`body`).css(`background-color`, `#f1faee`);
        $(`.colorScheme1`).css(`color`, `#457b9d`);
        $(`.colorScheme2`).css(`border`, `solid #e63946 2px`);
        $(`.colorScheme2a`).css(`border-bottom`, `solid #e63946 2px`);
        $(`.confirm`).css(`color`, `#a8dadc`);
        $(`.confirm`).css(`background-color`, `#1d3557`);
        $(`.confirm`).on(`mouseover`,() => {
            $(`.confirm`).css(`color`, `#1d3557`);
            $(`.confirm`).css(`background-color`, `#a8dadc`);
        })
        $(`.confirm`).on(`mouseout`,() => {
            $(`.confirm`).css(`color`, `#a8dadc`);
            $(`.confirm`).css(`background-color`, `#1d3557`);
        })
        $(`.insText`).css(`color`, `#1d3557`);
        $(`.colorScheme3`).css(`color`, `#1d3557`);
        $(`.colorScheme4`).css(`background-color`, `#1d3557`);
        $(`.colorScheme5`).css(`border`, `solid #1d3557 2px`);
        $(`.colorScheme6`).css(`border-bottom`, `solid #1d3557 2px`);
        $(`.colorScheme7`).css(`border-top`, `solid #1d3557 2px`)
        localStorage.setItem(`currentColor`, `blue`)
    }
})