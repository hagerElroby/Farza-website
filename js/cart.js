$(document).ready(function () {


      loadcart();

      $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });

      function loadcart(){
        $.ajax({
          method: "GET",
          url: "/load-cart",
          success: function (response) {
            $('.cart-count').html('');
            $('.cart-count').html(response.count);
          }
        });
      }

      // Add Product In Cart //

      $('.addToCart').click(function (e) { 
        e.preventDefault();

        var product_id  = $(this).closest('.product_data').find('.product_id').val();
        var product_qty = $(this).closest('.product_data').find('.qty-input').val();
        var total_price = $(this).closest('.product_data').find('.total_price').val();

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });


        $.ajax({
            method : "POST",
            url    : "/add-to-cart",
            data: {
                'product_id'  : product_id,
                'product_qty' : product_qty,
                'total_price' : total_price,
            },
            success: function (response) {

                if (response.status) {
                  Swal.fire({
                    icon: 'success',
                    title: response.status ,
                    showConfirmButton: false,
                    timer: 2500
                  })
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: response.error ,
                    showConfirmButton: false,
                    timer: 2500
                  })
                }
                loadcart();
            },
        });

        
      });

      // Delete Product In Cart //
       
        $(document).on('click' , '.delete-cart-item' , function (e) { 
        e.preventDefault();
        
        var product_id  = $(this).closest('.product_data').find('.product_id').val();

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
          method: "POST",
          url: "delete-cart-item",
          data: {
            'product_id':product_id,
          },
          success: function (response) {
            // window.location.reload();
            $('.cartitem').load(location.href + " .cartitem")
            if (response.status) {
              Swal.fire({
                icon: 'success',
                title: response.status ,
                showConfirmButton: false,
                timer: 1500
              })
            } else {
              Swal.fire({
                icon: 'error',
                title: response.error ,
                showConfirmButton: false,
                timer: 1500
              })
            }
            loadcart();
          }
        });
      });

      // Change Quantity Product In Cart //

      // $('.changeQty').click(function (e) { 
        $(document).on('click' , '.changeQty' , function (e) {
        e.preventDefault();

        var product_id  = $(this).closest('.product_data').find('.product_id').val();
        var qty         = $(this).closest('.product_data').find('.product_qty').val();

        $.ajaxSetup({
          headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
      });

        data = {
          'product_id'  : product_id,
          'product_qty' : qty,
        }

        $.ajax({
          method: "POST",
          url: "update-cart",
          data: data,
          success: function (response) {
            // window.location.reload();
            $('.cartitem').load(location.href + " .cartitem")
          }
        });
        
      });
    
      // Calculate Total Price and Shipping Charge in  Delivery Address //

      $("input[name=deliveryaddress]").bind('change' , function(){
        var shipping_charge = $(this).attr("shipping_charge");
        var total_price     = $(this).attr("total_price");

        $(".shipping_charge").html(shipping_charge+" EGP");

        var grand_total = parseInt(shipping_charge) + parseInt(total_price);

        $(".grand_total").html(grand_total+" EGP");
      });


      
//       $('.increment-btn').click(function (e) { 
//         e.preventDefault();
        
//         var inc_value = $(this).closest('.product_data').find('.product_qty').val();
//         var value = parseInt(inc_value , 10);
//         value = isNaN(value) ? 0 : value;
//         if (value < 1000000) {
//              value++;
//             $(this).closest('.product_data').find('.product_qty').val(value);
//         }
        
//     });

//     $('.decrement-btn').click(function (e) { 
//         e.preventDefault();

//         var dec_value = $(this).closest('.product_data').find('.product_qty').val();
//         var value = parseInt(dec_value , 10);
//         value = isNaN(value) ? 0 : value;
//         if (value > 1) {
//              value--;
//             $(this).closest('.product_data').find('.product_qty').val(value);
//         }
        
//     });
});

const body = document.body;
const topNav = document.querySelector(".top-nav");
const menuToggle = topNav.querySelector(".menu-toggle");
const menuClose = topNav.querySelector(".menu-close");
const menuWrapper = topNav.querySelector(".menu-wrapper");
const topBannerOverlay = document.querySelector(".top-banner-overlay");
const isOpenedClass = "is-opened";
const isMovedClass = "is-moved";
const noTransitionClass = "no-transition";
let resize;

menuToggle.addEventListener("click", () => {
  menuWrapper.classList.toggle(isOpenedClass);
  topBannerOverlay.classList.toggle(isMovedClass);
});

menuClose.addEventListener("click", () => {
  menuWrapper.classList.remove(isOpenedClass);
  topBannerOverlay.classList.remove(isMovedClass);
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && menuWrapper.classList.contains(isOpenedClass)) {
    menuClose.click();
  }
});

window.addEventListener("resize", () => {
  body.classList.add(noTransitionClass);
  clearTimeout(resize);
  resize = setTimeout(() => {
    body.classList.remove(noTransitionClass);
  }, 500);
});