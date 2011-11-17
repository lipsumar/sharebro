
/*
 *  i know the code could be much nicer.
 *  Right now it's more a proof of concept.
 *  please don't judge me too hard, my first goal was to bring this as fast as possible. 
 *  I'll clean. promise. hey, why don't you help to code this thing ? 
 *  so gReader user don't settle and go for G+ and forget about it.
 *  I have nothing against G+, but an open and standard way should exist as well.
 * 
 */

if(typeof unsafeWindow !="undefined"){
	var d = unsafeWindow.document;
}else{
	var d = document;
}


/* library */

var lipsMD5=function(s){function L(b,a){return(b<<a)|(b>>>(32-a))}function K(k,b){var F,a,d,x,c;d=(k&2147483648);x=(b&2147483648);F=(k&1073741824);a=(b&1073741824);c=(k&1073741823)+(b&1073741823);if(F&a){return(c^2147483648^d^x)}if(F|a){if(c&1073741824){return(c^3221225472^d^x)}else{return(c^1073741824^d^x)}}else{return(c^d^x)}}function r(a,c,b){return(a&c)|((~a)&b)}function q(a,c,b){return(a&b)|(c&(~b))}function p(a,c,b){return(a^c^b)}function n(a,c,b){return(c^(a|(~b)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(k){var G;var d=k.length;var c=d+8;var b=(c-(c%64))/64;var F=(b+1)*16;var H=Array(F-1);var a=0;var x=0;while(x<d){G=(x-(x%4))/4;a=(x%4)*8;H[G]=(H[G]|(k.charCodeAt(x)<<a));x++}G=(x-(x%4))/4;a=(x%4)*8;H[G]=H[G]|(128<<a);H[F-2]=d<<3;H[F-1]=d>>>29;return H}function B(c){var b="",d="",k,a;for(a=0;a<=3;a++){k=(c>>>(a*8))&255;d="0"+k.toString(16);b=b+d.substr(d.length-2,2)}return b}function J(b){b=b.replace(/\r\n/g,"\n");var a="";for(var k=0;k<b.length;k++){var d=b.charCodeAt(k);if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)}}}return a}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};

function strip_tags (input, allowed) {
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}



function getByClass(p,tag,clas){
	var hs = p.getElementsByTagName(tag);
	var j = hs.length;
	for(var i=0;i<j;i++){
		var cs = hs[i].className.split(' ');
		for(var ii=0;ii<cs.length;ii++){
			if(cs[ii]==clas){
				return hs[i];
				break;
			}
		}
	}
	return false;
}


function getMultiByClass(p,tag,clas){
	var hs = p.getElementsByTagName(tag);
	var j = hs.length;
	var ret = [];
	for(var i=0;i<j;i++){
		var cs = hs[i].className.split(' ');
		for(var ii=0;ii<cs.length;ii++){
			if(cs[ii]==clas){
				ret.push( hs[i] );
				break;
			}
		}
	}
	return ret;
}

function insertScript(url){
	var ss = d.createElement('script');
	ss.src = url;
	d.body.appendChild(ss);
}





function lipsAddClass(el,newClass){
	var classes = el.className.split(' ');
	for(var i=0,j=classes.length;i<j;i++){
		if(classes[i]==newClass) return;
	}
	classes.push(newClass);
	el.className = classes.join(' ');
}

function lipsRemoveClass(el, classToRemove){
	var classes = el.className.split(' ');
	var newClasses = [];
	for(var i=0,j=classes.length;i<j;i++){
		if(classes[i]!=classToRemove) newClasses.push();
	}
	el.className = newClasses.join(' ');
}





var LipsDialog = function(){
	
	/* public methods */
	
	//init the object. must be called right after instanciation
	this.init = function(){
		this.dialogType = 'Alert';// Alert | Confirm | Prompt
		this.promptInputType = 'Password';// Text | Password
		this.promptAllowEmpty = false;
		this.callbacks = null; // {onOK,onCancel}
		this.build();
		//this.registerEvents();
		
	};
	
	//an alert box. callbacks: onOk, onCancel (same event/button in this case)
	this.alert = function(text,callbacks){
		this.setDialogType('Alert');
		if(callbacks && typeof callbacks == 'object') this.callbacks = callbacks;
		this.setText(text);
		this.show();
	};
	
	//a confirm box. callbacks: onOK, onCancel
	this.confirm = function(text,callbacks){
		this.setDialogType('Confirm');
		if(callbacks && typeof callbacks == 'object') this.callbacks = callbacks;
		this.setText(text);
		this.show();
	};
	
	//a prompt box. callbacks: onOK, onCancel. when allowEmpty true, cliking cancel is allowed, but not OK if empty field (trimmed)
	this.prompt = function(text,callbacks,allowEmpty){
		this.promptAllowEmpty = allowEmpty || this.promptAllowEmpty;
		this.setDialogType('Prompt');
		if(callbacks && typeof callbacks == 'object') this.callbacks = callbacks;
		this.setText(text);
		this.show();
		this.inputEl.value = '';
	};
	
	
	
	/* private methods */
	
	this.build = function(){
		//build overlay
		this.overlayEl = d.createElement('div');
		this.overlayEl.id = 'lipsDialogOverlay';
		d.body.appendChild(this.overlayEl);
		
		//build box
		this.boxEl = d.createElement('div');
		this.boxEl.id = 'lipsDialogBox';
		this.boxEl.className = 'dialogTypeAlert';
		this.boxEl.innerHTML = '<div id="lipsDialogText">Hello, nothing to notify !</div><div id="lipsDialogInputWrap"><input type="'+this.promptInputType+'" id="lipsDialogInput" /></div><div id="lipsDialogButtonsWrap"><input type="button" id="lipsDialogButtonOK" value="OK" onclick="lipsDialog.actionOK();" /><input type="button" id="lipsDialogButtonCancel" class="cancelBtn" value="Cancel" onclick="lipsDialog.actionCancel();"/></div><b id="lipsDialogCloseButton" class="cancelBtn">x</b>';
		d.body.appendChild(this.boxEl);
		
		this.inputEl = d.getElementById('lipsDialogInput');
		this.buttonOKEl = d.getElementById('lipsDialogButtonOK');
		this.buttonCancelEl = d.getElementById('lipsDialogButtonCancel');
		this.textEl = d.getElementById('lipsDialogText');
	};
	
	this.registerEvents = function(){
		var self = this;
		window.addEventListener("keydown", this.keyDownHandler, false);
		/* why u no work ???
		this.buttonOKEl.onclick = function(e){
			alert('kjh');
			self.actionOK();
		};
		this.buttonCancelEl.addEventListener("click",function(e){ 
			self.actionCancel();
		}, false);
		*//*
		this.buttonOKEl.addEventListener('click',function(e){
			alert('kjh');
			self.actionOK();
		},true);
		*/
	};
	
	//this.keyDownHandler = function(){};
	
	this.actionOK = function(){
		if(this.dialogType=='prompt' && !this.promptAllowEmpty && this.inputEl.value.trim()==''){
			this.showNoEmptyMessage();
			return;
		}
		this.hide();
		if(this.callbacks && this.callbacks.onOK){
			if(this.dialogType=='Prompt') this.callbacks.onOK(this.inputEl.value);
			else this.callbacks.onOK();
		}
	};
	
	this.actionCancel = function(){
		if(this.callbacks && this.callbacks.onCancel) this.callbacks.onCancel();
		this.hide();
	};
	
	this.showNoEmptyMessage = function(){
		lipsAddClass(this.boxEl, 'emptyError')
	};
	
	this.show = function(){
		this.overlayEl.style.display = 'block';
		this.boxEl.style.display = 'block';
		if(this.dialogType=='Prompt'){
			this.inputEl.focus();
		}else{
			this.buttonOKEl.focus();
		}
	};
	
	this.hide = function(){
		this.overlayEl.style.display = 'none';
		this.boxEl.style.display = 'none';
	};
	
	
	this.setDialogType = function(newDialogType){
		if(this.dialogType==newDialogType) return;
		this.dialogType = newDialogType;
		this.resetBox();
	};
	
	this.resetBox = function(){
		this.textEl.innerHTML = '';
		this.inputEl.value = '';
		this.inputEl.setAttribute('type',this.promptInputType);
		lipsRemoveClass(this.boxEl,'dialogTypePrompt');
		lipsRemoveClass(this.boxEl,'dialogTypeAlert');
		lipsRemoveClass(this.boxEl,'dialogTypeConfirm');
		lipsRemoveClass(this.boxEl,'emptyError');
		lipsAddClass(this.boxEl, 'dialogType'+this.dialogType);
		
		this.callbacks = null;
	};
	
	this.setText = function(text){
		this.textEl.innerHTML = text;
	};
	
	//this.init();
	
	
	
};





var lipsDialog = new LipsDialog();
lipsDialog.init();



var lipscss = d.createElement('style');
lipscss.innerHTML = '#lipsFriendList{margin-left:42px}#lipsDialogOverlay{display:none;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background:#000;z-index:1000;opacity:.2}#lipsDialogBox{display:none;position:absolute;top:50%;left:50%;width:500px;border:6px solid #c2cff1;background:#FFF;z-index:1010;margin-left:-250px}#lipsDialogBoxInner{display:none;position:relative}#lipsDialogText{padding:10px 7px 2px 7px}#lipsDialogButtonsWrap{padding:4px;text-align:right}#lipsDialogCloseButton{position:absolute;top:5px;right:4px;width:12px;height:12px;cursor:pointer;color:#AAA;display:none}#lipsDialogCloseButton:hover{color:#000}#lipsDialogInputWrap{padding:10px 7px 2px 7px;display:none}#lipsDialogInput{border:1px solid #858585;padding:2px 4px;width:70%}#lipsDialogInput:hover{border-color:#333}#lipsDialogInput .cancelBtn{display:none}#lipsDialogInput .emptyError .emptyErrorText{display:none}#lipsDialogBox.dialogTypeAlert .cancelBtn{display:none}#lipsDialogBox.dialogTypeConfirm .cancelBtn{display:inline}#lipsDialogBox.dialogTypePrompt #lipsDialogInputWrap{display:block}#lips-mySharedItems .shareFeedByMail{visibility:hidden}#lips-mySharedItems:hover .shareFeedByMail{visibility:visible}.entry .lips-shareBtn{padding:1px 20px 1px 0px;cursor:pointer;}.entry .lips-shareBtn.shared{color:green}';
d.body.appendChild(lipscss);








//add "my shared items" link
var lipsmsiContainer = getByClass(d.getElementById('lhn-selectors'),'div','lhn-section-secondary');
var lipsmsiEl = document.createElement("div");
lipsmsiEl.id = 'lips-mySharedItems';
lipsmsiEl.className = 'selector no-icon';
lipsmsiEl.innerHTML = '<a href="#" class="link"><span class="text" id="lips-mySharedItems-btn">My shared items<sup style="color:red;">new!</sup></a>';

lipsmsiContainer.appendChild(lipsmsiEl);
d.getElementById('lips-mySharedItems-btn').addEventListener('click',function(e){
	window.location.href = 'http://www.google.com/reader/view/feed/http%3A%2F%2Flipsumarium.com%2Fgreader%2Ffeed%3F_USER_ID%3D'+window.encodeURIComponent(window._USER_ID);
},false);


var lipssmfEl = document.createElement("div");
lipssmfEl.id = 'lips-shareMyFeed';
lipssmfEl.className = 'selector no-icon';
lipssmfEl.innerHTML = '<a href="#" title="Share your public feed by email" class="lips-shareFeedByMail" id="lips-shareFeedByMail"><span class="text">Share my public feed<sup style="color:red;">new!</sup></span></a>';
lipsmsiContainer.appendChild(lipssmfEl);

var lips_shareFeedByMailEl = d.getElementById('lips-shareFeedByMail');
lips_shareFeedByMailEl.addEventListener('click',function(){
	lipsDialog.promptInputType = 'text';
	lipsDialog.prompt("<b>Share your feed with your followers !</b><br/>Enter emails here and we'll send them a link to your public feed.<br/>(multiple emails separated by comas)<br/><span style=\"font-size:10px;\">We don\'t collect emails.</span>",{
		onOK:function(emails){
			insertScript('http://lipsumarium.com/greader/sharemyfeed?_USER_ID='+window.encodeURIComponent(window._USER_ID)+'&emails='+window.encodeURIComponent(emails)+'&nc='+Math.random());
		}
	});
	
},false);


var topbar=d.getElementById('viewer-top-controls');
var shareBtn = d.createElement('div');
shareBtn.className = 'goog-inline-block jfk-button jfk-button-standard viewer-buttons';
shareBtn.id="share-button";
shareBtn.style.float="right";
shareBtn.style.cssFloat="right";
shareBtn.innerHTML = '<div class="goog-inline-block goog-flat-menu-button-caption">Share</div>';
shareBtn.addEventListener('click',doShare,false);
topbar.appendChild(shareBtn);

var waitEl = d.createElement('div');
waitEl.className = 'goog-inline-block';
waitEl.style.float="right";
shareBtn.style.cssFloat="right";
waitEl.style.display = 'none';
waitEl.innerHTML = '<div class="goog-inline-block"><img src="http://lipsumarium.com/greader/load.gif" /></div>';
topbar.appendChild(waitEl);



var fl_wrap = d.createElement('div');
fl_wrap.id = 'lipsFriendList';
d.getElementById('lhn-selectors').appendChild(fl_wrap);

var fl_sep = d.createElement('div');
fl_sep.className = 'selectors-footer';
d.getElementById('lhn-selectors').appendChild(fl_sep);

var fl_addWrap = d.createElement('div');
fl_addWrap.id = 'fl_addWrap';
fl_addWrap.innerHTML = '<input type="text" placeholder="Add friends by email" id="fl_addInput" /><a style="padding-top:2px;display:block;color:blue;text-decoration:underline;" href="http://sharebro.org" title="Help to promote open ways to share, tell your Reader friends about it." target="_blank">sharebro.org</a>';
fl_wrap.appendChild(fl_addWrap);



var shareURL='';
function doShare(){
	var e = d.getElementById('current-entry');
	if(!e){
		lipsDialog.alert('No item selected');
	}else{
		var aEl=getByClass(e,'a','entry-title-link');
		var a=null;
		if(aEl){
			a=aEl.href;
			t=aEl.innerHTML;
			
			var an='';
			var sf='';
			var sn='';
			
			var h2 = getByClass(e,'h2','entry-title');
			t = strip_tags(h2.innerHTML);
			
			
			
				
				var snElw = d.getElementById('chrome-title');
				if(snElw){
					var snEl = snElw.getElementsByTagName('a')[0];
					if(snEl){
						sn = strip_tags(snEl.innerHTML).replace('»','').trim();
						sf = snEl.href;
					}
				}
				
				var anEl = getByClass(e,'span','entry-author-name');
				if(anEl) an = anEl.innerHTML;
			
			
			
			var bEl = getByClass(e,'div','item-body');
			bo=bEl.innerHTML;
			
			var url = 'http://lipsumarium.com/greader/post?_USER_ID='+encodeURIComponent(window._USER_ID)+'&url='+encodeURIComponent(a)+'&title='+encodeURIComponent(t)+'&sf='+encodeURIComponent(sf)+'&an='+encodeURIComponent(an)+'&sn='+encodeURIComponent(sn);
			if(url.length<2900){
				url+='&body='+encodeURIComponent(bo);
			}
			url = url.substring(0,2900);
			url+="&nc="+Math.random();
			shareURL=url;
			var ss = d.createElement('script');
			ss.src = url;
			lipsShowShareLoad();
			d.body.appendChild(ss);
			
		}else{
			lipsDialog.alert('Woops.. this should work! Are you sure you selected an item ? Please report bug to @lipsumar');
		}
		
		
		
	 
	}
}

var lips_addingFriendEmail = '';
var fl_addFormOnSubmit = function(e){
	if(e.keyCode==13){
		lips_addingFriendEmail = fl_addInput.value.trim();
		insertScript('http://lipsumarium.com/greader/addfriend?_USER_ID='+encodeURIComponent(window._USER_ID)+'&friend_USER_EMAIL='+encodeURIComponent(fl_addInput.value.trim())+"&nc="+Math.random());
		
	}
};

var fl_addInput = d.getElementById('fl_addInput');
fl_addInput.onkeydown = fl_addFormOnSubmit;


var lipsLoginCallback = function(){
	
	if(shareURL.trim()!=''){
		var ss = d.createElement('script');
		ss.src = shareURL;
		d.body.appendChild(ss);
	}
	
};


var addfeedUrl='';
var lips_addFriendCallBack = function(ok,friendEmail,friendID){
	fl_addInput.value = "";
	if(ok){
		lipsDialog.alert("Your friend\'s feed will be added to your feeds.<br/><br/>Put it in a folder named \"Friends\", and voila!\nNote that you have an option to rename the feed.");
		lips_addFeed('http://lipsumarium.com/greader/feed?_USER_ID='+friendID);
		
		/* not sure about this. see the discussion http://groups.google.com/group/sharebro/browse_thread/thread/4615be13216e03ee 
		lipsDialog.confirm("Let know "+friendEmail+" you just subscribed !<br/><br/>Do you want to send an email to "+friendEmail+" let him/her know ?",{
			onOK:function(){
				
			}
		});
		*/
		
		
		
	}else{
		lipsDialog.confirm("It seems your friend "+friendEmail+" is not yet using this plugin.\n\nDo you want us to send a mail to your friend to warn him about this script ? (no spam, promise)",{
			onOK:function(){
				insertScript('http://lipsumarium.com/greader/sendfriendrequest?friend_USER_EMAIL='+encodeURIComponent(lips_addingFriendEmail)+"&_USER_ID="+encodeURIComponent(window._USER_ID)+"&nc="+Math.random());
			}
		});
		
	}
};

var lips_addFeed = function(feedUrl){
	addfeedUrl = feedUrl;
	
	
	var e = d.createEvent("MouseEvent");
	e.initMouseEvent('click',true,true,window,1);
	d.getElementById('lhn-add-subscription').dispatchEvent(e);
	
	var ra = function(){
		d.getElementById('quickadd').value = addfeedUrl;
		var ee = d.createEvent('MouseEvent');
		ee.initMouseEvent('click',true,true,window,1);
		d.getElementById('quick-add-btn').dispatchEvent(ee);
	};
	
	setTimeout(ra,800);
	
};

var lipsShowShareOK = function(){
	shareBtn.style.color = 'green';
	shareBtn.innerHTML = 'OK';
	setTimeout("shareBtn.style.color = '';shareBtn.innerHTML='Share';",1000);
	
	lips_sharedItems.push({h:lipsMD5(shareURL)});
	if(lips_sbtnCallback) lips_sbtnCallback.className+=' shared';
	shareURL = '';
};

var lipsShowShareLoad = function(){waitEl.style.display='block';}
var lipsHideShareLoad = function(){waitEl.style.display='none';}

var lipsOnKeyDown = function(e){
	if(e.keyCode==83 && event.altKey) {
		doShare();
	}
};

window.addEventListener("keydown", lipsOnKeyDown, false);

