if (window.matchMedia('(max-width: 767px)').matches)
{
    let viewPortWidth = $("body").width();
    $('.cart-items-container').width(Math.floor(viewPortWidth * 0.9));
}

if (window.matchMedia('(max-width: 767px)').matches) {
    $('body > div')[0].classList.remove('container');
    $('header')[0].classList.remove('mb-3');
    $('.product-main-container')[0].classList.remove('p-3');
    $('.main-img-container')[0].classList.remove('mb-4');
    $('.product-details')[0].classList.add('container' , 'py-3');
    $('.nav-list-link a')[0].classList.remove('justify-content-center');
}

const imagesSrcArray = [
    'assets/image-product-1.jpg',
    'assets/image-product-2.jpg',
    'assets/image-product-3.jpg',
    'assets/image-product-4.jpg'
];
let currentImgIndex = 0;
$('.main-img-prev-btn').on('click',function(e){
    if(currentImgIndex - 1 === -1)
    {
        currentImgIndex = imagesSrcArray.length-1
    }
    else
    {
        currentImgIndex -= 1;
    }
    $('.main-img-container img').attr('src',imagesSrcArray[currentImgIndex])
})

$('.main-img-next-btn').on('click',function(e){
    if(currentImgIndex + 1 === imagesSrcArray.length)
    {
        currentImgIndex = 0;
    }
    else
    {
        currentImgIndex += 1;
    }
    $('.main-img-container img').attr('src',imagesSrcArray[currentImgIndex])
})

$('.cart').on('click',function(e)
{
    if(e.target.nextElementSibling.classList.contains('d-none'))
    {
        e.target.nextElementSibling.classList.remove('d-none');
    }
    else{e.target.nextElementSibling.classList.add('d-none');}
})

$('.wrapper').on('click' , function(e){
    toggelCurrentSubImg(e.target.parentElement);
    $('.main-img-container img').attr("src",e.target.nextElementSibling.src.replace('-thumbnail',''));
});

function toggelCurrentSubImg(subImg)
{
    Array.from(document.querySelectorAll('.sub-img-container')).forEach((sub) => {
        if(sub == subImg)
        {
            sub.classList.add('current-sub-img');
        }
        else
        {
            sub.classList.remove('current-sub-img');
        }
        
    });
}

let currentProductQuantity = 0;

$('.prouduct-counter-plus').on('click',function(e)
{
    currentProductQuantity += 1;
    $('.prouduct-counter-container p').html(currentProductQuantity);
})

$('.prouduct-counter-minus').on('click',function(e)
{
    if(currentProductQuantity){
        currentProductQuantity -= 1;
    };
    $('.prouduct-counter-container p').html(currentProductQuantity);
})

$('.add-btn').on('click',function(e){
    if(currentProductQuantity)
    {
        $('.empty-cart')[0].classList.add('d-none');
        $('.cart-item')[0].classList.remove('d-none');
        $('.product-quantity').html(currentProductQuantity);
        $('.product-total-price').html(`$${currentProductQuantity*125}`);
        $('.total-items-container span').html(currentProductQuantity);
    }
});

$('.product-delete-btn').on('click',function(e){
    $('.empty-cart')[0].classList.remove('d-none');
    $('.cart-item')[0].classList.add('d-none');
    currentProductQuantity = 0;
    $('.total-items-container span').html(currentProductQuantity);
    $('.prouduct-counter-container p').html(currentProductQuantity);
})

$('.menu-container').on('click',function(e){
    $('.main-nav')[0].style.display = 'block';
});

$('.nav-list svg').on('click',function(e){
    $('.main-nav')[0].style.display = 'none';
})