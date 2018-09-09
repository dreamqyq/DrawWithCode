class DrawCode {
  constructor(code,callback){
    this.code = code
    this.callback = callback
  }

  init(){
    this.codeBoard = document.querySelector('#code')
    this.style = document.querySelector('#style')
    this.duration = 60
    this.timer = null
    this.currentSpeed = document.querySelector('.current > .speed')
    this.pikachuPreview = document.querySelector('.preview.pikachu')
    this.doraemonPreview = document.querySelector('.preview.doraemon')
    this.btns = document.querySelectorAll('button')
    document.querySelector('.code-wrapper').classList.remove('active')
    this.currentSpeed.innerHTML = 5
    this._writeCode('',this.code,this._endAnimation)
    this._changeSpeed()
    this.userSelector = document.querySelector('.userSelector')
  }

  _writeCode(preCode,code,callback){
    let n = 0
    this.timer = setTimeout(function draw(){
      n += 1
      this.style.innerHTML = code.substring(0,n)
      this.codeBoard.innerHTML = Prism.highlight(preCode+code.substring(0,n), Prism.languages.css, 'css')
      this.codeBoard.scrollTop = this.codeBoard.scrollHeight
      if(n < code.length){
        this.timer = setTimeout(draw.bind(this),this.duration)
      }else if(n >= code.length){
        callback && callback.call(this)
      }
    }.bind(this),this.duration)
  }

  _changeSpeed(){
    for(let i = 0;i < this.btns.length; i++){
      this.btns[i].addEventListener('click',function(e){
        let purpose = e.currentTarget.dataset.speed
        switch (purpose){
          case 'add':
            this.duration -= 10
            break
          case 'reduce':
            this.duration += 10
            break
          case 'skip':
            this._skipAnimation()
            break
          case 'current':
            console.log(this.duration)
            break
        }
        this.duration = this._checkDuration(this.duration)
        this.currentSpeed.innerHTML = 11 - this.duration/10
      }.bind(this))
    }
  }

  _checkDuration(duration){
    if(duration > 100){
      duration = 100
      console.log('太慢啦')
    }else if(duration <= 0){
      duration = 10
      console.log('太快啦')
    }
    return duration
  }

  _skipAnimation(){
    clearInterval(this.timer)
    this.style.innerHTML = this.code
    this.codeBoard.innerHTML = Prism.highlight(this.code, Prism.languages.css, 'css')
    this.codeBoard.scrollTop = this.codeBoard.scrollHeight
    this._endAnimation()
  }
  _removeEvents(el){
    let elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);
    this.userSelector = document.querySelector('.userSelector')
  }

  _endAnimation(){
    document.querySelector('.code-wrapper').classList.add('active')
    this.userSelector.classList.remove('disabled')
    this.userSeletorEvent(this.callback).then(()=>{
      this._removeEvents(this.userSelector)
      this.userSelector.classList.add('disabled')
    })
  }

  userSeletorEvent(callback){
    return new Promise (resolve => {
      this.userSelector.addEventListener('click',event=>{
        let el = event.target
        if(el.matches('img')){
          let data = el.dataset.pic
          callback.call(this,data,[this.pikachuPreview,this.doraemonPreview])
          resolve.call()
        }
      })
    })
  }
}

let draw = new DrawCode(window.CodeData.firstCode,selectFn)
draw.init()
function selectFn(data,options){
  switch (data){
    case 'pikachu':
      options[0].classList.add('show')
      options[1].classList.remove('show')
      draw = new DrawCode(window.CodeData.PikachuCode,selectFn)
      draw.init()
      break
    case 'doraemon':
      options[0].classList.remove('show')
      options[1].classList.add('show')
      draw = new DrawCode(window.CodeData.DoraemonCode,selectFn)
      draw.init()
      break
  }
}
