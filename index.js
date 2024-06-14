const chalkAnimation = require('chalkercli');
let str = String.raw`
𝙰-6𝚈 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚆𝙰𝙸𝚃 𝙿𝙻𝙴𝙰𝚂𝙴[▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒] 
`;
let logo = String.raw`𝙰-6𝚈 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙰𝙿𝙸 𝚂𝚃𝙰𝚁𝚃𝙸𝙽𝙶 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙰𝙸𝚃..!`;
                             
const karaoke = chalkAnimation.karaoke(str);
const rainbow = chalkAnimation.rainbow(logo);
setTimeout(async() => {
    await karaoke.start()
    await rainbow.start()
    console.clear()
}, 1000);

setTimeout(() => {
    karaoke.stop()
    rainbow.stop()
    require('./app/main.js')
}, 7000);
