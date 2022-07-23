import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `وَعَلَيْكُمُ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
“Waalaikumsalam wa rahmatullahi wabarakatuh”`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.nameown, body: `IkawaBot`, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(Assalamu'alaikum|Assalammualaikum|p|bot)$/i
handler.command = new RegExp

export default handler