let handler = async m => m.reply(`
╭─「 Donasi • Pulsa/gopay/dana 」
│ •  [0822-9783-1227]
│ 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
