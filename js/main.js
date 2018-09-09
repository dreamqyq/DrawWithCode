class DrawCode {
  constructor(code){
    this.code = code
  }

  init(){
    this.codeBoard = document.querySelector('#code')
    this.style = document.querySelector('#style')
    this.duration = 60
    this.timer = null
    this.writeCode('',this.code,this.endAnimation)
    this.changeSpeed()
  }

  writeCode(preCode,code,callback){
    let n = 0
    this.timer = setTimeout(function draw(){
      n += 1
      this.style.innerHTML = code.substring(0,n)
      this.codeBoard.innerHTML = Prism.highlight(preCode+code.substring(0,n), Prism.languages.css, 'css')
      this.codeBoard.scrollTop = this.codeBoard.scrollHeight
      if(n < code.length){
        this.timer = setTimeout(draw.bind(this),this.duration)
      }else if(n >= code.length){
        callback && callback.call()
      }
    }.bind(this),this.duration)
  }

  changeSpeed(){
    let currentSpeed = document.querySelector('.current >.speed')
    let btns = document.querySelectorAll('button')
    for(let i = 0;i < btns.length; i++){
      btns[i].addEventListener('click',function(e){
        let purpose = e.currentTarget.dataset.speed
        switch (purpose){
          case 'add':
            this.duration -= 10
            break
          case 'reduce':
             this.duration += 10
            break
          case 'skip':
            this.skipAnimation()
            break
          case 'current':
            console.log(this.duration)
            break
        }
        this.duration = this.checkDuration(this.duration)
        currentSpeed.innerHTML = 11 - this.duration/10
      }.bind(this))
    }
  }

  checkDuration(duration){
    if(duration > 100){
      duration = 100
      console.log('太慢啦')
    }else if(duration <= 0){
      duration = 10
      console.log('太快啦')
    }
    return duration
  }
  
  skipAnimation(){
    clearInterval(this.timer)
    this.style.innerHTML = this.code
    this.codeBoard.innerHTML = Prism.highlight(this.code, Prism.languages.css, 'css')
    this.codeBoard.scrollTop = this.codeBoard.scrollHeight
    this.endAnimation()
  }

  endAnimation(){
    document.querySelector('.code-wrapper').classList.add('active')
  }
}

let DrawPikachu = new DrawCode(window.CodeData.PikachuCode)
DrawPikachu.init()
