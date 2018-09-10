window.CodeData = {
  firstCode: `
/*
* 今天我来为各位画一幅画吧
* 画什么好呢
* 看到左边一片空白的淡黄色背景了没
* 那就是我的舞台
* 现在，先别着急
* 请注意右边两个可爱的圆形图标
* 你想看我画什么，就请移动鼠标点击它呦
* 不过需要提示一下，如果在代码展示区中的动画未完成
* 这两个图标是不能点击的，如果您觉得代码出现速度太慢了
* 也可以点击上方按钮直接跳过呦
* 接下来，请做出你的选择吧
* 然后就是见证奇迹的时刻！
*/
  `,
  PikachuCode: `
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
 * 没看过瘾？
 * 你还可以点击右边的按钮选择再画一个蓝胖子呦
 *
 * by Enoch
 */

`,

  DoraemonCode: `
/*
 * 下面我准备用代码来画一个可爱的哆啦A梦
 * 有木有很期待呀
 * ok，话不多说，这就开始咯
 * 请看左边
 *
 * 首先我们来画哆啦A梦的脑袋
 */
.head{
  width:240px;
  height:230px;
  border:2px solid #000;
  border-radius:110px 110px 125px 125px;
  background:#03A6D7;
  position:absolute;
  top:0;
  left:0;
  right:0;
  margin:0 auto;
  z-index:1;
}
/*
* 然后是眼睛
*/
.eye-wrapper{
  position:absolute;
  width:60px;
  heigh:66px;
  top:39px;
  left:50%;
  z-index:1;
}
.eye-wrapper.left{
  margin-left:-60px;
}
.eye{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60px;
  height: 66px;
  background-color: #fff;
  border-radius:30px;
  border: 2px solid  #000;
  animation:eye-close 6s 5s infinite;
}
/*
* 加上瞳孔更可爱
*/
.pupil{
  position:absolute;
  height:20px;
  width:16px;
  background:#000;
  border-radius:50%;
  bottom:20px;
}
.pupil::after{
  content:'';
  position:absolute;
  background:#fff;
  width:6px;
  height:8px;
  border-radius:50%;
  top:4px;
}
.eye-wrapper.left .pupil{
  right:7px;
}
.eye-wrapper.left .pupil::after{
  right:3px;
}
.eye-wrapper.right .pupil{
  left:7px;
}
.eye-wrapper.right .pupil::after{
  left:3px;
}
/*
* 蓝胖子的脸蛋
*/
.face{
  height:180px;
  width:225px;
  border:2px solid #000;
  background:#fff;
  border-radius:75px 75px 120px 120px;
  position:absolute;
  top:45px;
  left:0;
  right:0;
  margin:0 auto;
} 
/*
* 小鼻子
*/
.nose{
  height:40px;
  width:40px;
  background:#D10429;
  border:2px solid #000;
  border-radius:50%;
  position:absolute;
  top:9px;
  left:0;
  right:0;
  margin:0 auto;
  z-index:1;
}
.nose::before{
  content:'';
  height:13px;
  width:13px;
  background:#fff;
  position:absolute;
  border-radius:50%;
  top:5px;
  left:9px;
}
/*
* 然后胡须
*/
.middleLine{
  width:0;
  height:100px;
  border:1.5px solid #000;
  position:absolute;
  top:10px;
  left:0;
  right:0;
  margin: 0 auto;
}
.moustache{
  position:absolute;
  top:30px;
  left:50%;
  z-index:1;
}
.moustache.left{
  margin-left:-110px;
}
.moustache > .line{
  width:70px;
  height:2px;
  background:#000;
  margin:17px;
}
.moustache > .line:nth-child(1){
  transform:rotateZ(10deg);
}
.moustache > .line:nth-child(2){
   height:2px; 
}
.moustache > .line:nth-child(3){
  transform:rotateZ(-10deg);
}
.moustache.right{
  margin-right:-110px;
  transform:rotateY(180deg);
}

/*
* 送你一个微笑
*/
.lips{
  width:200px;
  height:60px;
  border:2px solid #000;
  border-top:transparent;
  border-left:transparent;
  border-right:transparent;
  position:absolute;
  bottom:40px;
  left:0;
  right:0;
  margin:0 auto;
  border-radius:0 0 150px 150px/0 0 100px 100px; 
}

/*
* 红色的围脖
*/
.neck{
  position:absolute;
  width:180px;
  height:20px;
  background:#D10429;
  border:2px solid #000;
  border-radius:10px;
  top:200px;
  left:0;
  right:0;
  margin:0 auto;
  z-index:2;
}
/*
* 再来一个铃铛～
*/
.bell{
  position:absolute;
  width:50px;
  height:50px;
  background:#F9E036;
  border-radius:50%;
  border:2px solid #000;
  left:0;
  right:0;
  margin:0 auto;
}
.bell::after{
  content:'';
  position:absolute;
  border:2px solid #000;
  background:#F9E036;
  width:52px;
  height:5px;
  border-radius:5px;
  top:10px; 
  left:50%;
  margin-left:-26px;
}
.hole{
  position:absolute;
  width:15px;
  height:15px;
  border:2px solid #000;
  background:#837467;
  border-radius:50%;
  bottom:10px;
  right:0;left:0;
  margin:0 auto;
}
.hole::after{
  content:'';
  position:absolute;
  height:12px;
  width:2px;
  background:#000;
  top:100%;
  left:0;right:0;
  margin:0 auto;
}

/*
* 然后是身体部分
*/
.body{
  height:170px;
  width:195px;
  border:2px solid #000;
  border-radius:30px 50px 10px 10px;
  border-top:transparent;
  background:#03A6D7;
  position:absolute;
  left:0;
  right:0;
  margin:0 auto;
  top:200px;
}
.body::before{
  content:'';
  width:14px;
  height:34px;
  background:#03A6D7;
  border-radius:5px;
  position:absolute;
  right:-2px;
  top:13px;
  z-index:1;
}
/*
* 肚子上的口袋
*/
.belly{
  width:180px;
  height:140px;
  background:#fff;
  border:2px solid #000;
  border-radius:95px/80px;
  position:absolute;
  top:10px;
  left:0;
  right:0;
  margin:0 auto;
  z-index:1;
}
.belly::after{
  content:'';
  width:140px;
  height:60px;
  border:2px solid #000;
  border-radius:0 0 70px 70px;
  position:absolute;
  top:60px;
  left:0;
  right:0;
  margin:0 auto;
}
/*
* 接下来就要画胳膊啦
*/
.arm{
  height:50px;
  background:#03A6D7;
  border:2px solid #000;
  position:absolute;
  border-radius:10px;
}
/*
* 左胳膊
*/
.arm.left{
  width:130px;
  border-right:transparent;
  transform:rotateZ(50deg);
  left:-85px;
  top:-47px;
}
/*
* 右胳膊
*/
.arm.right{
  width:100px;
  right:32px;  
  top:225px;
  transform:rotateZ(30deg);
}
/*
* 来画上圆圆的小手
*/
.arm::after{
  content:'';
  border:2px solid #000;
  width:60px;
  height:60px;
  background:#fff;
  border-radius:50%;
  position:absolute;
}
.arm.left::after{
  left:-35px;
  top:-10px;i
}
.arm.right::after{
  right:-35px;
  top:-10px;
}
/*
* 最后就是脚啦
*/
.foot{
  width:120px;
  height:50px;
  border:2px solid #000;
  border-radius:30px;
  background:#fff;
  position:absolute;
  bottom:-5px;
}
.foot.left{
  left:50%;
  margin-left:-130px;
}
.foot.right{
  right:50%;
  margin-right:-130px;
}
.body::after{
  content:'';
  position:absolute;
  width:45px;
  height:20px;
  background:#FFE600;
  border:2px solid #000;
  border-bottom:transparent;
  border-radius:50% 50% 0 0;
  left:0;right:0;
  margin:0 auto;
  bottom:-11px;
}
/*
 * 好啦，全部完成 
 * 一个可爱的蓝胖子送给你，希望你能喜欢
 * 没看过瘾？
 * 你还可以点击右边的按钮选择再画一只皮卡丘呦
 *
 * by Enoch
 */
  `
}
