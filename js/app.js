const countdownZone = document.querySelector('.countdownZone')
const countdownZone1 = document.querySelector('.countdownZone1');
const countdownZone2= document.querySelector('.countdownZone2');
const countdownZone3 = document.querySelector('.countdownZone3');
const timeZone = document.querySelector('.timeZone');
const timeZone1 = document.querySelector('.timeZone1');
const timeZone2 = document.querySelector('.timeZone2');
const timeZone3 = document.querySelector('.timeZone3');
const menuContnet =  document.querySelector('.menuContent');
const _input = document.querySelector('.inputs input');
const submitBtn = document.querySelector('.submit');
const resetBtn = document.querySelector('.reset');
const shiftBg = document.querySelector('.shiftBg');
const container = document.querySelector('.container');
const addBtn = document.querySelector('.addBtn');
const menuBtn = document.querySelector('.menuBtn');
const menuBox = document.querySelector('.menuBox');
const addBox = document.querySelector('.addCountdownBox');
const addTimeZone = document.querySelector('.addTimeZone');
const addTimeZone1 = document.querySelector('.addTimeZone1');
const overBtn = document.querySelector('.overBtn');
const PSBtn = document.querySelector('.PSBtn');
const remindAudio = document.querySelector('.remindAudio');
const remindBtn = document.querySelector('.remindBtn');
const remind = document.querySelector('.remind');
//默认倒计时
let countdown = (y,m,d,h,mm,s,info) =>{
    let strTime = `${y}/${m}/${d},${h}:${mm}:${s}`
  let startTime = new Date();
  let endTime = new Date(strTime);
  let second = (endTime.getTime() - startTime.getTime())/1000
  let day = parseInt(second/(60*60*24))
  countdownZone2.innerText=day
  countdownZone1.innerHTML=info
  countdownZone3.innerText="天"
}

// 时钟
let clock = ()=>{
    let date=new Date();
    let y = date.getFullYear();
    let m = date.getMonth()+1;
    let d = date.getDate();
    let h = date.getHours();
    let mm = date.getMinutes();
    let s = date.getSeconds()+1;
    let w = date.getDay();
    let index=0
    let week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
   for(let i = 0; i<w; i++){
       index++
   }
   timeZone2.innerText = `${y}年${m}月${d}日`
    timeZone3.innerText = week[index]
   // 设置分钟和秒格式为00
  if(s<10 && mm>=10 && h>=10)  timeZone1.innerText=`${h} : ${mm} : 0${s}`;
  else if(mm<10 && s>=10 && h>=10) timeZone1.innerText=`${h} : 0${mm} : ${s}`;
  else if(h<10 && s>=10 && mm>=10)  timeZone1.innerText=`0${h} : ${mm} : ${s}`;
  else if(s<10 && mm<10 && h>=10) timeZone1.innerText=`${h} : 0${mm} : 0${s}`;
  else if(s<10 && h<10 && mm>=10) timeZone1.innerText=`0${h} : ${mm} : 0${s}`;
  else if(h<10 && mm<10 && s>=10) timeZone1.innerText=`0${h} : 0${mm} : ${s}`;
  else if(h<10 && mm<10 && s<10) timeZone1.innerText=`0${h} : 0${mm} : 0${s}`;
  else timeZone1.innerText=`${h} : ${mm} : ${s}`
  
}
//添加倒计时
let addCountdown = () =>{
    // 右上角的开关
    flag = true
    addBtn.onclick = ()=>{
       if(flag){
        addBox.style.display = "block";
       }else{
        addBox.style.display = "none";
       }
       flag = !flag
    }
    addBox.onmouseleave = ()=>{addBox.style.display = "none";}
    // 控制计时器
    PSBtn.onclick = ()=>{
        if(flag){
            this.addCountdownTime = setInterval(()=>{
                this.mValue = parseInt(sCountValue/60 % 60);
                this.sValue = parseInt(sCountValue % 60);
                  _input.value=null
                 
                  while(sCountValue<0){
                      clearInterval(addCountdownTime);
                      return;
                  }
                  addTimeZone1.innerText =`${hValue} : ${mValue} : ${sValue}`
                  sCountValue--;
              },1000)
            PSBtn.setAttribute("src", "./images/start.png");
        }else{
            clearInterval(this.addCountdownTime)
            PSBtn.setAttribute("src", "./images/pause.png");
        }
        flag = !flag
    }
    overBtn.onclick= ()=>{
        this.sCountValue=0;
        this.sValue=0;
        this.mValue=0;
        this.hValue=0;
        clearInterval(this.addCountdownTime)
        addTimeZone1.innerText =`${hValue} : ${mValue} : ${sValue}`
    }
    // 开始按钮事件
    submitBtn.addEventListener('click',()=>{
        addTimeZone.style.display = "block";
        timeZone.style.display = "none";
        countdownZone.style.display = "none";
        //    输入框的分钟数
          this.mCountValue = _input.value;
        //   分钟数换算成秒
          this.sCountValue = mCountValue*60;
         if(_input.value !== ""){
            this.addCountdownTime = setInterval(()=>{
                this.hValue = parseInt(sCountValue/3600 % 60)
                this.mValue = parseInt(sCountValue/60 % 60);
                this.sValue = parseInt(sCountValue % 60);
                  _input.value=null
                  while(sCountValue<0){
                      remindAudio.play()
                      remind.style.display = "block";
                      addTimeZone.style.display = "none";
                      clearInterval(addCountdownTime);
                      return;
                  }
                  addTimeZone1.innerText =`${hValue} : ${mValue} : ${sValue}`
                  sCountValue--;
              },1000)
         }else{
             alert("请输入计时时间")
         }
       });
   resetBtn.onclick=()=>{
      _input.value=null
};
   remindBtn.onclick = ()=>{
       remindAudio.pause();
       remindAudio.currentTime = 0;
       remind.style.display = "none";
       addTimeZone.style.display = "block";
   } 
}
addCountdown()

// 切换背景图片
let shiftBgFun = ()=>{
    let index=1
     let bgImgArr = ['./images/bg2.jpg', './images/bg3.jpg','./images/bg4.jpg', './images/bg5.jpg','./images/bg1.jpg']
 shiftBg.addEventListener('click', ()=>{  
    container.style.backgroundImage = "url('"+bgImgArr[index]+"')";
    while(index==4) index=0;
     index++;
 });
}
shiftBgFun()

// 功能目录
let menu = (itemsArr = [])=>{
    menuBtn.onmouseenter = ()=>{
        menuBox.style.display = "block";
    }
    menuBox.onmouseleave = ()=>{
        menuBox.style.display = "none";
    }
    let li=[]
    for(let i=0; i<itemsArr.length; i++){
         li[i]= document.createElement('li');
        menuContnet.appendChild(li[i]).innerText = itemsArr[i]
    }
    li[0].addEventListener('click',  ()=>{
       timeZone.style.display = "block";
       countdownZone.style.display = "none";
       addTimeZone.style.display = "none";
       
    });
    li[1].addEventListener('click',  ()=>{
        countdown(2022,12,26,0,0,0,'距离考研还剩');
        countdownZone.style.display = "block";
        addTimeZone.style.display = "none";
        timeZone.style.display = "none";
    });
    li[2].addEventListener('click',  ()=>{
        countdown(2022,1,1,0,0,0,'距离2022新年还剩')
        countdownZone.style.display = "block";
        timeZone.style.display = "none";
        addTimeZone.style.display = "none";
    });
    li[3].addEventListener('click',  ()=>{
        addTimeZone.style.display = "block";
        timeZone.style.display = "none";
        countdownZone.style.display = "none";
    });
}
setInterval(clock,1000)
let a =menu(itemsArr=["时间", "2023考研", "2020新年","计时器"])