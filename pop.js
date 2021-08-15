let keyDownEvent = new KeyboardEvent("keydown", { key: "space" });
let keyUpEvent = new KeyboardEvent("keyup", { key: "space" });

function legitPop() {
  document.dispatchEvent(keyDownEvent);
  document.dispatchEvent(keyUpEvent);
}

async function legitMassPop(pop_count) {
  for (let i = 0; i < pop_count; i++) {
    legitPop();
  }
}

function legitClearCookie(cookie_name) {
  let cookies = document.cookie.split(";").map((cookieString) => {
    let cookieArray = cookieString.trim().split("=");
    return {
      name: cookieArray[0] ? cookieArray[0] : "",
      propertyString: cookieArray[1] ? cookieArray[1] : ""
    };
  });

  let filteredCookies = cookies.filter(
    (cookie) =>
      cookie.propertyString && cookie.name.toLowerCase() !== cookie_name
  );
  let cookieStringArray = filteredCookies.map((cookie) =>
    cookie.name.concat("=").concat(cookie.propertyString)
  );
  let cookieString = cookieStringArray.join("; ");

  document.cookie = cookieString;
}

function legitResetSequentialMaxPops() {
  let vueElement = document.getElementById("app").__vue__;

  vueElement.sequential_max_pops = 0;
}

function legitMassPopProcess(pop_count, cookie_name) {
  legitClearCookie(cookie_name);
  legitResetSequentialMaxPops();
  legitMassPop(pop_count);
}

function legitStartAutomation(pop_count, interval = 30e3, cookie_name = "bot") {
  legitMassPopProcess(pop_count, cookie_name);
  setInterval(() => {
    legitMassPopProcess(pop_count, cookie_name);
  }, interval);
}

legitStartAutomation(800);

console.log("%c TheNiceDayX.#0001", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
console.log("%cThis is my style", "background: green; color: white; display: block;");
console.log("%c ", "font-size: 1px; padding: 125px 125px; background-size: 250px 250px; background: no-repeat url(https://i2.wp.com/i.giphy.com/media/12BYUePgtn7sis/giphy-downsized.gif?w=770&amp;ssl=1);")
