

var vm=new Vue({
    el:'#wrap',
    data:{
        baiduUrl:'https://www.baidu.com/s?wd=',
        msg:'',//百度搜索的输入内容
        urlMsg:'',
        navMsg:['http://www.bilibili.com','http://www.baidu.com','http://www.qq.com'],
        // 网站地址数组
        navMsgIcon:['http://www.bilibili.com/favicon.ico','http://www.baidu.com/favicon.ico','http://www.qq.com/favicon.ico'],
        // 网站图标数组
        isShow:false,
        // 设置框是否展示
        inputUrl:'',
        // 设置框的输入内容
        number:'',//按键的序号
        focus:false,//焦点是否在输入框

    },
    methods: {
        search:function(){//百度搜索
            this.urlMsg=this.baiduUrl+this.msg;
            window.open(this.urlMsg,'_blank');
        },
        nav:function(num){//打开指定网页
            if(this.navMsg[num]!=undefined){
            window.open(this.navMsg[num],"_blank");
            }
        },
        changeShow:function(num){//改变设置框的显示
            this.isShow=!this.isShow;
            this.number=num;
        },
        changeAllShow:function(){
            this.isShow=false;
        },
        changeUrl:function(){
            if(this.inputUrl.slice(0,4)!='http'){
                 if(this.inputUrl.slice(0,3)!='www'){
                     this.navMsg[this.number]='http://www.'+this.inputUrl;
                }else{
                    this.navMsg[this.number]='http://'+this.inputUrl;
                }
            }else{
                this.navMsg[this.number]=this.inputUrl;
            };
            this.inputUrl='';
        },
        isTrue:function(){
            this.focus=true;
        },
        isFalse:function(){
            this.focus=false;
        },
        changeIcon:function(){
            this.navMsgIcon[this.number]=this.navMsg[this.number]+'/favicon.ico';
        },
        
    },
    watch:{
        navMsg:function(val){
            for(var i=0;i<val.length;i++){
                this.navMsgIcon=val+'/favicon.ico';
            }
        }
    },
    created:function(){
        var _self = this;
            document.onkeydown = function(e){
                
                var key = window.event.keyCode;
                // if(key == 13&&_self.focus==false){
                //     _self.isTrue();
                // };

                if(key == 81&&_self.focus==false){
                    _self.nav(0);
                };
                
                if(key == 87&&_self.focus==false){
                    _self.nav(1);
                };
                
                if(key == 69&&_self.focus==false){
                    _self.nav(2);
                };
                
                if(key == 82&&_self.focus==false){
                    _self.nav(3);
                };
                
                if(key == 84&&_self.focus==false){
                    _self.nav(4);
                };
                
                if(key == 89&&_self.focus==false){
                    _self.nav(5);
                };
                
                if(key == 85&&_self.focus==false){
                    _self.nav(6);
                };
                
                if(key == 73&&_self.focus==false){
                    _self.nav(7);
                };
                
                if(key == 79&&_self.focus==false){
                    _self.nav(8);
                };
                
                if(key == 80&&_self.focus==false){
                    _self.nav(9);
                };
                
                if(key == 65&&_self.focus==false){
                    _self.nav(10);
                };
                
                if(key == 83&&_self.focus==false){
                    _self.nav(11);
                };
                
                if(key == 68&&_self.focus==false){
                    _self.nav(12);
                };
                
                if(key == 70&&_self.focus==false){
                    _self.nav(13);
                };
                
                if(key == 71&&_self.focus==false){
                    _self.nav(14);
                };
                
                if(key == 72&&_self.focus==false){
                    _self.nav(15);
                };
                
                if(key == 74&&_self.focus==false){
                    _self.nav(16);
                };
                
                if(key == 75&&_self.focus==false){
                    _self.nav(17);
                };
                
                if(key == 76&&_self.focus==false){
                    _self.nav(18);
                };
                
                if(key == 90&&_self.focus==false){
                    _self.nav(19);
                };
                
                if(key == 88&&_self.focus==false){
                    _self.nav(20);
                };
                
                if(key == 67&&_self.focus==false){
                    _self.nav(21);
                };
                
                if(key == 86&&_self.focus==false){
                    _self.nav(22);
                };
                
                if(key == 66&&_self.focus==false){
                    _self.nav(23);
                };
                
                if(key == 78&&_self.focus==false){
                    _self.nav(24);
                };
                
                if(key == 77&&_self.focus==false){
                    _self.nav(25);
                };
                
            }
    }
})