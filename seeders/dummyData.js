const { 
  User, 
  UserAddress,
  Brand,
  Category,
  Product,
  ProductMedia,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Payment,
  Shipment
} = require("../models");

async function seedAll() {
  console.log("🌱 Starting seeder...");

  // -------------------------------
  // 1. USERS
  // -------------------------------
  await User.bulkCreate([
    {
      id: 1,
      full_name: "Rizky Saputra",
      nickname: "Rizky",
      email: "rizky@example.com",
      password: "hashedpassword123",
      phone: "08123456789",
    },
    {
      id: 2,
      full_name: "Dewi Permata",
      nickname: "Dewi",
      email: "dewi@example.com",
      password: "hashedpassword456",
      phone: "081298765432",
    }
  ]);

  // -------------------------------
  // 2. USER ADDRESSES
  // -------------------------------
  await UserAddress.bulkCreate([
    {
      id: 1,
      user_id: 1,
      label: "Home",
      recipient_name: "Rizky Saputra",
      phone: "08123456789",
      address_line: "Jl. Merdeka No. 10",
      city: "Bandung",
      province: "Jawa Barat",
      postal_code: "40111",
      is_default: true
    },
    {
      id: 2,
      user_id: 2,
      label: "Office",
      recipient_name: "Dewi Permata",
      phone: "081298765432",
      address_line: "Jl. Asia Afrika No. 5",
      city: "Bandung",
      province: "Jawa Barat",
      postal_code: "40112",
      is_default: true
    },
  ]);

  // -------------------------------
  // 3. BRANDS
  // -------------------------------
  await Brand.bulkCreate([
    { id: 1, name: "Nike", slug: "nike" },
    { id: 2, name: "Adidas", slug: "adidas" },
  ]);

  // -------------------------------
  // 4. CATEGORIES
  // -------------------------------
  await Category.bulkCreate([
    { id: 1, name: "Shoes", slug: "shoes" },
    { id: 2, name: "Bags", slug: "bags" },
  ]);

  // -------------------------------
  // 5. PRODUCTS
  // -------------------------------
  await Product.bulkCreate([
    {
      id: 1,
      name: "Nike Air Max 90",
      description: "Best running shoes",
      brand_id: 1,
      category_id: 1,
      price: 1500000,
      stock: 50,
      rating: 4.8
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      description: "Premium running shoes",
      brand_id: 2,
      category_id: 1,
      price: 1800000,
      stock: 30,
      rating: 4.9
    }
  ]);

  // -------------------------------
  // 6. PRODUCT MEDIA
  // -------------------------------
  await ProductMedia.bulkCreate([
    { id: 1, product_id: 1, media_type: "image", url: "https://picsum.photos/300/200?1" },
    { id: 2, product_id: 2, media_type: "image", url: "https://picsum.photos/300/200?2" },
  ]);

  // -------------------------------
  // 7. CARTS
  // -------------------------------
  await Cart.bulkCreate([
    { id: 1, user_id: 1 },
    { id: 2, user_id: 2 },
  ]);

  // -------------------------------
  // 8. CART ITEMS
  // -------------------------------
  await CartItem.bulkCreate([
    { id: 1, cart_id: 1, product_id: 1, quantity: 2 },
    { id: 2, cart_id: 1, product_id: 2, quantity: 1 },
    { id: 3, cart_id: 2, product_id: 1, quantity: 1 },
  ]);

  // -------------------------------
  // 9. ORDERS
  // -------------------------------
  await Order.bulkCreate([
    {
      id: 1,
      user_id: 1,
      status: "PAID",
      total_amount: 4800000, // 2x Nike + 1x Adidas
      shipping_cost: 20000,
      payment_method: "MIDTRANS"
    }
  ]);

  // -------------------------------
  // 10. ORDER ITEMS
  // -------------------------------
  await OrderItem.bulkCreate([
    {
      id: 1,
      order_id: 1,
      product_id: 1,
      product_name_snapshot: "Nike Air Max 90",
      price_snapshot: 1500000,
      quantity: 2
    },
    {
      id: 2,
      order_id: 1,
      product_id: 2,
      product_name_snapshot: "Adidas Ultraboost",
      price_snapshot: 1800000,
      quantity: 1
    }
  ]);

  // -------------------------------
  // 11. PAYMENTS
  // -------------------------------
  await Payment.bulkCreate([
    {
      id: 1,
      order_id: 1,
      provider: "Midtrans",
      status: "PAID",
      transaction_id: "TRX001",
      amount: 4800000,
      paid_at: new Date()
    }
  ]);

  // -------------------------------
  // 12. SHIPMENTS
  // -------------------------------
  await Shipment.bulkCreate([
    {
      id: 1,
      order_id: 1,
      courier: "JNE",
      tracking_number: "JNE123ABC",
      status: "SHIPPED",
      shipped_at: new Date()
    }
  ]);

  console.log("🌱 Seeder selesai!");
}

module.exports = { seedAll };
