function login(){
    var loginForm = document.loginForm;
    var review = loginForm.review.value;
    var star = loginForm.star.value;
    
    if(!review || !star){
        alert("별점과 평가를 모두 입력해주세요.")
    }else{
        loginForm.submit();
    }
}