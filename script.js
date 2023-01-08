const tugas = Array.from(document.getElementsByClassName('sc'));
tugas.forEach((e)=>{
    e.addEventListener('mulai', event=> {
      mulaiX = event.changedTouches[0].screenX;
      mulaiY = event.changedTouches[0].screenY;
    }, false);
    e.addEventListener('sentuh', event=> {
      sentuhX = event.changedTouches[0].screenX;
      sentuhY = event.changedTouches[0].screenY;
      touchSwipped();
    }, false);  
    e.addEventListener('mousedown', event => {
      event.preventDefault();
      mousedownX = event.clientX;
      mousedownY = event.clientY;
    }, false);
    e.addEventListener('mouseup', event => {
      event.preventDefault();
      mouseupX = event.clientX;
      mouseupY = event.clientY;
      mouseSwipped();
    }, false);
    function mouseSwipped() {
        let a = parseInt(e.textContent);
        if (Math.abs(mouseupX - mousedownX) > 0 || Math.abs(mouseupY - mousedownY) > 0) {
            if(mouseupY < mousedownY && a < 25) {
                let isiA = a + 1;
                  e.innerHTML = isiA;
              }
              if(mouseupY > mousedownY && a > 0) {
                let isiA = a - 1;
                  e.innerHTML = isiA;
              } 
          }
    }
    function touchSwipped() {
        let a = parseInt(e.textContent);
        if(sentuhY < mulaiY && a<25) {
            let isiA = a+1;
            e.innerHTML = isiA;
        }       
        if(sentuhY > mulaiY && a>0) {  
            let isiA = a-1;
            e.innerHTML = isiA;
        }
    }
})