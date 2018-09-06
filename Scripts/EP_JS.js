

$(function () {
    verify();
    $("#Titles_samp").hide();
    $("#Links_samp").hide();
    $("#PicPath_samp").hide();
    $("#Titles").blur(function () {
        if ($("#Titles").val() == "" || $("#Titles").val() == null) {
            $("#Titles_samp").show();
        } else {
            $("#Titles_samp").hide();
        }
    });
    $("#Links").blur(function () {
        if ($("#Links").val() == "" || $("#Links").val() == null) {
            $("#Links_samp").show();
        } else {
            $("#Links_samp").hide();
        }
    });
    //$("#PicPath").blur(function () {
    //    if ($("#PicPath").val() == "" || $("#PicPath").val() == null) {
    //        $("#PicPath_samp").show();
    //    } else
    //    {
    //        $("#PicPath_samp").hide();

    //    }
        
    //});
    
});
//客户端验证
function verify() {
    
    $("#Submit1").click(function () {
        if ($("#Titles").val() == "" || $("#Titles").val() == null) {            
            return false;
        } 
        if ($("#Links").val() == "" || $("#Links").val() == null) {

            return false;
        }
        //checkImg();

        var img_id = document.getElementById('File1').value; //根据id得到值
        var index = img_id.indexOf("."); //得到"."在第几位
        img_id = img_id.substring(index); //截断"."之前的，得到后缀

        if (img_id != ".bmp" && img_id != ".png" && img_id != ".gif" && img_id != ".jpg" && img_id != ".jpeg") {  //根据后缀，判断是否符合图片格式
            $("#PicPath_samp").show();
            document.getElementById('File1').value = "";  // 不符合，就清除，重新选择
            return false;
        } else {
            $("#PicPath_samp").hide();
        }
       
        
    }); 
}

