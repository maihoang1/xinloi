document.addEventListener("DOMContentLoaded", function() {
    apo = document.getElementById('apo');
    apo1 = document.getElementById('apo1');
    name = document.getElementById('name');
    nameDiv = document.getElementById('nameDiv');
    submit = document.getElementById('submit');
    // Lấy thẻ div chứa quà tặng
    const giftDiv = document.getElementById("giftDiv");
    // Sau 5 giây, thu nhỏ quà tặng và sau đó biến mất
    setTimeout(function() {
        let width = 100;
        let height = 100;

        // Thu nhỏ quà tặng mỗi 50ms
        const shrinkInterval = setInterval(function() {
            width -= 10;
            height -= 10;

            giftDiv.style.width = width + "%";
            giftDiv.style.height = height + "%";

            // Kiểm tra nếu quà tặng đã thu nhỏ đến kích thước không nhìn thấy được
            if (width <= 0 || height <= 0) {
                // Dừng quá trình thu nhỏ và ẩn quà tặng
                clearInterval(shrinkInterval);
                giftDiv.style.display = "none";
            }
        }, 75);
        apo.play();
    }, 5000);

    const div1 = document.getElementById("d1");

    // Sau 5 giây, bắt đầu hiệu ứng xuất hiện
    setTimeout(function() {
        // Thiết lập giá trị ban đầu của độ trong suốt
        let opacityValue = 0;

        // Tăng dần độ trong suốt mỗi 100ms
        const fadeInInterval = setInterval(function() {
            opacityValue += 0.05;
            div1.style.opacity = opacityValue;

            // Kiểm tra nếu độ trong suốt đã đạt mức 1
            if (opacityValue >= 1) {
                // Dừng quá trình tăng dần độ trong suốt
                clearInterval(fadeInInterval);
            }
        }, 100);
    }, 6000); // Chờ 5 giây trước khi bắt đầu hiệu ứng
    const d1 = document.getElementById("d1");
    setTimeout(function() {
        d1.style.width = 100+ "%";
        d1.style.height = 100+"%";
    }, 6000);
});
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
const yesBtn = document.getElementById('yess-btn');
const noBtn = document.getElementById('no-btn');
let isNoBtnVisible = true; // Biến để kiểm tra xem nút "no" có đang hiển thị không
const eventName = isMobile() ? 'touchstart' : 'mouseover';
noBtn.addEventListener(eventName, () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 300));
    const y = Math.floor(Math.random() * (window.innerHeight -300));
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Thay đổi kích thước của nút "no"
    var currentWidth = noBtn.offsetWidth;
    var currentHeight = noBtn.offsetHeight;

    // Giảm kích thước của nút "no" đi 10px
    var newWidth = currentWidth - 2;
    var newHeight = currentHeight - 2;

    noBtn.style.width = newWidth + 'px';
    noBtn.style.height = newHeight + 'px';

    // Kiểm tra nếu kích thước nhỏ hơn ngưỡng, ẩn nút "no"
    if (newWidth <= 10 || newHeight <= 10) {
        noBtn.style.display = 'none';
        isNoBtnVisible = false; // Đặt biến là false để biết rằng nút "no" đã ẩn
    }

    // Tăng kích thước của nút "yes" nếu nó đã được ẩn trước đó
   
        var yesCurrentWidth = yesBtn.offsetWidth;
        var yesCurrentHeight = yesBtn.offsetHeight;

        var yesNewWidth = yesCurrentWidth + 3;
        var yesNewHeight = yesCurrentHeight + 3;

        yesBtn.style.width = yesNewWidth + 'px';
        yesBtn.style.height = yesNewHeight + 'px';
       
    
});
const gift1 = document.getElementById('gift1');
const gift2 = document.getElementById('gift2');
const gift3 = document.getElementById('gift3');
submit.addEventListener('click', () => {
    name=document.getElementById('name').value;
    window.alert('ăn '+name+'đúng không \n nhớ cap màn hình lại nhé');
    window.location.href = `https://www.facebook.com/messages/`;
})
yesBtn.addEventListener('click', () => {
    // Code xử lý khi di chuột qua nút "yes" (nếu cần)
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    title.innerHTML = 'ok :))';
    apo.pause();
    apo1.play(); 
    setTimeout(() => {
        title.innerHTML = 'Muốn ăn gì nào :))';
        nameDiv.style.display = 'block';
        
    },3000)
    gift1.src = 'https://giphy.com/embed/IMfi5ugpf3W1y';
    gift2.src = 'https://giphy.com/embed/FElR3ylsj6PTy';
    gift3.src = 'https://giphy.com/embed/IMfi5ugpf3W1y';
});
