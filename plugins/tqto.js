import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` THANKS TO
📮Nurutomo:
https://github.com/Nurutomo
📮Istikmal:
https://github.com/BochilGaming
📮Ariffb:
https://github.com/Ariffb25
📮Keluarga Agus:
https://github.com/FokusDotId
📮Amelia Lisa:
https://github.com/Ameliascrf
📮Aniq12:
https://github.com/aniq12
📮Ilman:
https://github.com/ilmanhdyt
📮Amirul:
https://github.com/amiruldev20
📮Irwan:
https://github.com/irwanx
📮Rasel:
https://github.com/raselcomel
📮IkawaTeam
https://github.com/IkawaTeam
📮 Uzui
https://github.com/LionSuzune
📮 Zuikaku
https://github.com/JulianZuikaku
📮 Sasha
https://github.com/LyliaSasha
📮Kannachann:
https://github.com/Kannachann
📮Zukashika:
https://github.com/BaraXD
📮Xtreshe:
https://github.com/Xtreshebot
📮tiang:
https://github.com/PilarV2
📮Fahri Adison:
https://github.com/FahriAdison
📮Buat Gan:
https://github.com/Madexyz`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.nameown, body: `IkawaBot`, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['tqtq', 'tqto', '?']
handler.tags = ['main']
handler.command = /^(tqtq|tqto|thanksto|thanks|\?)$/i

export default handler