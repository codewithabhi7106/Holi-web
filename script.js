function holiColor() {
 let text=document.getElementById("text")
 let img = document.getElementById("img");
  if (img.src.includes('https://images.herzindagi.info/image/2023/Feb/holi-wishes-2023-quotes-messages-facebook-and-whatsapp-status.jpg')) {
    
    img.src='https://img.freepik.com/premium-photo/happy-holi-background-illustration-with-people-celebrating_1102-10734.jpg?w=740'
    text.innerHTML ="होली के रंगो की तरह आपका जीवन भी रंगो से रंग जाए |"
  } 
  else if (img.src.includes('https://img.freepik.com/premium-photo/happy-holi-background-illustration-with-people-celebrating_1102-10734.jpg?w=740')) {
    img.src='https://www.holifestival.org/images/holi-image-1-big.jpg'
    text.innerHTML=`इस होली हर चेहरे पर मुस्कान
    और हर दिल में खुशी आ जाएं।`
  } 
  else if (img.src.includes('https://www.holifestival.org/images/holi-image-1-big.jpg')) {
    img.src='https://media.assettype.com/thequint%2F2022-03%2F2170dfa9-9e52-47f8-9a61-6b9acc70bd52%2FiStock_522121310.jpg?w=960'
    text.innerHTML=`होली पर पुराने झगड़ों को भुलाकर दोस्ती का हाथ बढ़ाएं।`
  }
  else if (img.src.includes('https://media.assettype.com/thequint%2F2022-03%2F2170dfa9-9e52-47f8-9a61-6b9acc70bd52%2FiStock_522121310.jpg?w=960')) {
    img.src ="https://cdn.dnaindia.com/sites/default/files/2023/03/01/2576262-untitled-design-26.jpg?im=FitAndFill=(1200,900)"
    text.innerHTML=`इस होली जल बचाएं और रंगो के साथ खुशियां मनाएं|`
  }
  else {
    img.src='https://images.herzindagi.info/image/2023/Feb/holi-wishes-2023-quotes-messages-facebook-and-whatsapp-status.jpg'
    text.innerHTML="आपको और आपके परिवार को होली की हार्दिक शुभकामनाएं|"
    return true;
  }
}
function startConfetti() {
  let duration = 5 * 50; // 5 seconds
  let end = Date.now() + duration;

  (function frame() {
    confetti({
     particleCount: 7,
     angle: 60,
     spread: 55,
     origin: { x: 0 }
    });
    confetti({
     particleCount: 7,
     angle: 120,
     spread: 55,
     origin: { x: 1 }
   });

    if (Date.now() < end) {
    requestAnimationFrame(frame);
       }
    })();
        }