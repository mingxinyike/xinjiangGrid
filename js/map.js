// 百度地图API功能
var map = new BMap.Map("content");
map.centerAndZoom(new BMap.Point(86.265168,41.347551), 12);
// 添加带有定位的导航控件
var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
});
var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
var overView = new BMap.OverviewMapControl();
var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
map.addControl(navigationControl);
map.addControl(mapType1);          //2D图，卫星图
map.addControl(overView);          //添加默认缩略地图控件
map.addControl(overViewOpen);      //右下角，打开
// 添加定位控件
var geolocationControl = new BMap.GeolocationControl();
geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
});
geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
});
map.addControl(geolocationControl);