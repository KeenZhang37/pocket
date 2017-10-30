var oBoard = document.querySelector('.board');
var oLi = document.querySelectorAll('.title ul .num');
var a = 0;
console.log(oLi.length)
for(var i = 0 ; i < oLi.length ; i ++){
	oLi[i].index = i;
	oLi[i].onclick = function(){
		a = this.index;
		for(var i = 0 ; i < oLi.length ; i ++){
			oLi[i].className = 'num';
		}
		oLi[this.index].className = 'num active';
		oBoard.style.marginLeft = 0 -1600*(this.index) + 'px';
	}
}
setInterval(function(){
	a ++;
	if(a > oLi.length-1){
		a = 0
	}
	for(var i = 0 ; i < oLi.length ; i ++){
		oLi[i].className = 'num';
	}
	oLi[a].className = 'num active';
	oBoard.style.marginLeft = 0 -1600*(a) + 'px';
},5000)

//右侧分享
var oBlue = document.querySelector('.blue');
var oShare = document.querySelector('.share');
console.log(oBlue,oShare)
//移入显示
oBlue.onmouseover = function(){
	oShare.style.right = '0';
}
oShare.onmouseleave = function(){
	oShare.style.right = '-253px';
	oCenter.style.top = '0';
	oBlue.style.top = '90px';
}
//点击close按钮
var oClose = document.querySelector('.share .top .close');
var oCenter = document.querySelector('.share .center');
oClose.onclick = function(){
	oCenter.style.top = '-241px';
	oBlue.style.top = '60px';
}
