# 使用电话号码登录
我的地址{
	省市区选择项，详细地址，备注
}
我的订单{
	list:
	[
		{商品名称,数量,价格}
	],
	总价,
	地址信息,(address_id)
}


用户


关于省市区的联动，似乎小程序自己已经做好了，接口以及联动不用自己写











select name from provinces where provinces.id = (select province_id from cities where cities.name like "%州%")