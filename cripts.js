function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    document.getElementById('cart-items').innerHTML = cart.map(item => {
        total += item.price;
        return `<li>${item.name} - ${item.price}đ</li>`;
    }).join('');
    document.getElementById('total-price').innerText = total;
}

function checkout() {
    alert("Đặt hàng thành công!");
    localStorage.removeItem('cart');
    location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
    loadCart();
    fadeInElements();
});

// Hiệu ứng cuộn trang
function fadeInElements() {
    let elements = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", function () {
        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
    loadCart();
}

// Hiển thị giỏ hàng
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cart-items");
    let total = 0;

    if (!cartList) return; // Tránh lỗi khi chưa vào trang giỏ hàng

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price}đ <button onclick="removeFromCart(${index})">Xóa</button>`;
        cartList.appendChild(li);
    });

    document.getElementById("total-price").innerText = total;
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Đặt hàng
function checkout() {
    if (confirm("Bạn có chắc muốn đặt hàng?")) {
        alert("Đặt hàng thành công!");
        localStorage.removeItem("cart");
        loadCart();
    }
}
