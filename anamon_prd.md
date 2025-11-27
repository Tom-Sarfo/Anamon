# Anamon PRD

## Project Name
Anamon
A simple mobile friendly ecommerce experience for apparel shoppers who prefer fast checkouts and payment on delivery.

## Overall Goal
Create a lightweight, smooth and fast shopping experience with minimal friction. Users move from browsing to checkout with as few steps as possible. No user accounts, just quick orders stored locally until checkout.

## Tech Stack

### Frontend
- React Router 7
- Tailwind CSS
- Mobile first layouts
- LocalStorage for cart and checkout draft data

### Backend
- Simple API for products and receiving orders (can be mocked or replaced later)
- No payment integration needed

## Brand Colors

### Primary Color
- #6D7A71

### Secondary Color
- #CDD9C5

### Accent Color
- #BA806A

### Neutral Background
- #EFEADD

### Neutral UI Surface
- #E8D7C7

## Pages and Core Flow

### 1. Home Page
**Route:** /

**Content:**
- Hero image or banner
- Featured products grid
- Featured categories

**Actions:**
- Tap product to open product details
- Navigate to cart
- Navigate to menu

---

### 2. Product Listing Page
**Route:** /products or /category/:id

**Content:**
- Product cards: image, name, price

**Actions:**
- Tap product to view details

---

### 3. Product Details Page
**Route:** /product/:id

**Content:**
- Product image
- Name
- Price
- Short description
- Optional size or color choices
- Payment on delivery note

**Actions:**
- Add to Cart
- Buy Now (goes straight to checkout)

**Storage:**
- Add item to localStorage under `anamon_cart`
- If Buy Now, store item under `anamon_checkout_item`

---

### 4. Cart Page
**Route:** /cart

**Content:**
- List of cart items from localStorage
- Remove items
- Update quantities
- View subtotal

**Actions:**
- Proceed to checkout

---

### 5. Checkout Page
**Route:** /checkout

**Fields:**
- Full name
- Email
- Phone number
- Location

**Actions:**
- Confirm order

**Storage:**
- Save form draft in `anamon_checkout_draft`
- Clear cart and draft after completion

---

### 6. Order Confirmation Page
**Route:** /order-success

**Content:**
- Thank you message
- Order summary
- Delivery notes

---

## LocalStorage Structure

### anamon_cart
```
[
  {
    "id": "product_id",
    "name": "Product Name",
    "price": 120,
    "quantity": 1,
    "image": "/path/img"
  }
]
```

### anamon_checkout_draft
```
{
  "name": "",
  "email": "",
  "phone": "",
  "location": ""
}
```

### anamon_checkout_item
```
{
  "id": "",
  "name": "",
  "price": "",
  "image": ""
}
```

---

## Routes Summary
| Page | Route | Notes |
|------|--------|--------|
| Home | / | Featured products |
| Product Listing | /products | All items |
| Product Details | /product/:id | Add to cart or buy now |
| Cart | /cart | Modify items |
| Checkout | /checkout | Minimal form |
| Order Confirmation | /order-success | Final message |

---

## Deliverables
- Fully functional React Router 7 app
- Mobile friendly layout
- LocalStorage cart system
- Minimal checkout
- Clean product detail UI
- Branded design using provided palette
- No backend dependency for MVP

