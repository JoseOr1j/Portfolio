// begin cookie.js

// creates the cookie box and button banner 
const cookieBox = document.querySelector(".wrapper-cookie");
const buttons = document.querySelectorAll(".button-cookie");

// if any of these cookies exist (meaning user has given consent) then the banner will not pop up
const executeCodes = () => {
// Check if cookie contains name check cookie once the website is active

// cookie for saved preference 
cookieClass();

// begin function cookies 
function cookieClass()
{
  if (document.cookie.includes("savePref"))
{
  cookieBox.classList.remove("show");
}
else if (document.cookie.includes("declineSavePref"))
{
  cookieBox.classList.remove("show")
}
else if (document.cookie.includes("ga-cookie"))
{
  cookieBox.classList.remove("show");
}
else if (document.cookie.includes("gid-cookie"))
{
  cookieBox.classList.remove("show");
}
else
{
  cookieBox.classList.add("show");
}

}


buttons.forEach((button) => {
button.addEventListener("click", () => {
cookieBox.classList.remove("show");


if (button.id == "acceptBtn-cookie") {
  // Set the cookie to expire at the end of the session
  const expires = (new Date(Date.now() + 86400 * 1000 * 7));
  expires.toUTCString();
  document.cookie = "acceptCookieSave=savePref; expires= " + expires + ";path=/";
} 


// this is a cookie that saves the decline value so that the user does not need to decline till after 7 days 
if (button.id == "declineBtn-cookie")
{ // decline cookie 
  //const expires2 = (new Date(Date.now() + 86400 * 1000 * 7));
  const expires2 = (new Date(Date.now() + 86400 * 1000 * 7));
  // 86400 * 1000 = 1 day 
  expires2.toUTCString();
  document.cookie = "declineCookieSave=declineSavePref; expires=" + expires2 + ";path=/";
}

else 
{
  // Delete the cookies because this date has already passed 
ga('set', 'anonymizeIp', true);
ga('set', 'displayFeaturesTask', null);
ga('set', 'useAmpClientId', null);
ga('set', 'allowAdFeatures', false);
ga('set', 'allowLinker', false);

gid('set', 'anonymizeIp', true);
gid('set', 'displayFeaturesTask', null);
gid('set', 'useAmpClientId', null);
gid('set', 'allowAdFeatures', false);
gid('set', 'allowLinker', false);

gat('set', 'anonymizeIp', true);
gat('set', 'displayFeaturesTask', null);
gat('set', 'useAmpClientId', null);
gat('set', 'allowAdFeatures', false);
gat('set', 'allowLinker', false);

gtag('set', 'anonymizeIp', true);
gtag('set', 'displayFeaturesTask', null);
gtag('set', 'useAmpClientId', null);
gtag('set', 'allowAdFeatures', false);
gtag('set', 'allowLinker', false);

JAR('set', 'anonymizeIp', true);
JAR('set', 'displayFeaturesTask', null);
JAR('set', 'useAmpClientId', null);
JAR('set', 'allowAdFeatures', false);
JAR('set', 'allowLinker', false);

cf('set', 'anonymizeIp', true);
cf('set', 'displayFeaturesTask', null);
cf('set', 'useAmpClientId', null);
cf('set', 'allowAdFeatures', false);
cf('set', 'allowLinker', false);
// these cookies are google analytic cookies and they are set to false/null 

document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "_gtag=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "_gat; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "__cf_bm; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure;";
document.cookie = "JAR; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure";
/* google fonts, google analytics, gtag manager, google ads */
}
});
});
};

window.addEventListener("load", executeCodes);
// end cookie.js


/* 
What this code does: 
Once someone is on the site this js code will launch the button asking for cookie permission 
If the cookie already exists on the system then the launcher will not show up as the cookie has already been accepted/denied
If it is the users first time or the cookie has expired then it will ask the user again if they would like to accept/deny 
Some cookies expire after the user leaves the site so they only last for the session and the user will be prompted again 

Push to github: 
github git ignore remove
rm .gitignore
del .gititgnore
git add .
git commit -m "removed"
git push
*/