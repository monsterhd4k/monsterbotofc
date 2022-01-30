const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["595985770265"]
global.packname = ''
global.youtube = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
global.author = ''
global.sessionName = 'kizakixd'
global.flaming = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&fontname=Fira+Sans+Bold+Italic&&shadowType=0&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '[✅] Hecho',
    admin: '¡Este comando solo puede ser utilizado por administradores!',
    botAdmin: '¡Este comando solo se puede usar cuando el bot se convierte en administrador!',
    owner: '¡Este comando solo puede ser utilizado por el propietario!',
    group: '¡Este comando solo se puede usar en grupos!',
    private: '¡Este comando solo se puede usar en privado!',
	bot: 'Funciones especiales del usuario del número de bot',
    errtoimg: 'Lo sentimos, ¡actualmente no es compatible con la etiqueta Gif!',
    wait: '[⏳] Espere un momento...',
	lockCmd: '¡Característica no habilitada por el propietario!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync(setting.thumbnail)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
