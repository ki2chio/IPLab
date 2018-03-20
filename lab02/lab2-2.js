isIPAddress(prompt("Input ip adress","My ip addres 192.168.0.1 "));
function isIPAddress(str) {
    alert( /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/.test(str) )
    return str
}
findRGBA(prompt("Input RGBA","rgba(255, 142, 30, 0.5) color"));
function findRGBA(str) {
    alert( /(rgba\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|rgba\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/.test(str) )
    return text
}
findHexColor(prompt("Input hex color"," Color is #ABCDEF"));
function findHexColor(str) {
    alert( /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/.test(str) )
    return str
}
findPosNum(prompt("Input pos number"," asdas 1ewqwqwq 2jhjhghg  3 ddfgr5sd 8 dashjkd "));
function findPosNum(str) {
    alert( /(!-)\b\d+\b|(\+\d+)/g.test(str) )
    return str
}
findDates(prompt("Input date","1939-01-09 it's date 2018-03-19"));
function findDates(str) {
    alert( /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g.test(str) )
    return str
}
findTags(prompt("Input tag","Hello my favourite color is red,red"));
function findTags(text, tag){
    var regexp =  new RegExp(tag, 'g');
    var result = "";
    var res = "";

    while (result = regexp.exec(text)) {
        res += result[0] + " ";
}
