!function(){
  let code = `
/*
 * 下面我准备用代码来画一个可爱的皮卡丘
 * 有木有很期待呀
 * ok，话不多说，这就开始咯
 * 请看左边
 *
 * 首先我们来画皮卡丘的小鼻子
 */

.nose{
  width:0px;
  height:0px;
  border:9px solid;
  border-color:#000 transparent transparent;
  border-radius:40%/35%;
  position:absolute;
  top:26px;
  left:50%;
  margin-left:-9px;
}

/*
 * 接下来画眼睛
 */

.eye{
  height:49px;
  width:49px;
  background:#2E2E2E;
  border-radius:50%;
  border:2px solid #000;
  position:absolute;
  top:0;
}

/*
 * 把左眼放在正确的位置
 */

.eye.left{
  right:50%;
  margin-right:66px
}

/*
 * 给左眼加一个明亮的眼珠
 */

.eye.left::before{
  content:'';
  height:21px;
  width:21px;
  border-radius:50%;
  border:1px solid #000;
  background:#fff;
  position:absolute;
  top:2px;
  left:3px;
}

/*
 * 接下来画右眼
 */

.eye.right{
  left:50%;
  margin-left:66px;
}

/*
 * 当然右眼也得有眼珠
 */

.eye.right::before{
  content:'';
  height:21px;
  width:21px;
  border-radius:50%;
  border:1px solid #000;
  background:#fff;
  position:absolute;
  top:2px;
  left:3px;
}

/*
 * 然后来画皮卡丘的两腮
 */

.dimple{
  height:63px;
  width:63px;
  border:2px solid #000;
  border-radius:50%;
  background:#f00;
  position:absolute;
  top:80px;
}

/*
 * 先是右边的
 */

.dimple.right{
  left:50%;
  margin-left:125px;
}

/*
 * 再是左边
 */

.dimple.left{
  right:50%;
  margin-right:125px;
}

/*
 * 有一点点雏形了呢
 * 别急，很快就画好咯
 * 下面来画上嘴唇
 */

.upperLip{
  width:64px;
  height:25px;
  border:3px solid;
  position:absolute;
  top:-9px;
  background:#ffe600;
  border-top: none;
}

/*
 * 调成左边嘴唇的位置
 */

.upperLip.left{
  right:50%;
  border-bottom-left-radius:40px 20px;
  border-color:transparent transparent #000 #000;
  border-right:none;
  transform:rotate(-25deg);
}

/*
 * 调整右边嘴唇
 */

.upperLip.right{
  left:50%;
  border-bottom-right-radius:40px 20px;
  border-color:transparent #000 #000 transparent;
  border-left:none;
  transform:rotate(25deg);
}

/*
 * 然后是嘴巴
 */

.lowerLip{
  height:2000px;
  width:150px;
  border:2px solid;
  position:absolute;
  bottom:0;
  left:50%;
  margin-left:-75px;
  border-radius:100px/600px;
  background:#9b000a;
  overflow:hidden;
}

/*
 * 再画上小舌头
 */

.lowerLip::after{
  content:'';
  width:100px;
  height:95px;
  border-radius:60px/40px;
  background:#ff485f;
  position:absolute;
  bottom:0;
  left:50%;
  margin-left:-50px;
}

/*
 * 好啦，全部完成 
 * 一个可爱的皮卡丘送给你，希望你能喜欢
 * by Enoch
 */

`
  let codeBoard = document.querySelector('#code')
  let style = document.querySelector('#style')
  let duration = 60
  let timer = null
  writeCode('',code,endAnimation)
  changeSpeed()
  function writeCode(preCode,code,callback){
    let n = 0
    timer = setTimeout(function draw(){
      n +=1
      style.innerHTML = code.substring(0,n)
      codeBoard.innerHTML = Prism.highlight(preCode+code.substring(0,n), Prism.languages.css, 'css')
      codeBoard.scrollTop = codeBoard.scrollHeight
      if(n < code.length){
        timer = setTimeout(draw,duration)
      }else if(n >= code.length){
        callback && callback.call()
      }
    },duration)
  }
  function changeSpeed(){
    let currentSpeed = document.querySelector('button>.speed')
    let btns = document.querySelectorAll('button')
    for(let i = 0;i < btns.length; i++){
      btns[i].addEventListener('click',function(e){
        let purpose = e.currentTarget.dataset.speed
        switch (purpose){
          case 'add':
            duration -= 10
            break
          case 'reduce':
             duration += 10
            break
          case 'skip':
            skipAnimation()
            break
          case 'current':
            console.log(duration)
            break
        }
        duration = checkDuration(duration)
        currentSpeed.innerHTML = 11 - duration/10
      })
    }
  }
  function checkDuration(duration){
    if(duration > 100){
      duration = 100
      console.log('太慢啦')
    }else if(duration <= 0){
      duration = 10
      console.log('太快啦')
    }
    return duration
  }
  function skipAnimation(){
    clearInterval(timer)
    style.innerHTML = code
    codeBoard.innerHTML = Prism.highlight(code, Prism.languages.css, 'css')
    codeBoard.scrollTop = codeBoard.scrollHeight
    endAnimation()
  }
  function endAnimation(){
    document.querySelector('.code-wrapper').classList.add('active')
  }
}.call()
