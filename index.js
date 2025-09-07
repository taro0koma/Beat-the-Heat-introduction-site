function randomYellowRed(){
      const r = 200 + Math.floor(Math.random()*55);
      const g = Math.floor(Math.random()*150);
      const b = 0;
      return `rgba(${r},${g},${b},0.6)`;
    }

    let octagonDropped = false;
    function createOctagon(){
      if(octagonDropped) return; // 1回だけ
      octagonDropped = true;
      const oct = document.createElement('div');
      oct.classList.add('octagon');
      oct.style.background = randomYellowRed();
      oct.style.animationDuration = (3+Math.random()*3)+'s';
      document.body.appendChild(oct);

      oct.addEventListener('animationend', ()=>{
        for(let i=0;i<6;i++){
          const frag = document.createElement('div');
          frag.classList.add('fragment');
          frag.style.left = oct.getBoundingClientRect().left + 'px';
          frag.style.top = window.innerHeight - 60 + 'px';
          const dx = (Math.random()*200-100)+'px';
          const dy = (Math.random()*-200)+'px';
          frag.style.setProperty('--dx', dx);
          frag.style.setProperty('--dy', dy);
          frag.style.borderBottomColor = 'limegreen';
          document.body.appendChild(frag);
          setTimeout(()=>frag.remove(),1000);
        }
        oct.remove();
        octagonDropped = false; // 次のスクロールでもう一回落下できるようにする
      });
    }

    window.addEventListener('scroll', ()=>{
      createOctagon();
    });