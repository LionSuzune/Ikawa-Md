let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
*──「DONASI IKAWA」──*
☞  DANA : [${global.pdana}]
☞  PULSA : [${global.ppulsa}]
☞  PULSA2 : [${global.ppulsa2}]
☞  GOPAY : [${global.pgopay}]


TERIMAKASIH SUDAH DONASI :>
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ Saweria', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler