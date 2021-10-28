const menus = (prefix, pushname, jam, wita, hari, date) => {
  return `Hello ${pushname}👋
  
Hour : ${jam} || ${wita} WITA
Date : ${date}

   *Ini list menu nya kak 👤🤖*

*CONVERT*
 •${prefix}sticker
 •${prefix}stickergif
 •${prefix}toimg
  
*OWNER*
 •${prefix}self
 •${prefix}public
 •${prefix}banchat
 •${prefix}unbanchat
  
*STORAGE*
 •${prefix}addcmd
 •${prefix}delcmd
 •${prefix}listcmd
  
*GROUP*
 •${prefix}welcome
 •${prefix}setwelcome
 •${prefix}delwelcome
 •${prefix}left
 •${prefix}setleft
 •${prefix}delleft

*Bot Creator By ©Xeon`
}

exports.menus = menus
