isIPAddress(prmpt("Input ip adress",""));
function isIPAddress(str) {
    alert( /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/.test(str) )
    return str
}
findRGBA(prmpt("Input RGBA",""));
function findRGBA(str) {
    alert( /(rgba\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|rgba\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/.test(str) )
    return text
}
findHexColor(prmpt("Input hex color",""));
function findHexColor(str) {
    alert( /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(str) )
    return str
}
findPosNum(prmpt("Input pos number",""));
function findPosNum(str) {
    alert( /(!-)\b\d+\b|(\+\d+)/g.test(str) )
    return str
}
findDates(prmpt("Input date",""));
function findDates(str) {
    alert( /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g.test(str) )
    return str
}
findTags(prmpt("Input img tag",""));
function findTags(teg) {
    alert( teg.match(/<s class="img" (.+?)<\/s>|<s class="img" <\/s>/g) );
    return teg
}