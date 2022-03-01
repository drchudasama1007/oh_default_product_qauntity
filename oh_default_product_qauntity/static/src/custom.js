$(document).ready(function(){
    $('.quantity').prop('readonly', true);

    /* For Product Details Page */
    if($("#product_details").length){
        if($("#website_qauntity").length){
        /* Get Website Qauntity */
        var website_qauntity = parseInt($("#website_qauntity").val())
        if(website_qauntity && website_qauntity!=1){
            $(".quantity").val(website_qauntity)
            $(document).on('click', '.input-group-prepend .js_add_cart_json', function(ev) {
                var original_quantity = parseInt($(".quantity").val()) + 1
                /* For Regular Decreament */
                if(original_quantity-website_qauntity>0){
                    $(".quantity").val(original_quantity-website_qauntity)
                }
                /* For Last Decreament  */
                if(original_quantity-website_qauntity==0){
                    $(".quantity").val(website_qauntity)
                }
            });
            $(document).on('click', '.input-group-append .js_add_cart_json', function(ev) {
                var original_quantity = parseInt($(".quantity").val()) - 1
                $(".quantity").val(original_quantity+website_qauntity)
                if(original_quantity==1){
                    $(".quantity").val(original_quantity+website_qauntity-1)
                }
                else{
                    $(".quantity").val(original_quantity+website_qauntity)
                }
            });
        }
    }
    }

    /* For Cart Details Page */

    $(document).on('click', '.input-group-prepend .js_add_cart_json', function(ev) {
        var website_qauntity = parseInt($(this).parent().parent().parent().parent().find('.website_qauntity').val())
        var original_quantity = parseInt($(this).parent().parent().parent().parent().find('.js_quantity').val()) + 1
        if(website_qauntity){
            /* For Regular Decreament */
            if(original_quantity-website_qauntity>0){
                $(this).parent().parent().parent().parent().find('.js_quantity').val(original_quantity-website_qauntity)
            }
            /* For Last Decreament  */
            if(original_quantity-website_qauntity==0){
                $(this).parent().parent().parent().parent().find('.js_quantity').val(website_qauntity)
            }
        }
    });

    $(document).on('click', '.input-group-append .js_add_cart_json', function(ev) {
            var website_qauntity = parseInt($(this).parent().parent().parent().parent().find('.website_qauntity').val())
            var original_quantity = parseInt($(this).parent().parent().parent().parent().find('.js_quantity').val()) - 1
            if(website_qauntity){
                if(original_quantity==1){
                    if(website_qauntity==1){
                        $(this).parent().parent().parent().parent().find('.js_quantity').val(original_quantity+website_qauntity)
                    }
                    else{
                        $(this).parent().parent().parent().parent().find('.js_quantity').val(original_quantity+website_qauntity-1)
                    }
                }
                else{
                    $(this).parent().parent().parent().parent().find('.js_quantity').val(original_quantity+website_qauntity)
                }
            }
        });

});