exports.private = () =>{
	return`Esta función solo se puede usar en el chat privado.`
	}
exports.wait = () => {
    return `[⏳] Espere un momento...`
}

exports.ok = () => {
    return `[✅] Hecho.`
}

exports.err = () => {
    return `[⚠️] Error de caracteristica.`
}
exports.erorLink = () => {
    return `[⚠️] Link incorrecto.`
}
exports.media = () => {
    return `Seleccione los medios que desea descargar.`
}
exports.replyImg = (prefix, command) => {
    return `Enviar/responder foto con texto ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `[❌] Formato incorrecto, Por favor verifique cómo usar en *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `[❌] Por favor, introduzca el mensaje que desea publicar!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `[❌] El Comando *${cmd}* no esta registrado en *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `[❌] ¡Este comando es específicamente para el Propietario!`
}

exports.doneOwner = () => {
    return `[✅] Hecho, owner.`
}

exports.groupOnly = () => {
    return `[❌] ¡Este comando solo se puede usar en grupos!`
}

exports.adminOnly = () => {
    return `[❌] ¡Este comando solo puede ser utilizado por administradores de grupo!`
}

exports.nhFalse = () => {
    return `[❌] Codigo invalido.`
}

exports.listBlock = (blockNumber) => {
    return `*── 『 SALA DE LA VERGÜENZA 』 ──*
    
Bloqueados: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `[❌] ¡El usuario no es un administrador!`
}

exports.adminAlready = () => {
    return `[❌] ¡No se puede promocionar a un usuario que es administrador!`
}

exports.botNotAdmin = () => {
    return `[❌] ¡Haz que el bot sea administrador primero!`
}

exports.received = (pushname) => {
    return `
Hola ${pushname}!
Gracias por informar, pronto recibiremos su informe.`
}

exports.videoLimit = () => {
    return `[❌] ¡El tamaño del archivo es demasiado grande!`
}

exports.notNum = (q) => {
    return `"${q}", no existe!`
}
exports.menunya = (salam, pushname) =>{
	return`Hola *${pushname}* 👋🏻 
Este es un bot para Whatsapp Beta para múltiples dispositivos.
Si encuentra algún tipo de error o falla, por favor comprenda,
reporta al dueño para que se arregle inmediatamente. 🔧      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `Hola ${pushname}* 👋🏻

*© Monster-Bot*
*Version: 5.0.0*

 *『 Informacion del Bot 』* 
➣ ${prefix}owner
➣ ${prefix}rules
➣ ${prefix}botstatus
➣ ${prefix}donate


 *『 Owner 』* 
➣  < evaluate
➣  > evaluate
➣  $ exec
➣  => exec
➣ ${prefix}setmenu [texto]
➣ ${prefix}setmenu templateLocation
➣ ${prefix}setmenu templateTenor
➣ ${prefix}sendsesi
➣ ${prefix}join [link]
➣ ${prefix}self
➣ ${prefix}public [bot]
➣ ${prefix}del [bot]
➣ ${prefix}setppbot [responde a imagen]

 *『 Menu de Grupo 』* 
➣ ${prefix}antilink [on/off]
➣ ${prefix}revoke
➣ ${prefix}leave
➣ ${prefix}add [62***]
➣ ${prefix}kick [@usuario]
➣ ${prefix}leave
➣ ${prefix}linkgc
➣ ${prefix}group [open/close]
➣ ${prefix}tagall [texto]
➣ ${prefix}hidetag [texto]

 *『 Menu de Anime 』* 
➣ ${prefix}quotesanime
➣ ${prefix}anime [nombre]
➣ ${prefix}manga [nombre]
➣ ${prefix}character [nombre]


 *『 Menu de Busqueda 』* 
➣ ${prefix}ytsearch [titulo]
➣ ${prefix}film [titulo]
➣ ${prefix}wallpaper [titulo]
➣ ${prefix}wikimedia [titulo]
➣ ${prefix}hentai
➣ ${prefix}wattpad [titulo]
➣ ${prefix}webtoons [titulo]
➣ ${prefix}drakor [titulo]
➣ ${prefix}pinterest [titulo]


 *『 Menu de Conversion 』* 
➣ ${prefix}stiker [responde a imagen]
➣ ${prefix}tourl [imagen/video]
➣ ${prefix}togif [sticker]
➣ ${prefix}tomp4 [sticker]
➣ ${prefix}toimg [responde a sticker]


 *『 Menu de Efectos 』* 
➣ ${prefix}wanted [responde a imagen]
➣ ${prefix}utatoo [responde a imagen]
➣ ${prefix}unsharpen [responde a imagen]
➣ ${prefix}thanos [responde a imagen]
➣ ${prefix}sniper [responde a imagen]
➣ ${prefix}sharpen [responde a imagen]
➣ ${prefix}sepia [responde a imagen]
➣ ${prefix}scary [responde a imagen]
➣ ${prefix}rip [responde a imagen]
➣ ${prefix}redple [responde a imagen]
➣ ${prefix}rejected [responde a imagen]
➣ ${prefix}posterize [responde a imagen]
➣ ${prefix}ps4 [responde a imagen]
➣ ${prefix}pixelize [responde a imagen]
➣ ${prefix}missionpassed [responde a imagen]
➣ ${prefix}moustache [responde a imagen]
➣ ${prefix}lookwhatkarenhave [responde a imagen]
➣ ${prefix}jail [responde a imagen]
➣ ${prefix}invert [responde a imagen]
➣ ${prefix}instagram [responde a imagen]
➣ ${prefix}greyscale [responde a imagen]
➣ ${prefix}glitch [responde a imagen]
➣ ${prefix}gay [responde a imagen]
➣ ${prefix}frame [responde a imagen]
➣ ${prefix}fire [responde a imagen]
➣ ${prefix}distort [responde a imagen]
➣ ${prefix}dictator [responde a imagen]
➣ ${prefix}deepfry [responde a imagen]
➣ ${prefix}ddungeon [responde a imagen]
➣ ${prefix}circle [responde a imagen]
➣ ${prefix}challenger [responde a imagen]
➣ ${prefix}burn [responde a imagen]
➣ ${prefix}brazzers [responde a imagen]
➣ ${prefix}beautiful [responde a imagen]
➣ ${prefix}jail [responde a imagen]
➣ ${prefix}red [responde a imagen]
➣ ${prefix}gay [responde a imagen]
➣ ${prefix}bloo [responde a imagen]
➣ ${prefix}blue [responde a imagen]
➣ ${prefix}sepia [responde a imagen]
➣ ${prefix}green [responde a imagen]
➣ ${prefix}glass [responde a imagen]
➣ ${prefix}invert [responde a imagen]
➣ ${prefix}blurple [responde a imagen]
➣ ${prefix}blurple2 [responde a imagen]
➣ ${prefix}wasted [responde a imagen]
➣ ${prefix}passed [responde a imagen]
➣ ${prefix}triggered [responde a imagen]
➣ ${prefix}comrade [responde a imagen]
➣ ${prefix}greyscale [responde a imagen]
➣ ${prefix}threshold [responde a imagen]
➣ ${prefix}brightness [responde a imagen]
➣ ${prefix}invertgreyscale [responde a imagen]


 *『 Menu de Descargas 』* 
➣ ${prefix}tiktok [link]
➣ ${prefix}tiktoknowm [link]
➣ ${prefix}tiktokwm [link]
➣ ${prefix}tiktokaudio [link]
➣ ${prefix}ytdl [link]
➣ ${prefix}play [titulo]
➣ ${prefix}ytmp3 [link]
➣ ${prefix}ytshortmp3 [link]
➣ ${prefix}ytmp4 [link]
➣ ${prefix}ytshorts [link]
➣ ${prefix}facebook [link]
➣ ${prefix}facebooksd [link]
➣ ${prefix}facebookhd [link]
➣ ${prefix}fbaudio [link]
➣ ${prefix}igstory [usuario]
➣ ${prefix}igdl [link]
➣ ${prefix}igphoto [link]
➣ ${prefix}igvideo [link]
➣ ${prefix}igreels [link]
➣ ${prefix}igtv [link]
➣ ${prefix}twitter link


 *『 Anime Random 』*
➣ ${prefix}loli
➣ ${prefix}neko
➣ ${prefix}waifu
➣ ${prefix}shinobu
➣ ${prefix}megumin
➣ ${prefix}bully
➣ ${prefix}cuddle
➣ ${prefix}cry
➣ ${prefix}hug
➣ ${prefix}awoo
➣ ${prefix}kiss
➣ ${prefix}lick
➣ ${prefix}pat
➣ ${prefix}smug
➣ ${prefix}bonk
➣ ${prefix}yeet
➣ ${prefix}blush
➣ ${prefix}smile
➣ ${prefix}wave
➣ ${prefix}highfive
➣ ${prefix}handhold
➣ ${prefix}nom
➣ ${prefix}bite
➣ ${prefix}glomp
➣ ${prefix}slap
➣ ${prefix}kill
➣ ${prefix}happy
➣ ${prefix}wink
➣ ${prefix}poke
➣ ${prefix}dance
➣ ${prefix}cringe

 *『 Menu NSFW/+18 』*
➣ ${prefix}ahegao
➣ ${prefix}ass
➣ ${prefix}bdsm
➣ ${prefix}blowjob
➣ ${prefix}cuckold
➣ ${prefix}cum
➣ ${prefix}ero
➣ ${prefix}femdom
➣ ${prefix}foot
➣ ${prefix}gangbang
➣ ${prefix}glasses
➣ ${prefix}jahy
➣ ${prefix}manga
➣ ${prefix}masturbation
➣ ${prefix}neko
➣ ${prefix}orgy
➣ ${prefix}panties
➣ ${prefix}pussy
➣ ${prefix}tentacles
➣ ${prefix}thighs
➣ ${prefix}yuri
➣ ${prefix}feet
➣ ${prefix}lewdkemo
➣ ${prefix}woof
➣ ${prefix}gasm
➣ ${prefix}solo
➣ ${prefix}8ball
➣ ${prefix}goose
➣ ${prefix}avatar
➣ ${prefix}hololewd
➣ ${prefix}gecg
➣ ${prefix}holo
➣ ${prefix}fox_girl
➣ ${prefix}tits
➣ ${prefix}eroyuri
➣ ${prefix}holoyero
➣ ${prefix}lizard
➣ ${prefix}keta
➣ ${prefix}eron
➣ ${prefix}erok
➣ ${prefix}kemonomimi
➣ ${prefix}cum_jpg
➣ ${prefix}nsfw_avatar
➣ ${prefix}erofeet
➣ ${prefix}meow
➣ ${prefix}wallpaper
➣ ${prefix}waifu
➣ ${prefix}trap
➣ ${prefix}lewd
➣ ${prefix}pussy_jpg
➣ ${prefix}futanari
➣ ${prefix}lewdk
➣ ${prefix}solog
➣ ${prefix}smug
➣ ${prefix}cum
➣ ${prefix}slap
➣ ${prefix}les
➣ ${prefix}erokemo
➣ ${prefix}bj
➣ ${prefix}pwankg
➣ ${prefix}pat
➣ ${prefix}poke
➣ ${prefix}feed
➣ ${prefix}nsfw_neko_gif
➣ ${prefix}pussy
➣ ${prefix}feetg
➣ ${prefix}baka
➣ ${prefix}hug
➣ ${prefix}kiss
➣ ${prefix}tickle
➣ ${prefix}spank
➣ ${prefix}kuni
➣ ${prefix}classic
➣ ${prefix}boobs
➣ ${prefix}anal
➣ ${prefix}ngif
➣ ${prefix}cuddle
➣ ${prefix}zettai

 *『 Menu TextPro 』*
➣ ${prefix}halloween2 [texto1|texto2]
➣ ${prefix}horror [texto1|texto2]
➣ ${prefix}game8bit [texto1|texto2]
➣ ${prefix}layered [texto1|texto2]
➣ ${prefix}glitch2 [texto1|texto2]
➣ ${prefix}coolg [texto1|texto2]
➣ ${prefix}coolwg [texto1|texto2]
➣ ${prefix}realistic [texto1|texto2]
➣ ${prefix}space3d [texto1|texto2]
➣ ${prefix}gtiktok [texto1|texto2]
➣ ${prefix}stone [texto1|texto2]
➣ ${prefix}marvel [texto1|texto2]
➣ ${prefix}marvel2 [texto1|texto2]
➣ ${prefix}pornhub [texto1|texto2]
➣ ${prefix}avengers [texto1|texto2]
➣ ${prefix}metalr [texto1|texto2]
➣ ${prefix}metalg [texto1|texto2]
➣ ${prefix}metalg2 [texto1|texto2]
➣ ${prefix}halloween2 [texto1|texto2]
➣ ${prefix}lion [texto1|texto2]
➣ ${prefix}wolf_bw [texto1|texto2]
➣ ${prefix}wolf_g [texto1|texto2]
➣ ${prefix}ninja [texto1|texto2]
➣ ${prefix}3dsteel [texto1|texto2]
➣ ${prefix}horror2 [texto1|texto2]
➣ ${prefix}lava [texto1|texto2]
➣ ${prefix}bagel [texto1|texto2]
➣ ${prefix}blackpink [texto]
➣ ${prefix}rainbow2 [texto]
➣ ${prefix}water_pipe [texto]
➣ ${prefix}halloween [texto]
➣ ${prefix}sketch [texto]
➣ ${prefix}sircuit [texto]
➣ ${prefix}discovery [texto]
➣ ${prefix}metallic2 [texto]
➣ ${prefix}fiction [texto]
➣ ${prefix}demon [texto]
➣ ${prefix}transformer [texto]
➣ ${prefix}berry [texto]
➣ ${prefix}thunder [texto]
➣ ${prefix}magma [texto]
➣ ${prefix}3dstone [texto]
➣ ${prefix}neon [texto]
➣ ${prefix}glitch [texto]
➣ ${prefix}harry_potter [texto]
➣ ${prefix}embossed [texto]
➣ ${prefix}broken [texto]
➣ ${prefix}papercut [texto]
➣ ${prefix}gradient [texto]
➣ ${prefix}glossy [texto]
➣ ${prefix}watercolor [texto]
➣ ${prefix}multicolor [texto]
➣ ${prefix}neon_devil [texto]
➣ ${prefix}underwater [texto]
➣ ${prefix}bear [texto]
➣ ${prefix}wonderfulg [texto]
➣ ${prefix}christmas [texto]
➣ ${prefix}neon_light [texto]
➣ ${prefix}snow [texto]
➣ ${prefix}cloudsky [texto]
➣ ${prefix}luxury2 [texto]
➣ ${prefix}gradient2 [texto]
➣ ${prefix}summer [texto]
➣ ${prefix}writing [texto]
➣ ${prefix}engraved [texto]
➣ ${prefix}summery [texto]
➣ ${prefix}3dglue [texto]
➣ ${prefix}metaldark [texto]
➣ ${prefix}neonlight [texto]
➣ ${prefix}oscar [texto]
➣ ${prefix}minion [texto]
➣ ${prefix}holographic [texto]
➣ ${prefix}purple [texto]
➣ ${prefix}glossyb [texto]
➣ ${prefix}deluxe2 [texto]
➣ ${prefix}glossyc [texto]
➣ ${prefix}fabric [texto]
➣ ${prefix}neonc [texto]
➣ ${prefix}newyear [texto]
➣ ${prefix}newyear2 [texto]
➣ ${prefix}metals [texto]
➣ ${prefix}xmas [texto]
➣ ${prefix}blood [texto]
➣ ${prefix}darkg [texto]
➣ ${prefix}joker [texto]
➣ ${prefix}wicker [texto]
➣ ${prefix}natural [texto]
➣ ${prefix}firework [texto]
➣ ${prefix}skeleton [texto]
➣ ${prefix}balloon [texto]
➣ ${prefix}balloon2 [texto]
➣ ${prefix}balloon3 [texto]
➣ ${prefix}balloon4 [texto]
➣ ${prefix}balloon5 [texto]
➣ ${prefix}balloon6 [texto]
➣ ${prefix}balloon7 [texto]
➣ ${prefix}steel [texto]
➣ ${prefix}gloss [texto]
➣ ${prefix}denim [texto]
➣ ${prefix}decorate [texto]
➣ ${prefix}decorate2 [texto]
➣ ${prefix}peridot [texto]
➣ ${prefix}rock [texto]
➣ ${prefix}glass [texto]
➣ ${prefix}glass2 [texto]
➣ ${prefix}glass3 [texto]
➣ ${prefix}glass4 [texto]
➣ ${prefix}glass5 [texto]
➣ ${prefix}glass6 [texto]
➣ ${prefix}glass7 [texto]
➣ ${prefix}glass8 [texto]
➣ ${prefix}captain_as2 [texto]
➣ ${prefix}robot [texto]
➣ ${prefix}equalizer [texto]
➣ ${prefix}toxic [texto]
➣ ${prefix}sparkling [texto]
➣ ${prefix}sparkling2 [texto]
➣ ${prefix}sparkling3 [texto]
➣ ${prefix}sparkling4 [texto]
➣ ${prefix}sparkling5 [texto]
➣ ${prefix}sparkling6 [texto]
➣ ${prefix}sparkling7 [texto]
➣ ${prefix}decorative [texto]
➣ ${prefix}chocolate [texto]
➣ ${prefix}strawberry [texto]
➣ ${prefix}koifish [texto]
➣ ${prefix}bread [texto]
➣ ${prefix}matrix [texto]
➣ ${prefix}blood2 [texto]
➣ ${prefix}neonligth2 [texto]
➣ ${prefix}thunder2 [texto]
➣ ${prefix}3dbox [texto]
➣ ${prefix}neon2 [texto]
➣ ${prefix}roadw [texto]
➣ ${prefix}bokeh [texto]
➣ ${prefix}gneon [texto]
➣ ${prefix}advanced [texto]
➣ ${prefix}dropwater [texto]
➣ ${prefix}wall [texto]
➣ ${prefix}chrismast [texto]
➣ ${prefix}honey [texto]
➣ ${prefix}drug [texto]
➣ ${prefix}marble [texto]
➣ ${prefix}marble2 [texto]
➣ ${prefix}ice [texto]
➣ ${prefix}juice [texto]
➣ ${prefix}rusty [texto]
➣ ${prefix}abstra [texto]
➣ ${prefix}biscuit [texto]
➣ ${prefix}wood [texto]
➣ ${prefix}scifi [texto]
➣ ${prefix}metalr [texto]
➣ ${prefix}purpleg [texto]
➣ ${prefix}shiny [texto] 
➣ ${prefix}jewelry [texto]
➣ ${prefix}jewelry2 [texto]
➣ ${prefix}jewelry3 [texto]
➣ ${prefix}jewelry4 [texto]
➣ ${prefix}jewelry5 [texto]
➣ ${prefix}jewelry6 [texto]
➣ ${prefix}jewelry7 [texto]
➣ ${prefix}jewelry8 [texto]
➣ ${prefix}metalh [texto]
➣ ${prefix}golden [texto]
➣ ${prefix}glitter [texto]
➣ ${prefix}glitter2 [texto]
➣ ${prefix}glitter3 [texto]
➣ ${prefix}glitter4 [texto]
➣ ${prefix}glitter5 [texto]
➣ ${prefix}glitter6 [texto]
➣ ${prefix}glitter7 [texto]
➣ ${prefix}metale [texto]
➣ ${prefix}carbon [texto]
➣ ${prefix}candy [texto]
➣ ${prefix}metalb [texto]
➣ ${prefix}gemb [texto]
➣ ${prefix}3dchrome [texto]
➣ ${prefix}metalb2 [texto]
➣ ${prefix}metalg [texto]
➣ ${prefix}metalg [texto]

 *『 Otros 』*
➣ ${prefix}kalkulator
➣ ${prefix}smeme [texto]
➣ ${prefix}memegen [texto1|texto2]

    `
}

exports.rules = (prefix) => {
    return `
*── 『 REGLAS Y INFORMACION 』 ──*

1. No spamear al bot.
Sancion: *❌ ADVERTENCIA/BLOQUEO*

2. No llamar al bot.
Sancion: *❌ BLOQUEO*

3. No explotar al bot.
Sancion: *❌ BLOQUEO PERMANENTE*

🗯️ ¿Porque el bot es lento a veces?
➡️ Puede verse afectado por la red, la señal, prohibido por Whatsapp y alguna otra razón.

🗯️ ¿Dónde puedo obtener el script de este bot?
➡️ Este script aún es privado y nunca se ha comercializado, tenga cuidado al conocer a los estafadores.

🗯️ ¿Puedo agregar el bot a mi grupo?
➡️ Por el momento el bot es de libre uso.

🗯️ ¿Cuál es el prefijo?
➡️ Este bot usa múltiples prefijos. Eso significa que puede usar el prefijo "#" "." y otro prefijo razonable.


Si comprende las reglas, escriba *${prefix}allmenu* para comenzar.
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
📛 𝖭𝖺𝗆𝖺 :
🔞 𝖴𝗆𝗎𝗋 :
🧑 𝖦𝖾𝗇𝖽𝖾𝗋 :
🏙️ 𝖠𝗌𝗄𝗈𝗍 :
╰ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*── 『 SOURCE 』 ──*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/zeeoneofc/Alphabot-Md
`
}
exports.tos = (ownernomer) => {
    return `
*── 『 DONACION 』 ──*

Hola!
Puedes ayudarme a mantener este bot actualizado mediante una donación

Cualquier cantidad de tu donación significará mucho. 👍🏻

¡Gracias!

Persona de contacto Titular:
https://wa.me/+6285878313791

    `
}

exports.ownermenu = (prefix) =>{
return`
• < evaluate
• > evaluate
• $ exec
• => exec
» ${prefix}setmenu [texto]
» ${prefix}setmenu templateLocation
» ${prefix}setmenu templateTenor
» ${prefix}sendsesi
» ${prefix}join [link]
» ${prefix}self
» ${prefix}public [bot]
» ${prefix}del [bot]
» ${prefix}setppbot [responde a imagen]
`}

exports.group = (prefix) =>{
	return`
» ${prefix}antilink [on/off]
» ${prefix}revoke
» ${prefix}leave
» ${prefix}add [62***]
» ${prefix}kick [@usuario]
» ${prefix}leave
» ${prefix}linkgc
» ${prefix}group [open/close]
» ${prefix}tagall [texto]
» ${prefix}hidetag [texto]
`}

exports.anime = (prefix) =>{
	return`
» ${prefix}quotesanime
» ${prefix}anime [nombre]
» ${prefix}manga [nombre]
» ${prefix}character [nombre]
`}

exports.search = (prefix) =>{
	return`
» ${prefix}ytsearch [titulo]
» ${prefix}film [ titulo ]
» ${prefix}wallpaper [titulo]
» ${prefix}wikimedia [titulo]
» ${prefix}hentai
» ${prefix}wattpad [titulo]
» ${prefix}webtoons [titulo]
» ${prefix}drakor [titulo]
» ${prefix}pinterest [titulo]
`}

exports.converter = (prefix) =>{
	return`
» ${prefix}stiker [responde a imagen]
» ${prefix}tourl [imagen/video]
» ${prefix}togif [sticker]
» ${prefix}tomp4 [sticker]
» ${prefix}toimg [responde a sticker]
`}

exports.effect = (prefix) =>{
	return`
» ${prefix}wanted [responde a imagen]
» ${prefix}utatoo [responde a imagen]
» ${prefix}unsharpen [responde a imagen]
» ${prefix}thanos [responde a imagen]
» ${prefix}sniper [responde a imagen]
» ${prefix}sharpen [responde a imagen]
» ${prefix}sepia [responde a imagen]
» ${prefix}scary [responde a imagen]
» ${prefix}rip [responde a imagen]
» ${prefix}redple [responde a imagen]
» ${prefix}rejected [responde a imagen]
» ${prefix}posterize [responde a imagen]
» ${prefix}ps4 [responde a imagen]
» ${prefix}pixelize [responde a imagen]
» ${prefix}missionpassed [responde a imagen]
» ${prefix}moustache [responde a imagen]
» ${prefix}lookwhatkarenhave [responde a imagen]
» ${prefix}jail [responde a imagen]
» ${prefix}invert [responde a imagen]
» ${prefix}instagram [responde a imagen]
» ${prefix}greyscale [responde a imagen]
» ${prefix}glitch [responde a imagen]
» ${prefix}gay [responde a imagen]
» ${prefix}frame [responde a imagen]
» ${prefix}fire [responde a imagen]
» ${prefix}distort [responde a imagen]
» ${prefix}dictator [responde a imagen]
» ${prefix}deepfry [responde a imagen]
» ${prefix}ddungeon [responde a imagen]
» ${prefix}circle [responde a imagen]
» ${prefix}challenger [responde a imagen]
» ${prefix}burn [responde a imagen]
» ${prefix}brazzers [responde a imagen]
» ${prefix}beautiful [responde a imagen]
» ${prefix}jail [responde a imagen]
» ${prefix}red [responde a imagen]
» ${prefix}gay [responde a imagen]
» ${prefix}bloo [responde a imagen]
» ${prefix}blue [responde a imagen]
» ${prefix}sepia [responde a imagen]
» ${prefix}green [responde a imagen]
» ${prefix}glass [responde a imagen]
» ${prefix}invert [responde a imagen]
» ${prefix}blurple [responde a imagen]
» ${prefix}blurple2 [responde a imagen]
» ${prefix}wasted [responde a imagen]
» ${prefix}passed [responde a imagen]
» ${prefix}triggered [responde a imagen]
» ${prefix}comrade [responde a imagen]
» ${prefix}greyscale [responde a imagen]
» ${prefix}threshold [responde a imagen]
» ${prefix}brightness [responde a imagen]
» ${prefix}invertgreyscale [responde a imagen]
`
}

exports.download = (prefix) =>{
return`
» ${prefix}tiktok [link]
» ${prefix}tiktoknowm [link]
» ${prefix}tiktokwm [link]
» ${prefix}tiktokaudio [link]
» ${prefix}ytdl [link]
» ${prefix}play [titulo]
» ${prefix}ytmp3 [link]
» ${prefix}ytshortmp3 [link]
» ${prefix}ytmp4 [link]
» ${prefix}ytshorts [link]
» ${prefix}facebook [link]
» ${prefix}facebooksd [link]
» ${prefix}facebookhd [link]
» ${prefix}fbaudio [link]
» ${prefix}igstory [usuario]
» ${prefix}igdl [link]
» ${prefix}igphoto [link]
» ${prefix}igvideo [link]
» ${prefix}igreels [link]
» ${prefix}igtv [link]
» ${prefix}twitter [link]
`
}

exports.ranime = (prefix) =>{
	return`
» ${prefix}loli
» ${prefix}neko
» ${prefix}waifu
» ${prefix}shinobu
» ${prefix}megumin
» ${prefix}bully
» ${prefix}cuddle
» ${prefix}cry
» ${prefix}hug
» ${prefix}awoo
» ${prefix}kiss
» ${prefix}lick
» ${prefix}pat
» ${prefix}smug
» ${prefix}bonk
» ${prefix}yeet
» ${prefix}blush
» ${prefix}smile
» ${prefix}wave
» ${prefix}highfive
» ${prefix}handhold
» ${prefix}nom
» ${prefix}bite
» ${prefix}glomp
» ${prefix}slap
» ${prefix}kill
» ${prefix}happy
» ${prefix}wink
» ${prefix}poke
» ${prefix}dance
» ${prefix}cringe
`
}

exports.textpro = (prefix) =>{
	return`
» ${prefix}halloween2 [texto1|texto2]
» ${prefix}horror [texto1|texto2]
» ${prefix}game8bit [texto1|texto2]
» ${prefix}layered [texto1|texto2]
» ${prefix}glitch2 [texto1|texto2]
» ${prefix}coolg [texto1|texto2]
» ${prefix}coolwg [texto1|texto2]
» ${prefix}realistic [texto1|texto2]
» ${prefix}space3d [texto1|texto2]
» ${prefix}gtiktok [texto1|texto2]
» ${prefix}stone [texto1|texto2]
» ${prefix}marvel [texto1|texto2]
» ${prefix}marvel2 [texto1|texto2]
» ${prefix}pornhub [texto1|texto2]
» ${prefix}avengers [texto1|texto2]
» ${prefix}metalr [texto1|texto2]
» ${prefix}metalg [texto1|texto2]
» ${prefix}metalg2 [texto1|texto2]
» ${prefix}halloween2 [texto1|texto2]
» ${prefix}lion [texto1|texto2]
» ${prefix}wolf_bw [texto1|texto2]
» ${prefix}wolf_g [texto1|texto2]
» ${prefix}ninja [texto1|texto2]
» ${prefix}3dsteel [texto1|texto2]
» ${prefix}horror2 [texto1|texto2]
» ${prefix}lava [texto1|texto2]
» ${prefix}bagel [texto1|texto2]
» ${prefix}blackpink [texto]
» ${prefix}rainbow2 [texto]
» ${prefix}water_pipe [texto]
» ${prefix}halloween [texto]
» ${prefix}sketch [texto]
» ${prefix}sircuit [texto]
» ${prefix}discovery [texto]
» ${prefix}metallic2 [texto]
» ${prefix}fiction [texto]
» ${prefix}demon [texto]
» ${prefix}transformer [texto]
» ${prefix}berry [texto]
» ${prefix}thunder [texto]
» ${prefix}magma [texto]
» ${prefix}3dstone [texto]
» ${prefix}neon [texto]
» ${prefix}glitch [texto]
» ${prefix}harry_potter [texto]
» ${prefix}embossed [texto]
» ${prefix}broken [texto]
» ${prefix}papercut [texto]
» ${prefix}gradient [texto]
» ${prefix}glossy [texto]
» ${prefix}watercolor [texto]
» ${prefix}multicolor [texto]
» ${prefix}neon_devil [texto]
» ${prefix}underwater [texto]
» ${prefix}bear [texto]
» ${prefix}wonderfulg [texto]
» ${prefix}christmas [texto]
» ${prefix}neon_light [texto]
» ${prefix}snow [texto]
» ${prefix}cloudsky [texto]
» ${prefix}luxury2 [texto]
» ${prefix}gradient2 [texto]
» ${prefix}summer [texto]
» ${prefix}writing [texto]
» ${prefix}engraved [texto]
» ${prefix}summery [texto]
» ${prefix}3dglue [texto]
» ${prefix}metaldark [texto]
» ${prefix}neonlight [texto]
» ${prefix}oscar [texto]
» ${prefix}minion [texto]
» ${prefix}holographic [texto]
» ${prefix}purple [texto]
» ${prefix}glossyb [texto]
» ${prefix}deluxe2 [texto]
» ${prefix}glossyc [texto]
» ${prefix}fabric [texto]
» ${prefix}neonc [texto]
» ${prefix}newyear [texto]
» ${prefix}newyear2 [texto]
» ${prefix}metals [texto]
» ${prefix}xmas [texto]
» ${prefix}blood [texto]
» ${prefix}darkg [texto]
» ${prefix}joker [texto]
» ${prefix}wicker [texto]
» ${prefix}natural [texto]
» ${prefix}firework [texto]
» ${prefix}skeleton [texto]
» ${prefix}balloon [texto]
» ${prefix}balloon2 [texto]
» ${prefix}balloon3 [texto]
» ${prefix}balloon4 [texto]
» ${prefix}balloon5 [texto]
» ${prefix}balloon6 [texto]
» ${prefix}balloon7 [texto]
» ${prefix}steel [texto]
» ${prefix}gloss [texto]
» ${prefix}denim [texto]
» ${prefix}decorate [texto]
» ${prefix}decorate2 [texto]
» ${prefix}peridot [texto]
» ${prefix}rock [texto]
» ${prefix}glass [texto]
» ${prefix}glass2 [texto]
» ${prefix}glass3 [texto]
» ${prefix}glass4 [texto]
» ${prefix}glass5 [texto]
» ${prefix}glass6 [texto]
» ${prefix}glass7 [texto]
» ${prefix}glass8 [texto]
» ${prefix}captain_as2 [texto]
» ${prefix}robot [texto]
» ${prefix}equalizer [texto]
» ${prefix}toxic [texto]
» ${prefix}sparkling [texto]
» ${prefix}sparkling2 [texto]
» ${prefix}sparkling3 [texto]
» ${prefix}sparkling4 [texto]
» ${prefix}sparkling5 [texto]
» ${prefix}sparkling6 [texto]
» ${prefix}sparkling7 [texto]
» ${prefix}decorative [texto]
» ${prefix}chocolate [texto]
» ${prefix}strawberry [texto]
» ${prefix}koifish [texto]
» ${prefix}bread [texto]
» ${prefix}matrix [texto]
» ${prefix}blood2 [texto]
» ${prefix}neonligth2 [texto]
» ${prefix}thunder2 [texto]
» ${prefix}3dbox [texto]
» ${prefix}neon2 [texto]
» ${prefix}roadw [texto]
» ${prefix}bokeh [texto]
» ${prefix}gneon [texto]
» ${prefix}advanced [texto]
» ${prefix}dropwater [texto]
» ${prefix}wall [texto]
» ${prefix}chrismast [texto]
» ${prefix}honey [texto]
» ${prefix}drug [texto]
» ${prefix}marble [texto]
» ${prefix}marble2 [texto]
» ${prefix}ice [texto]
» ${prefix}juice [texto]
» ${prefix}rusty [texto]
» ${prefix}abstra [texto]
» ${prefix}biscuit [texto]
» ${prefix}wood [texto]
» ${prefix}scifi [texto]
» ${prefix}metalr [texto]
» ${prefix}purpleg [texto]
» ${prefix}shiny [texto] 
» ${prefix}jewelry [texto]
» ${prefix}jewelry2 [texto]
» ${prefix}jewelry3 [texto]
» ${prefix}jewelry4 [texto]
» ${prefix}jewelry5 [texto]
» ${prefix}jewelry6 [texto]
» ${prefix}jewelry7 [texto]
» ${prefix}jewelry8 [texto]
» ${prefix}metalh [texto]
» ${prefix}golden [texto]
» ${prefix}glitter [texto]
» ${prefix}glitter2 [texto]
» ${prefix}glitter3 [texto]
» ${prefix}glitter4 [texto]
» ${prefix}glitter5 [texto]
» ${prefix}glitter6 [texto]
» ${prefix}glitter7 [texto]
» ${prefix}metale [texto]
» ${prefix}carbon [texto]
» ${prefix}candy [texto]
» ${prefix}metalb [texto]
» ${prefix}gemb [texto]
» ${prefix}3dchrome [texto]
» ${prefix}metalb2 [texto]
» ${prefix}metalg [texto]
» ${prefix}metalg [texto]
`
}

exports.nsfw = (prefix) =>{
	return`
» ${prefix}ahegao
» ${prefix}ass
» ${prefix}bdsm
» ${prefix}blowjob
» ${prefix}cuckold
» ${prefix}cum
» ${prefix}ero
» ${prefix}femdom
» ${prefix}foot
» ${prefix}gangbang
» ${prefix}glasses
» ${prefix}jahy
» ${prefix}manga
» ${prefix}masturbation
» ${prefix}neko
» ${prefix}orgy
» ${prefix}panties
» ${prefix}pussy
» ${prefix}tentacles
» ${prefix}thighs
» ${prefix}yuri
» ${prefix}feet
» ${prefix}lewdkemo
» ${prefix}woof
» ${prefix}gasm
» ${prefix}solo
» ${prefix}8ball
» ${prefix}goose
» ${prefix}avatar
» ${prefix}hololewd
» ${prefix}gecg
» ${prefix}holo
» ${prefix}fox_girl
» ${prefix}tits
» ${prefix}eroyuri
» ${prefix}holoyero
» ${prefix}lizard
» ${prefix}keta
» ${prefix}eron
» ${prefix}erok
» ${prefix}kemonomimi
» ${prefix}cum_jpg
» ${prefix}nsfw_avatar
» ${prefix}erofeet
» ${prefix}meow
» ${prefix}wallpaper
» ${prefix}waifu
» ${prefix}trap
» ${prefix}lewd
» ${prefix}pussy_jpg
» ${prefix}futanari
» ${prefix}lewdk
» ${prefix}solog
» ${prefix}smug
» ${prefix}cum
» ${prefix}slap
» ${prefix}les
» ${prefix}erokemo
» ${prefix}bj
» ${prefix}pwankg
» ${prefix}pat
» ${prefix}poke
» ${prefix}feed
» ${prefix}nsfw_neko_gif
» ${prefix}pussy
» ${prefix}feetg
» ${prefix}baka
» ${prefix}hug
» ${prefix}kiss
» ${prefix}tickle
» ${prefix}spank
» ${prefix}kuni
» ${prefix}classic
» ${prefix}boobs
» ${prefix}anal
» ${prefix}ngif
» ${prefix}cuddle
» ${prefix}zettai
`
}

exports.other = (prefix) =>{
return`
» ${prefix}kalkulator
» ${prefix}smeme [texto]
» ${prefix}memegen [texto1|texto2]

`
}

exports.tqto = () =>{
	return`
• My God
• My Parents
• Fatih A.
• Ferdi
• DikaArdnt
• Mhankbarbar
• Nurutomo
• Rashid
• ZeeoneOfc
• Penyedia Module
• And All Support
`
}
