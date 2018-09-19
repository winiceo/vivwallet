
$(document).ready(function() {


    const userAgentInfo = navigator.userAgent;
    const isAndroid = userAgentInfo.indexOf('Android') > -1 || userAgentInfo.indexOf('Adr') > -1; //android终端
    const isiOS = !!userAgentInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端


    if (!isAndroid && !isiOS) {
        $('#qrcode1').qrcode({
            render: "canvas",
            width: 52,
            height: 52,
            text: encodeURI(window.location.href)
        });

        $('#qrcode2').qrcode({
            render: "canvas",
            width: 52,
            height: 52,
            text: encodeURI(window.location.href)
        });

        $('#qrcode_1').qrcode({
            render: "canvas",
            width: 148,
            height: 148,
            text: encodeURI(window.location.href)
        });

        $('#qrcode_2').qrcode({
            render: "canvas",
            width: 148,
            height: 148,
            text: encodeURI(window.location.href)
        });
        $('#download').hide();

    } else if (isiOS) {
        $('#qrcode1').hide();
        $('#qrcode2').hide();
        const reg = new RegExp("(^|&)cityPartner=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        const r = window.location.search.substr(1).match(reg);  //匹配目标参数if
        if(r) {
            jQuery.ajax({
                'type': 'POST',
                'url': "https://relay1.loopring.io/city_partner/add_customer/" + decodeURI(r[2]),
                'contentType': 'application/json',
                'dataType': 'json',
                'success': function (data, status) {

                }
            });
        }
    }
    $(function() {
        jQuery('#allinone_carousel_sweet').allinone_carousel({
            skin: 'sweet',
            width: 1240,
            height: 525,
            responsive: true,
            autoPlay: 5,
            resizeImages: true,
            autoHideBottomNav: false,
            bottomNav: false,
            numberOfVisibleItems: 5,
            elementsHorizontalSpacing: 220,
            elementsVerticalSpacing: 20,
            verticalAdjustment: 0,
            animationTime: 0.5,
            circleLeftPositionCorrection: 50,
            circleTopPositionCorrection: 20,
            circleLineWidth: 1,
            circleColor: "#29282B",
            behindCircleColor: "#999999",
            nextPrevMarginTop: 25,
            bottomNavMarginBottom: -50
        });

    });
})