$(document).ready(function () {
    $("input:reset").click(function(){
        $(".othername-change").val("");
        $(".change-money-box").val("");
    });
    $(".clear-btna").click(function () {
        $(".table-infoa").val("");
    });
    $(".clear-btnb").click(function () {
        $(".table-infob").val("");
    });
    $(".clear-btnc").click(function () {
        $(".table-infoc").val("");
    });
    $(".sex-section li").click(function () {
        $(this).toggleClass("alive");
        $(this).siblings().removeClass("alive");
    });
    $(".card").click(function () {
        $(this).toggleClass("on");
        $(this).siblings().removeClass("on");
    });
    $('.table-info').on('keyup',function () {
        var tableInfo = $('.table-info').val();
        if(!tableInfo){
          $('#change-money-btn').attr('disabled', true);
          $('#change-money-btn').addClass("disabled-btn");
        }
        else{
         $('#change-money-btn').attr('disabled', false);
         $('#change-money-btn').removeClass("disabled-btn");
        }
    });
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
    });
});

function alertBox() {
    var sHeight = document.body.scrollHeight;
    var sWidth = document.body.scrollWidth;
    var viewHeight = document.documentElement.clientHeight;

    var mask = document.createElement("div");
        mask.id = "mask";
    mask.style.height = sHeight + "px";
    mask.style.width = sWidth + "px";
    document.body.appendChild(mask);

    var alert = document.createElement("div");
        alert.id = "alert";
        alert.innerHTML = "<div class='alert-content'>您确定要删除该银行卡吗</div><a href='#' class='delete-esc' id='delete-esc'>取消</a><a href='#' class='delete-submit' id='delete-submit'>确定</a>";
    document.body.appendChild(alert);

    var alertHeight = alert.offsetHeight;
    var alertWidth = alert.offsetWidth;
    alert.style.left = (sWidth - alertWidth)/2 + "px";
    alert.style.top = (sHeight - alertHeight)/2 + "px";

    var deleteEsc = document.getElementById("delete-esc");
    var deleteSub = document.getElementById("delete-submit");
    mask.onclick = deleteSub.onclick = deleteEsc.onclick = function () {
        document.body.removeChild(mask);
        document.body.removeChild(alert);
    };
};

function linksBox(){
    var sHeight = document.body.scrollHeight;
    var sWidth = document.body.scrollWidth;
    var viewHeight = document.documentElement.clientHeight;

    var mask = document.createElement("div");
        mask.id = "mask";
    mask.style.height = sHeight + "px";
    mask.style.width = sWidth + "px";
    document.body.appendChild(mask);

    var allLinks = document.createElement("div");
        allLinks.id = "all-links-section";
        allLinks.innerHTML = "<h6 class='all-links-title'>栏目</h6><ul class='all-links-block'><li><a href='#'>精神心理科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>乳腺病科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>血液病科</a></li><li><a href='#'>性功能障碍科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>血液病科</a></li><li><a href='#'>性功能障碍科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>血液病科</a></li><li><a href='#'>性功能障碍科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>血液病科</a></li><li><a href='#'>性功能障碍科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>血液病科</a></li><li><a href='#'>性功能障碍科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>血液病科</a></li><li><a href='#'>性功能障碍科</a></li><li><a href='#'>小儿内科</a></li><li><a href='#'>血液病科</a></li><li><a href='#'>性功能障碍科</a></li></ul>";
    document.body.appendChild(allLinks);

    mask.onclick = function () {
        document.body.removeChild(mask);
        document.body.removeChild(allLinks);
    };
}

function showArticle(){
    var articleHide = document.getElementById("article-hide");
    var expandBtn = document.getElementById("expand-btn");

    articleHide.style.display = "block";
    expandBtn.innerHTML = "收起";
    expandBtn.href = "javascript:hideArticle();";
}

function hideArticle(){
    var articleHide = document.getElementById("article-hide");
    var expandBtn = document.getElementById("expand-btn");

    articleHide.style.display = "none";
    expandBtn.innerHTML = "展开更多";
    expandBtn.href = "javascript:showArticle();";
}

function showArticle1(){
    var articleHide1 = document.getElementById("article-hide1");
    var expandBtn1 = document.getElementById("expand-btn1");

    articleHide1.style.display = "block";
    expandBtn1.innerHTML = "收起";
    expandBtn1.href = "javascript:hideArticle1();";
}

function hideArticle1(){
    var articleHide1 = document.getElementById("article-hide1");
    var expandBtn1 = document.getElementById("expand-btn1");

    articleHide1.style.display = "none";
    expandBtn1.innerHTML = "展开更多";
    expandBtn1.href = "javascript:showArticle1();";
}

if(window.addEventListener){
    window.addEventListener("load",alert1,false);
    window.addEventListener("load",alert2,false);
    window.addEventListener("load",alert3,false);
}
else{
    window.attachEvent("onload",alert1);
    window.attachEvent("onload",alert2);
    window.attachEvent("onload",alert3);
}
function alert1(){
    var Del = document.getElementById("delete");
    var DelDBL = document.getElementById("deleteDBL");
    DelDBL.onclick = Del.onclick = function () {
        alertBox();
        return false;
    };
}

function alert2(){
    var dots = document.getElementById("dots");
    dots.onclick = function () {
        linksBox();
        return false;
    };
}

function alert3(){
    var allBtn = document.getElementById("all");
    allBtn.onclick = function () {
        linksBox();
        return false;
    };
}