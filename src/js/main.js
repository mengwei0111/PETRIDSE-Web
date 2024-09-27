console.log("這是javascript 程式檔案")


    // JavaScript to handle the modal open and close
    document.getElementById('openModal1').onclick = function() {
        document.getElementById('myModal1').classList.remove('hidden');
    }
    document.getElementById('closeModal1').onclick = function() {
        document.getElementById('myModal1').classList.add('hidden');
    }

    document.getElementById('openModal2').onclick = function() {
        document.getElementById('myModal2').classList.remove('hidden');
    }
    document.getElementById('closeModal2').onclick = function() {
        document.getElementById('myModal2').classList.add('hidden');
    }

    document.getElementById('openModal3').onclick = function() {
        document.getElementById('myModal3').classList.remove('hidden');
    }
    document.getElementById('closeModal3').onclick = function() {
        document.getElementById('myModal3').classList.add('hidden');
    }

    const more_Btn = document.getElementById('more_Btn');
more_Btn.addEventListener('click', function() {
    // 顯示 shop3
    document.getElementById('shop3').classList.remove('hidden');
    // 隱藏 more_Btn
    more_Btn.classList.add('hidden');
});
$(function(){
 // 先取得 name="sel" 的複選框
 var $checkbox = $(':checkbox[name=genre]');
 
 // 全部不選取
    $('.cleargenre').click(function(e){
            e.preventDefault();
            $checkbox.prop('checked', false);
        });
}); 

    // Toggle dropdown menu
    document.getElementById('toggleButton').addEventListener('click', function() {
        var dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.remove('hidden');
        } else {
            dropdownMenu.classList.add('hidden');
        }
    });

  // 當用戶滾動時顯示或隱藏按鈕
  window.onscroll = function() {
    var scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  // 點擊按鈕時滾動到頂部
  document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  function changeType() {
    const heartOn = document.getElementById('heartOn');
    const heartOff = document.getElementById('heartOff');
    // pwd.type = pwd.type =='text' ? 'password' : 'text';
    if (heartOn.style.display == 'block') {
      heartOn.style.display = 'none';
      heartOff.style.display = 'block';
    }
    else {
      heartOn.style.display = 'block';
      heartOff.style.display = 'none';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  });
