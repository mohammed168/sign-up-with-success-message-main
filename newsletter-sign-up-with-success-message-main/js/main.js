let emailInput = document.getElementById('emailInput');
let hero = document.getElementById('hero');
let sucssful = document.getElementsByClassName('sucssful')[0];
let form = document.getElementsByClassName('form');
let btn = document.getElementsByTagName('button')[0]; //

document.getElementById('emailInput').addEventListener('input', function() {
    this.classList.remove('error-background'); // إزالة لون الخلفية عند الكتابة
});

function validateEmail(event) {
    event.preventDefault(); // منع إرسال النموذج الافتراضي
    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value;
    var messageDiv = document.getElementById('message');

    // تحقق من صحة البريد الإلكتروني باستخدام تعبير منتظم (regex)
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        // البريد الإلكتروني صالح
        emailInput.classList.remove('error-background', 'error-border'); // إزالة الكلاسات 'error-background' و'error-border'
        
        setTimeout(function() {
          hero.style.display = 'none';
          sucssful.style.display = 'block';
        },1000)
        messageDiv.innerHTML = ''; // إخفاء رسالة النجاح إن وجدت
        // إعادة توجيه المستخدم إلى صفحة جديدة
        window.location.href =  ' #'; // قم بتغيير 'success.html' إلى مسار الصفحة التي تريد عرضها
    } else {
        // البريد الإلكتروني غير صالح
        emailInput.classList.add('error-background', 'error-border'); // إضافة الكلاسات 'error-background' و'error-border'
        messageDiv.innerHTML = ''; // إخفاء رسالة النجاح إن وجدت
    }
}