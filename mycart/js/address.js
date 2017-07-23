new Vue({
	el:'.container',
	data:{
		limitNum:3,
		adderssList:[],
		currentIndex:0,
		delFlag:false,
		curAddress:[],
		shippingMethod:1
	},
	mounted:function(){
		this.$nextTick(function(){
			this.getAddressList();
		});
	},
	computed:{
		filterAddress:function(){
			return this.adderssList.slice(0,this.limitNum);
		}
	},
	methods:{
		getAddressList:function(){
				var _this=this;
				this.$http.get("data/address.json").then(function(response){
				var res=response.data;
				if(res.status=='0'){
					_this.adderssList=res.result;
				}
			});
		},
		loadMore:function(){
			this.limitNum=this.adderssList.length;
		},
		setDefault:function(addressId){
			this.adderssList.forEach(function(address,index){
				if(address.addressId==addressId){
					address.isDefault=true;
				}else{
					address.isDefault=false;
				}
			});
		},
		delConfirm:function(item){
			this.delFlag=true;
			this.curAddress=item;
		},
		delAddress:function(){
			var index=this.adderssList.indexOf(this.curAddress);
			this.adderssList.splice(index,1);
			this.delFlag=false;
		}
	}
	

});