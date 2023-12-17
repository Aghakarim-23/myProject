// burda deyirəm ki, əgər ana səhifədəyəmsə məni ünvanladığım səhifəyə apar əgər ünvanladığım səhifədəyəmsə heçnə etmə

if(window.location.pathname === "/index.html"){
    document.body.addEventListener("click", function(){
        window.location.href = "secondPage.html"
    })
}

