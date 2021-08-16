undefined
const kbd = new KeyboardEvent('keydown',{
    key:'h',
    ctrlKey:'true'
});
const kbu = new KeyboardEvent('keyup',{
    key:'h',
    ctrlKey:'true'
});
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
function checkCookie() {
    let isbot = getCookie("bot");
    if (isbot != "") {
        console.log("Ban Detected! Clearing..")
        document.cookie = "bot=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}
const x = setInterval(function(){
    checkCookie();
    document.dispatchEvent(kbd);
    document.dispatchEvent(kbu);
    console.log("clicked")
},40);

console.log("%c TheNiceDayX.#0001", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
console.log("%cThis is my style", "background: green; color: white; display: block;");
console.log("%c ", "font-size: 1px; padding: 125px 125px; background-size: 250px 250px; background: no-repeat url(https://i2.wp.com/i.giphy.com/media/12BYUePgtn7sis/giphy-downsized.gif?w=770&amp;ssl=1);")
