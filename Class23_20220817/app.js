const apps = {
    Android: 'https://play.google.com/',
    iOS: 'https://www.apple.com/store',
  };
  
  const platform = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) return 'Windows Phone';
    if (/android/i.test(userAgent)) return 'Android';
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
    return null;
  };
  
  const redirect = () => {
    let os = platform();
    if (os in apps) {
      location.replace(apps[os]);
    } else {
      const message = document.querySelector('.message');
      message.innerText = 'Your OS is not supported';
    }
  };
  
  redirect();


  // DAŽI PIEMĒRI:
/* Cik sapratu manas navigator metodes attiecās tikai uz Aplikācijām, Spēlēm utt.:*/
console.log(navigator.mediaDevices);
/*The Navigator.mediaDevices read-only property returns a MediaDevices object,
which provides access to connected media input devices like cameras and microphones, as well as screen sharing.
Piekļuve pieslēgtām kamerai, mikrofonam un šērotam ekrānam.*/
console.log(navigator.maxTouchPoints);
/*The maxTouchPoints read-only property of the Navigator interface returns the maximum number of simultaneous
touch contact points are supported by the current device.
Atgriež maksimāli pieļaujamo touchpunktu skaitu, ko lietotāja iekārta ļauj.*/
console.log(navigator.mimeTypes);
/*A MIME type (or media type) is an identifier for file formats or format contents on the Internet.
MIME stands for Multipurpose Internet Mail Extensions.
!!!!!!!!!This feature is no longer recommended!!!!!!.*/
console.log(navigator.onLine);
/*Returns the online status of the browser.
Izmanto, kad strādā ar iekārtām, kad ir/nav pieslēgties pie interneta?*/

console.log(navigator.doNotTrack);
console.log(navigator.geolocation);
/*Paziņojums servisam, piemēram, reklāmu pielāgošanai..*/
console.log(navigator.credentials);
let language = navigator.language;
