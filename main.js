const emojis = [
    {dec:'&#129303', hex:'1F917'},
    {dec:'&#129304', hex:'1F918'},
    {dec:'&#129305', hex:'1F919'},
    {dec:'&#129306', hex:'1F91A'},
    {dec:'&#129307', hex:'1F91B'},
    {dec:'&#129308', hex:'1F91C'},
    {dec:'&#129309', hex:'1F91D'},
    {dec:'&#129310', hex:'1F91E'},
    {dec:'&#129311', hex:'1F91F'},
    {dec:'&#129314', hex:'1F922'},

    {dec:'&#128527', hex:'1F60F'},
    {dec:'&#128528', hex:'1F610'},
    {dec:'&#128529', hex:'1F611'},
    {dec:'&#128530', hex:'1F612'},
    {dec:'&#128531', hex:'1F613'},
    {dec:'&#128532', hex:'1F614'},
    {dec:'&#128533', hex:'1F615'},
    {dec:'&#128534', hex:'1F616'},
    {dec:'&#128535', hex:'1F617'},
    {dec:'&#128536', hex:'1F618'},

    {dec:'&#128512', hex:'1F600'},
    {dec:'&#128513', hex:'1F601'},
    {dec:'&#128514', hex:'1F602'},
    {dec:'&#128520', hex:'1F608'},
    {dec:'&#128521', hex:'1F609'},
    {dec:'&#128522', hex:'1F60A'},
    {dec:'&#128523', hex:'1F60B'},
    {dec:'&#128524', hex:'1F60C'},
    {dec:'&#128525', hex:'1F60D'},
    {dec:'&#128526', hex:'1F60E'},

    {dec:'&#128537', hex:'1F619'},
    {dec:'&#128538', hex:'1F61A'},
    {dec:'&#128539', hex:'1F61B'},
    {dec:'&#128540', hex:'1F61C'},
    {dec:'&#128541', hex:'1F61D'},
    {dec:'&#128542', hex:'1F61E'},
    {dec:'&#128543', hex:'1F61F'},
    {dec:'&#128544', hex:'1F620'},
    {dec:'&#128545', hex:'1F621'},
    {dec:'&#128546', hex:'1F622'},

    {dec:'&#128586', hex:'1F64A'},
    {dec:'&#128585', hex:'1F649'},
    {dec:'&#128584', hex:'1F648'},
    {dec:'&#129409', hex:'1F981'},
    {dec:'&#129411', hex:'1F983'},
    {dec:'&#129412', hex:'1F984'},
    {dec:'&#129415', hex:'1F987'},
    {dec:'&#129417', hex:'1F989'},
    {dec:'&#129418', hex:'1F98A'},
    {dec:'&#129420', hex:'1F98C'},



]

const $emojiCard = document.querySelector('.container')
const html = []
 

for (const emoji of emojis) {
    console.log(emoji)
   html.push(`<div class="emoji-card">
                    <div class="emoji-icon">${emoji.dec}</div>
                    <p>${emoji.hex}</p> 
            </div>`)
  }  

$emojiCard.innerHTML = html.join('')