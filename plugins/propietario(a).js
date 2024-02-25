2}\`\`\`\n\n*${lenguajeGB.smsBCbot5()} ${time2}*\n${totalPri2 >= 500000 ? `\n*${lenguajeGB.smsBCbot6()}*` : ''}`)        
break
        
case isCommand16:
try{
await m.reply(lenguajeGB.smsreiniciar()) 
console.log(chalk.bold.magenta('❇️ RESETTING... ❇️'))
process.send('reset')
} catch (e) {
reportError(e)}  
break
        
}}
handler.command = /^(backup|respaldo|copia|ban(user|usuario|earuser|earusuario)|seradmin|autoadmin|tenerpoder|(set|cambiar|nueva|new)(bio|botbio|biobot)|(set|cambiar|nuev(a|o)?|new)(name|botname|namebot|nombre|nombrebot|botnombre)|(set|cambiar|nueva|new)(ppbot|botpp|fotobot|botfoto)|update|actualizar|ups|banchat|banearchat|block|unblock|bloquear|desbloquear|restablecerdatos|borrardatos|deletedatauser|join|nuevogrupo|newgrupo|unete|bcbot|bcsubbot|bcsubot|(broadcast|bc)(group|grup|gc)|broadcastchats?|bcc(hats?)?|broadcastall|bc|reiniciar|restart)$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
  
const delay = time => new Promise(res => setTimeout(res, time))
