app.controller("baseController",function($scope){
	$scope.paginationConf = { 
			//currentPage : 1,//当前页
			//totalItems : 10,//总记录数
			//itemsPerPage : 10,//每页的记录数
			//perPageOptions : [ 10, 20, 30, 40, 50 ],//分页选项
			onChange : function() {//更改页面时触发事件
				$scope.reloadList();
			}
		};

		//重新加载列表 数据
		$scope.reloadList = function() {
			//切换页码  
			$scope.search($scope.paginationConf.currentPage,
					$scope.paginationConf.itemsPerPage);
		}
		$scope.selectIds=[]; //用户勾选的ID集合
		//用户勾选复选框
		$scope.updateSelection=function($event,id){
			if($event.target.checked){
				$scope.selectIds.push(id); //向集合中添加元素
			}else{
				var index=$scope.selectIds.indexOf(id); //查找值的位置
				$scope.selectIds.splice(index,1);	//参数1:移除的位置,参数2:移除的个数
			}			
		}
		
		$scope.jsonToString=function(jsonString,key){
			var json=JSON.parse(jsonString);
			var value="";
			for(var i=0;i<json.length;i++){
				if(i>0){
					value+=",";
				}					
				value+=json[i][key];
			}
			return value;
		}
		
});