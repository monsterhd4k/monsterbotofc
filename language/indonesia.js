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
➣ ${prefix}setmenu [query]
➣ ${prefix}setmenu templateLocation
➣ ${prefix}setmenu templateTenor
➣ ${prefix}sendsesi
➣ ${prefix}join [link]
➣ ${prefix}self
➣ ${prefix}public [only bot]
➣ ${prefix}del [pesan bot]
➣ ${prefix}setppbot [reply image]

 *『 Menu de Grupo 』* 
➣ ${prefix}antilink [on/off]
➣ ${prefix}revoke
➣ ${prefix}leave
➣ ${prefix}add [62***]
➣ ${prefix}kick @tag
➣ ${prefix}leave
➣ ${prefix}linkgc
➣ ${prefix}group [open/close]
➣ ${prefix}tagall [text]
➣ ${prefix}hidetag [text]

 *『 Menu de Anime 』* 
➣ ${prefix}quotesanime
➣ ${prefix}anime [query]
➣ ${prefix}manga [query]
➣ ${prefix}character [query]


 *『 Menu de Busqueda 』* 
➣ ${prefix}ytsearch [query]
➣ ${prefix}film [query]
➣ ${prefix}wallpaper [query]
➣ ${prefix}wikimedia [query]
➣ ${prefix}hentai
➣ ${prefix}wattpad [query]
➣ ${prefix}webtoons [query]
➣ ${prefix}drakor [query]
➣ ${prefix}pinterest [query]


 *『 Menu de Conversion 』* 
➣ ${prefix}stiker [reply image]
➣ ${prefix}tourl [image/video]
➣ ${prefix}togif [sticker]
➣ ${prefix}tomp4 [sticker]
➣ ${prefix}toimg [reply sticker]


 *『 Menu de Efectos 』* 
➣ ${prefix}wanted [reply image]
➣ ${prefix}utatoo [reply image]
➣ ${prefix}unsharpen [reply image]
➣ ${prefix}thanos [reply image]
➣ ${prefix}sniper [reply image]
➣ ${prefix}sharpen [reply image]
➣ ${prefix}sepia [reply image]
➣ ${prefix}scary [reply image]
➣ ${prefix}rip [reply image]
➣ ${prefix}redple [reply image]
➣ ${prefix}rejected [reply image]
➣ ${prefix}posterize [reply image]
➣ ${prefix}ps4 [reply image]
➣ ${prefix}pixelize [reply image]
➣ ${prefix}missionpassed [reply image]
➣ ${prefix}moustache [reply image]
➣ ${prefix}lookwhatkarenhave [reply image]
➣ ${prefix}jail [reply image]
➣ ${prefix}invert [reply image]
➣ ${prefix}instagram [reply image]
➣ ${prefix}greyscale [reply image]
➣ ${prefix}glitch [reply image]
➣ ${prefix}gay [reply image]
➣ ${prefix}frame [reply image]
➣ ${prefix}fire [reply image]
➣ ${prefix}distort [reply image]
➣ ${prefix}dictator [reply image]
➣ ${prefix}deepfry [reply image]
➣ ${prefix}ddungeon [reply image]
➣ ${prefix}circle [reply image]
➣ ${prefix}challenger [reply image]
➣ ${prefix}burn [reply image]
➣ ${prefix}brazzers [reply image]
➣ ${prefix}beautiful [reply image]
➣ ${prefix}jail [reply image]
➣ ${prefix}red [reply image]
➣ ${prefix}gay [reply image]
➣ ${prefix}bloo [reply image]
➣ ${prefix}blue [reply image]
➣ ${prefix}sepia [reply image]
➣ ${prefix}green [reply image]
➣ ${prefix}glass [reply image]
➣ ${prefix}invert [reply image]
➣ ${prefix}blurple [reply image]
➣ ${prefix}blurple2 [reply image]
➣ ${prefix}wasted [reply image]
➣ ${prefix}passed [reply image]
➣ ${prefix}triggered [reply image]
➣ ${prefix}comrade [reply image]
➣ ${prefix}greyscale [reply image]
➣ ${prefix}threshold [reply image]
➣ ${prefix}brightness [reply image]
➣ ${prefix}invertgreyscale [reply image]


 *『 Menu de Descargas 』* 
➣ ${prefix}tiktok [link]
➣ ${prefix}tiktoknowm [link]
➣ ${prefix}tiktokwm [link]
➣ ${prefix}tiktokaudio [link]
➣ ${prefix}ytdl [link]
➣ ${prefix}play [query]
➣ ${prefix}ytmp3 [link]
➣ ${prefix}ytshortmp3 [link]
➣ ${prefix}ytmp4 [link]
➣ ${prefix}ytshorts [link]
➣ ${prefix}facebook [link]
➣ ${prefix}facebooksd [link]
➣ ${prefix}facebookhd [link]
➣ ${prefix}fbaudio [link]
➣ ${prefix}igstory [username]
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
➣ ${prefix}halloween2 text|text2
➣ ${prefix}horror text|text2
➣ ${prefix}game8bit text|text2
➣ ${prefix}layered text|text2
➣ ${prefix}glitch2 text|text2
➣ ${prefix}coolg text|text2
➣ ${prefix}coolwg text|text2
➣ ${prefix}realistic text|text2
➣ ${prefix}space3d text|text2
➣ ${prefix}gtiktok text|text2
➣ ${prefix}stone text|text2
➣ ${prefix}marvel text|text2
➣ ${prefix}marvel2 text|text2
➣ ${prefix}pornhub text|text2
➣ ${prefix}avengers text|text2
➣ ${prefix}metalr text|text2
➣ ${prefix}metalg text|text2
➣ ${prefix}metalg2 text|text2
➣ ${prefix}halloween2 text|text2
➣ ${prefix}lion text|text2
➣ ${prefix}wolf_bw text|text2
➣ ${prefix}wolf_g text|text2
➣ ${prefix}ninja text|text2
➣ ${prefix}3dsteel text|text2
➣ ${prefix}horror2 text|text2
➣ ${prefix}lava text|text2
➣ ${prefix}bagel text|text2
➣ ${prefix}blackpink text
➣ ${prefix}rainbow2 text
➣ ${prefix}water_pipe text
➣ ${prefix}halloween text
➣ ${prefix}sketch text
➣ ${prefix}sircuit text
➣ ${prefix}discovery text
➣ ${prefix}metallic2 text
➣ ${prefix}fiction text
➣ ${prefix}demon text
➣ ${prefix}transformer text
➣ ${prefix}berry text
➣ ${prefix}thunder text
➣ ${prefix}magma text
➣ ${prefix}3dstone text
➣ ${prefix}neon text
➣ ${prefix}glitch text
➣ ${prefix}harry_potter text
➣ ${prefix}embossed text
➣ ${prefix}broken text
➣ ${prefix}papercut text
➣ ${prefix}gradient text
➣ ${prefix}glossy text
➣ ${prefix}watercolor text
➣ ${prefix}multicolor text
➣ ${prefix}neon_devil text
➣ ${prefix}underwater text
➣ ${prefix}bear text
➣ ${prefix}wonderfulg text
➣ ${prefix}christmas text
➣ ${prefix}neon_light text
➣ ${prefix}snow text
➣ ${prefix}cloudsky text
➣ ${prefix}luxury2 text
➣ ${prefix}gradient2 text
➣ ${prefix}summer text
➣ ${prefix}writing text
➣ ${prefix}engraved text
➣ ${prefix}summery text
➣ ${prefix}3dglue text
➣ ${prefix}metaldark text
➣ ${prefix}neonlight text
➣ ${prefix}oscar text
➣ ${prefix}minion text
➣ ${prefix}holographic text
➣ ${prefix}purple text
➣ ${prefix}glossyb text
➣ ${prefix}deluxe2 text
➣ ${prefix}glossyc text
➣ ${prefix}fabric text
➣ ${prefix}neonc text
➣ ${prefix}newyear text
➣ ${prefix}newyear2 text
➣ ${prefix}metals text
➣ ${prefix}xmas text
➣ ${prefix}blood text
➣ ${prefix}darkg text
➣ ${prefix}joker text
➣ ${prefix}wicker text
➣ ${prefix}natural text
➣ ${prefix}firework text
➣ ${prefix}skeleton text
➣ ${prefix}balloon text
➣ ${prefix}balloon2 text
➣ ${prefix}balloon3 text
➣ ${prefix}balloon4 text
➣ ${prefix}balloon5 text
➣ ${prefix}balloon6 text
➣ ${prefix}balloon7 text
➣ ${prefix}steel text
➣ ${prefix}gloss text
➣ ${prefix}denim text
➣ ${prefix}decorate text
➣ ${prefix}decorate2 text
➣ ${prefix}peridot text
➣ ${prefix}rock text
➣ ${prefix}glass text
➣ ${prefix}glass2 text
➣ ${prefix}glass3 text
➣ ${prefix}glass4 text
➣ ${prefix}glass5 text
➣ ${prefix}glass6 text
➣ ${prefix}glass7 text
➣ ${prefix}glass8 text
➣ ${prefix}captain_as2 text
➣ ${prefix}robot text
➣ ${prefix}equalizer text
➣ ${prefix}toxic text
➣ ${prefix}sparkling text
➣ ${prefix}sparkling2 text
➣ ${prefix}sparkling3 text
➣ ${prefix}sparkling4 text
➣ ${prefix}sparkling5 text
➣ ${prefix}sparkling6 text
➣ ${prefix}sparkling7 text
➣ ${prefix}decorative text
➣ ${prefix}chocolate text
➣ ${prefix}strawberry text
➣ ${prefix}koifish text
➣ ${prefix}bread text
➣ ${prefix}matrix text
➣ ${prefix}blood2 text
➣ ${prefix}neonligth2 text
➣ ${prefix}thunder2 text
➣ ${prefix}3dbox text
➣ ${prefix}neon2 text
➣ ${prefix}roadw text
➣ ${prefix}bokeh text
➣ ${prefix}gneon text
➣ ${prefix}advanced text
➣ ${prefix}dropwater text
➣ ${prefix}wall text
➣ ${prefix}chrismast text
➣ ${prefix}honey text
➣ ${prefix}drug text
➣ ${prefix}marble text
➣ ${prefix}marble2 text
➣ ${prefix}ice text
➣ ${prefix}juice text
➣ ${prefix}rusty text
➣ ${prefix}abstra text
➣ ${prefix}biscuit text
➣ ${prefix}wood text
➣ ${prefix}scifi text
➣ ${prefix}metalr text
➣ ${prefix}purpleg text
➣ ${prefix}shiny text 
➣ ${prefix}jewelry text
➣ ${prefix}jewelry2 text
➣ ${prefix}jewelry3 text
➣ ${prefix}jewelry4 text
➣ ${prefix}jewelry5 text
➣ ${prefix}jewelry6 text
➣ ${prefix}jewelry7 text
➣ ${prefix}jewelry8 text
➣ ${prefix}metalh text
➣ ${prefix}golden text
➣ ${prefix}glitter text
➣ ${prefix}glitter2 text
➣ ${prefix}glitter3 text
➣ ${prefix}glitter4 text
➣ ${prefix}glitter5 text
➣ ${prefix}glitter6 text
➣ ${prefix}glitter7 text
➣ ${prefix}metale text
➣ ${prefix}carbon text
➣ ${prefix}candy text
➣ ${prefix}metalb text
➣ ${prefix}gemb text
➣ ${prefix}3dchrome text
➣ ${prefix}metalb2 text
➣ ${prefix}metalg text
➣ ${prefix}metalg text

 *『 Otros 』*
➣ ${prefix}kalkulator
➣ ${prefix}smeme [text]
➣ ${prefix}memegen [text|text]

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
return`*Owner*
• < evaluate
• > evaluate
• $ exec
• => exec
» ${prefix}setmenu [query]
» ${prefix}setmenu templateLocation
» ${prefix}setmenu templateTenor
» ${prefix}sendsesi
» ${prefix}join [link]
» ${prefix}self
» ${prefix}public [only bot]
» ${prefix}del [pesan bot]
» ${prefix}setppbot [reply image]
`}

exports.group = (prefix) =>{
	return`*Group* 
» ${prefix}antilink [on/off]
» ${prefix}revoke
» ${prefix}leave
» ${prefix}add [62***]
» ${prefix}kick @tag
» ${prefix}leave
» ${prefix}linkgc
» ${prefix}group [open/close]
» ${prefix}tagall [text]
» ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`*Anime*
» ${prefix}quotesanime
» ${prefix}anime [query]
» ${prefix}manga [query]
» ${prefix}character [query]
`}

exports.search = (prefix) =>{
	return`*Search*
» ${prefix}ytsearch [query]
» ${prefix}film [query]
» ${prefix}wallpaper [query]
» ${prefix}wikimedia [query]
» ${prefix}hentai
» ${prefix}wattpad [query]
» ${prefix}webtoons [query]
» ${prefix}drakor [query]
» ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`*Converter*
» ${prefix}stiker [reply image]
» ${prefix}tourl [image/video]
» ${prefix}togif [sticker]
» ${prefix}tomp4 [sticker]
» ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`*Image Effect*
» ${prefix}wanted [reply image]
» ${prefix}utatoo [reply image]
» ${prefix}unsharpen [reply image]
» ${prefix}thanos [reply image]
» ${prefix}sniper [reply image]
» ${prefix}sharpen [reply image]
» ${prefix}sepia [reply image]
» ${prefix}scary [reply image]
» ${prefix}rip [reply image]
» ${prefix}redple [reply image]
» ${prefix}rejected [reply image]
» ${prefix}posterize [reply image]
» ${prefix}ps4 [reply image]
» ${prefix}pixelize [reply image]
» ${prefix}missionpassed [reply image]
» ${prefix}moustache [reply image]
» ${prefix}lookwhatkarenhave [reply image]
» ${prefix}jail [reply image]
» ${prefix}invert [reply image]
» ${prefix}instagram [reply image]
» ${prefix}greyscale [reply image]
» ${prefix}glitch [reply image]
» ${prefix}gay [reply image]
» ${prefix}frame [reply image]
» ${prefix}fire [reply image]
» ${prefix}distort [reply image]
» ${prefix}dictator [reply image]
» ${prefix}deepfry [reply image]
» ${prefix}ddungeon [reply image]
» ${prefix}circle [reply image]
» ${prefix}challenger [reply image]
» ${prefix}burn [reply image]
» ${prefix}brazzers [reply image]
» ${prefix}beautiful [reply image]
» ${prefix}jail [reply image]
» ${prefix}red [reply image]
» ${prefix}gay [reply image]
» ${prefix}bloo [reply image]
» ${prefix}blue [reply image]
» ${prefix}sepia [reply image]
» ${prefix}green [reply image]
» ${prefix}glass [reply image]
» ${prefix}invert [reply image]
» ${prefix}blurple [reply image]
» ${prefix}blurple2 [reply image]
» ${prefix}wasted [reply image]
» ${prefix}passed [reply image]
» ${prefix}triggered [reply image]
» ${prefix}comrade [reply image]
» ${prefix}greyscale [reply image]
» ${prefix}threshold [reply image]
» ${prefix}brightness [reply image]
» ${prefix}invertgreyscale [reply image]
`
}

exports.download = (prefix) =>{
return`*Download*
» ${prefix}tiktok [link]
» ${prefix}tiktoknowm [link]
» ${prefix}tiktokwm [link]
» ${prefix}tiktokaudio [link]
» ${prefix}ytdl [link]
» ${prefix}play [query]
» ${prefix}ytmp3 [link]
» ${prefix}ytshortmp3 [link]
» ${prefix}ytmp4 [link]
» ${prefix}ytshorts [link]
» ${prefix}facebook [link]
» ${prefix}facebooksd [link]
» ${prefix}facebookhd [link]
» ${prefix}fbaudio [link]
» ${prefix}igstory [username]
» ${prefix}igdl [link]
» ${prefix}igphoto [link]
» ${prefix}igvideo [link]
» ${prefix}igreels [link]
» ${prefix}igtv [link]
» ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`*Random Anime*
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
	return`*Textpro*
» ${prefix}halloween2 text|text2
» ${prefix}horror text|text2
» ${prefix}game8bit text|text2
» ${prefix}layered text|text2
» ${prefix}glitch2 text|text2
» ${prefix}coolg text|text2
» ${prefix}coolwg text|text2
» ${prefix}realistic text|text2
» ${prefix}space3d text|text2
» ${prefix}gtiktok text|text2
» ${prefix}stone text|text2
» ${prefix}marvel text|text2
» ${prefix}marvel2 text|text2
» ${prefix}pornhub text|text2
» ${prefix}avengers text|text2
» ${prefix}metalr text|text2
» ${prefix}metalg text|text2
» ${prefix}metalg2 text|text2
» ${prefix}halloween2 text|text2
» ${prefix}lion text|text2
» ${prefix}wolf_bw text|text2
» ${prefix}wolf_g text|text2
» ${prefix}ninja text|text2
» ${prefix}3dsteel text|text2
» ${prefix}horror2 text|text2
» ${prefix}lava text|text2
» ${prefix}bagel text|text2
» ${prefix}blackpink text
» ${prefix}rainbow2 text
» ${prefix}water_pipe text
» ${prefix}halloween text
» ${prefix}sketch text
» ${prefix}sircuit text
» ${prefix}discovery text
» ${prefix}metallic2 text
» ${prefix}fiction text
» ${prefix}demon text
» ${prefix}transformer text
» ${prefix}berry text
» ${prefix}thunder text
» ${prefix}magma text
» ${prefix}3dstone text
» ${prefix}neon text
» ${prefix}glitch text
» ${prefix}harry_potter text
» ${prefix}embossed text
» ${prefix}broken text
» ${prefix}papercut text
» ${prefix}gradient text
» ${prefix}glossy text
» ${prefix}watercolor text
» ${prefix}multicolor text
» ${prefix}neon_devil text
» ${prefix}underwater text
» ${prefix}bear text
» ${prefix}wonderfulg text
» ${prefix}christmas text
» ${prefix}neon_light text
» ${prefix}snow text
» ${prefix}cloudsky text
» ${prefix}luxury2 text
» ${prefix}gradient2 text
» ${prefix}summer text
» ${prefix}writing text
» ${prefix}engraved text
» ${prefix}summery text
» ${prefix}3dglue text
» ${prefix}metaldark text
» ${prefix}neonlight text
» ${prefix}oscar text
» ${prefix}minion text
» ${prefix}holographic text
» ${prefix}purple text
» ${prefix}glossyb text
» ${prefix}deluxe2 text
» ${prefix}glossyc text
» ${prefix}fabric text
» ${prefix}neonc text
» ${prefix}newyear text
» ${prefix}newyear2 text
» ${prefix}metals text
» ${prefix}xmas text
» ${prefix}blood text
» ${prefix}darkg text
» ${prefix}joker text
» ${prefix}wicker text
» ${prefix}natural text
» ${prefix}firework text
» ${prefix}skeleton text
» ${prefix}balloon text
» ${prefix}balloon2 text
» ${prefix}balloon3 text
» ${prefix}balloon4 text
» ${prefix}balloon5 text
» ${prefix}balloon6 text
» ${prefix}balloon7 text
» ${prefix}steel text
» ${prefix}gloss text
» ${prefix}denim text
» ${prefix}decorate text
» ${prefix}decorate2 text
» ${prefix}peridot text
» ${prefix}rock text
» ${prefix}glass text
» ${prefix}glass2 text
» ${prefix}glass3 text
» ${prefix}glass4 text
» ${prefix}glass5 text
» ${prefix}glass6 text
» ${prefix}glass7 text
» ${prefix}glass8 text
» ${prefix}captain_as2 text
» ${prefix}robot text
» ${prefix}equalizer text
» ${prefix}toxic text
» ${prefix}sparkling text
» ${prefix}sparkling2 text
» ${prefix}sparkling3 text
» ${prefix}sparkling4 text
» ${prefix}sparkling5 text
» ${prefix}sparkling6 text
» ${prefix}sparkling7 text
» ${prefix}decorative text
» ${prefix}chocolate text
» ${prefix}strawberry text
» ${prefix}koifish text
» ${prefix}bread text
» ${prefix}matrix text
» ${prefix}blood2 text
» ${prefix}neonligth2 text
» ${prefix}thunder2 text
» ${prefix}3dbox text
» ${prefix}neon2 text
» ${prefix}roadw text
» ${prefix}bokeh text
» ${prefix}gneon text
» ${prefix}advanced text
» ${prefix}dropwater text
» ${prefix}wall text
» ${prefix}chrismast text
» ${prefix}honey text
» ${prefix}drug text
» ${prefix}marble text
» ${prefix}marble2 text
» ${prefix}ice text
» ${prefix}juice text
» ${prefix}rusty text
» ${prefix}abstra text
» ${prefix}biscuit text
» ${prefix}wood text
» ${prefix}scifi text
» ${prefix}metalr text
» ${prefix}purpleg text
» ${prefix}shiny text 
» ${prefix}jewelry text
» ${prefix}jewelry2 text
» ${prefix}jewelry3 text
» ${prefix}jewelry4 text
» ${prefix}jewelry5 text
» ${prefix}jewelry6 text
» ${prefix}jewelry7 text
» ${prefix}jewelry8 text
» ${prefix}metalh text
» ${prefix}golden text
» ${prefix}glitter text
» ${prefix}glitter2 text
» ${prefix}glitter3 text
» ${prefix}glitter4 text
» ${prefix}glitter5 text
» ${prefix}glitter6 text
» ${prefix}glitter7 text
» ${prefix}metale text
» ${prefix}carbon text
» ${prefix}candy text
» ${prefix}metalb text
» ${prefix}gemb text
» ${prefix}3dchrome text
» ${prefix}metalb2 text
» ${prefix}metalg text
» ${prefix}metalg text
`
}

exports.nsfw = (prefix) =>{
	return`*Nsfw & Sfw*
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
return`*Others*
» ${prefix}kalkulator
» ${prefix}smeme [text]
» ${prefix}memegen [text|text]

`
}

exports.tqto = () =>{
	return`*Thanks To*
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
