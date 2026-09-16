export const MENU_CATEGORIES = [
  "All",
  "Biryani Items",
  "Veg Biryani",
  "Veg Curry",
  "Non-Veg Curry",
  "Veg Starters",
  "Non-Veg Starters",
  "Veg Rice",
  "Non-Veg Rice",
  "Veg Noodles",
  "Non-Veg Noodles",
  "Continental",
  "Sandwich",
  "Burgers",
  "Maggie",
  "Veg Soups",
  "Non-Veg Soups",
  "Mocktails",
  "Milkshakes",
  "Hot Beverages",
  "Breads"
];

// Complete menu extracted directly from Green Leaf Cafe & Restaurant images with exact prices
export const MENU_ITEMS = [
  // BREADS
  { id: "b1", name: "Roti", price: 15, category: "Breads", type: "veg", description: "Traditional Indian unleavened flatbread freshly baked." },
  { id: "b2", name: "Butter Roti", price: 25, category: "Breads", type: "veg", description: "Soft Indian flatbread brushed with luscious rich butter." },

  // VEG CURRY
  { id: "vc1", name: "Veg Mixed", price: 130, category: "Veg Curry", type: "veg", description: "Assorted garden fresh vegetables cooked in a spiced gravy." },
  { id: "vc2", name: "Paneer Butter Masala", price: 200, category: "Veg Curry", type: "veg", isPopular: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80", description: "Rich and creamy tomato-based paneer gravy infused with butter and aromatic spices." },
  { id: "vc3", name: "Kadai Paneer", price: 200, category: "Veg Curry", type: "veg", isPopular: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", description: "Cottage cheese cubes tossed with bell peppers and freshly ground kadai spices." },
  { id: "vc4", name: "Paneer Methi Chaman", price: 220, category: "Veg Curry", type: "veg", description: "Tender paneer cooked in a fragrant methi (fenugreek) spinach sauce." },
  { id: "vc5", name: "Paneer Khola Puri", price: 220, category: "Veg Curry", type: "veg", description: "Spicy Kolhapuri style paneer curry infused with bold Maharashtrian spices." },
  { id: "vc6", name: "Shahi Paneer", price: 200, category: "Veg Curry", type: "veg", description: "Royal cottage cheese curry simmered in a luscious cashew nut and cream sauce." },
  { id: "vc7", name: "Mushroom Kadai", price: 170, category: "Veg Curry", type: "veg", description: "Fresh button mushrooms tossed in spicy semi-dry kadai masala." },
  { id: "vc8", name: "Mushroom Masala", price: 170, category: "Veg Curry", type: "veg", description: "Juicy mushrooms slow-cooked in a rich onion-tomato spiced gravy." },
  { id: "vc9", name: "Gobi Masala", price: 160, category: "Veg Curry", type: "veg", description: "Crispy cauliflower florets simmered in a rich spiced gravy." },
  { id: "vc10", name: "Kaju Masala", price: 210, category: "Veg Curry", type: "veg", description: "Roasted cashew nuts cooked in a rich, buttery onion tomato gravy." },
  { id: "vc11", name: "Dal Fry", price: 120, category: "Veg Curry", type: "veg", description: "Yellow lentils tempered with ghee, cumin seeds, garlic, and green chilies." },
  { id: "vc12", name: "Dal Tadaka", price: 130, category: "Veg Curry", type: "veg", description: "Classic yellow lentils topped with aromatic ghee and red chili tadka." },
  { id: "vc13", name: "Dal Kholapuri", price: 130, category: "Veg Curry", type: "veg", description: "Spicy specialty dal prepared with Kolhapuri chili masala." },
  { id: "vc14", name: "Jaipuri Panner", price: 210, category: "Veg Curry", type: "veg", description: "Rajasthani Jaipur style cottage cheese gravy topped with papad crunch." },
  { id: "vc15", name: "Mushroom Palak", price: 160, category: "Veg Curry", type: "veg", description: "Button mushrooms cooked in a silky smooth spinach puree." },
  { id: "vc16", name: "Palak Panner", price: 220, category: "Veg Curry", type: "veg", description: "Fresh cottage cheese cubes folded into garlic-infused spinach gravy." },

  // VEG RICE
  { id: "vr1", name: "Gobi Rice", price: 120, category: "Veg Rice", type: "veg", description: "Flavorsome rice tossed with spiced cauliflower florets." },
  { id: "vr2", name: "Gobi Schezwan Rice", price: 140, category: "Veg Rice", type: "veg", description: "Spicy Schezwan fried rice loaded with cauliflower." },
  { id: "vr3", name: "Paneer Rice", price: 160, category: "Veg Rice", type: "veg", description: "Aromatic fried rice mixed with soft paneer cubes." },
  { id: "vr4", name: "Paneer Schezwan Rice", price: 180, category: "Veg Rice", type: "veg", description: "Fiery Schezwan style fried rice loaded with paneer." },
  { id: "vr5", name: "Veg Rice", price: 100, category: "Veg Rice", type: "veg", description: "Classic fried rice with wok-tossed mixed vegetables." },
  { id: "vr6", name: "Veg Schezwan Rice", price: 120, category: "Veg Rice", type: "veg", description: "Zesty Schezwan fried rice with finely chopped veggies." },
  { id: "vr7", name: "Mushroom Rice", price: 120, category: "Veg Rice", type: "veg", description: "Delicious wok-fried rice tossed with juicy mushrooms." },
  { id: "vr8", name: "Mushroom Schezwan Rice", price: 140, category: "Veg Rice", type: "veg", description: "Spicy Schezwan rice with sautéed button mushrooms." },
  { id: "vr9", name: "Kaju Rice", price: 150, category: "Veg Rice", type: "veg", description: "Rich fried rice studded with golden roasted cashew nuts." },

  // VEG SOUPS
  { id: "vs1", name: "Veg Manchow Soup", price: 99, category: "Veg Soups", type: "veg", description: "Indo-Chinese dark soup topped with crispy fried noodles." },
  { id: "vs2", name: "Veg Hot & Sour Soup", price: 99, category: "Veg Soups", type: "veg", description: "Spicy and tangy vegetable broth packed with fresh veggies." },
  { id: "vs3", name: "Veg Sweet Corn Soup", price: 100, category: "Veg Soups", type: "veg", description: "Comforting sweet corn broth with finely diced vegetables." },

  // NON VEG SOUPS
  { id: "nvs1", name: "Chicken Manchow Soup", price: 119, category: "Non-Veg Soups", type: "non-veg", description: "Spicy chicken soup served with crisp noodles." },
  { id: "nvs2", name: "Chicken Hot & Sour Soup", price: 119, category: "Non-Veg Soups", type: "non-veg", description: "Tangy and fiery chicken soup loaded with shredded chicken." },
  { id: "nvs3", name: "Chicken Sweet Corn Soup", price: 119, category: "Non-Veg Soups", type: "non-veg", description: "Creamy corn soup with tender chicken bits." },
  { id: "nvs4", name: "Mutton Soup", price: 149, category: "Non-Veg Soups", type: "non-veg", description: "Nourishing bone broth slow-simmered with aromatic mutton spices." },

  // SANDWICH
  { id: "sw1", name: "Veg sandwich", price: 70, category: "Sandwich", type: "veg", description: "Fresh grilled sandwich stuffed with sliced veggies." },
  { id: "sw2", name: "Paneer sandwich", price: 100, category: "Sandwich", type: "veg", description: "Grilled sandwich filled with spiced cottage cheese filling." },
  { id: "sw3", name: "Chicken sandwich", price: 100, category: "Sandwich", type: "non-veg", description: "Grilled sandwich loaded with seasoned chicken filling." },

  // BIRYANI ITEMS
  { id: "b1_item", name: "Chicken Dum Biryani", price: 170, category: "Biryani Items", type: "non-veg", isPopular: true, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80", description: "Fragrant basmati rice dum cooked with juicy chicken, herbs, and Hyderabadi spices." },
  { id: "b2_item", name: "Chicken Lollipop Biryani", price: 230, category: "Biryani Items", type: "non-veg", description: "Special biryani served with crispy spiced chicken lollipops." },
  { id: "b3_item", name: "Chicken Fry Piece Biryani", price: 210, category: "Biryani Items", type: "non-veg", description: "Flavorful biryani rice topped with spicy fried chicken pieces." },
  { id: "b4_item", name: "Mogalai Biryani", price: 210, category: "Biryani Items", type: "non-veg", description: "Rich Mughal style biryani enriched with nuts, raisins, and cream." },
  { id: "b5_item", name: "Mutton Fry Piece Biryani", price: 299, category: "Biryani Items", type: "non-veg", isPopular: true, image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80", description: "Tender mutton fry pieces served over aromatic biryani rice." },
  { id: "b6_item", name: "Special Biryani", price: 210, category: "Biryani Items", type: "non-veg", description: "Chef's signature biryani loaded with special chicken cuts and spices." },
  { id: "b7_item", name: "Chicken 65 Biryani", price: 190, category: "Biryani Items", type: "non-veg", description: "Biryani topped with spicy red Chicken 65 bites." },

  // VEG BIRYANI
  { id: "vb1", name: "Kaju Biryani", price: 170, category: "Veg Biryani", type: "veg", description: "Aromatic biryani rice slow-cooked with rich roasted cashews." },
  { id: "vb2", name: "Paneer Biryani", price: 200, category: "Veg Biryani", type: "veg", description: "Fragrant basmati rice cooked with marinated paneer cubes and herbs." },

  // VEG NOODLES
  { id: "vn1", name: "Veg Noodles", price: 120, category: "Veg Noodles", type: "veg", description: "Wok-tossed noodles with crisp seasonal vegetables." },
  { id: "vn2", name: "Veg Schezwan Noodles", price: 140, category: "Veg Noodles", type: "veg", description: "Spicy Schezwan noodles tossed with veggies." },
  { id: "vn3", name: "Paneer Noodles", price: 180, category: "Veg Noodles", type: "veg", description: "Noodles stir-fried with paneer chunks and vegetables." },
  { id: "vn4", name: "Paneer Schezwan Noodles", price: 200, category: "Veg Noodles", type: "veg", description: "Fiery Schezwan noodles topped with paneer." },
  { id: "vn5", name: "Mushroom Noodles", price: 140, category: "Veg Noodles", type: "veg", description: "Stir-fried noodles with sliced mushrooms." },
  { id: "vn6", name: "Mushroom Schezwan Noodles", price: 180, category: "Veg Noodles", type: "veg", description: "Spicy Schezwan noodles with mushrooms." },
  { id: "vn7", name: "Gobi Noodles", price: 140, category: "Veg Noodles", type: "veg", description: "Wok noodles tossed with crispy cauliflower bites." },
  { id: "vn8", name: "Gobi Schezwan Noodles", price: 160, category: "Veg Noodles", type: "veg", description: "Schezwan spiced noodles with crispy gobi." },

  // NON VEG NOODLES
  { id: "nvn1", name: "Chicken Noodles", price: 180, category: "Non-Veg Noodles", type: "non-veg", description: "Wok-fried noodles with seasoned chicken strips." },
  { id: "nvn2", name: "Egg Noodles", price: 130, category: "Non-Veg Noodles", type: "egg", description: "Stir-fried noodles with scrambled egg ribbons." },
  { id: "nvn3", name: "Schezwan Chicken Noodles", price: 200, category: "Non-Veg Noodles", type: "non-veg", description: "Spicy Schezwan noodles with tender chicken." },
  { id: "nvn4", name: "Schezwan Egg Noodles", price: 150, category: "Non-Veg Noodles", type: "egg", description: "Spicy Schezwan noodles tossed with scrambled eggs." },

  // NON VEG RICE
  { id: "nvr1", name: "Egg Rice", price: 100, category: "Non-Veg Rice", type: "egg", description: "Classic fried rice tossed with egg." },
  { id: "nvr2", name: "Double Egg Fried Rice", price: 110, category: "Non-Veg Rice", type: "egg", description: "Extra egg fried rice packed with double egg scramble." },
  { id: "nvr3", name: "Chicken Rice", price: 130, category: "Non-Veg Rice", type: "non-veg", description: "Flavorful fried rice tossed with chicken pieces." },
  { id: "nvr4", name: "Chicken Schezwan Fried Rice", price: 150, category: "Non-Veg Rice", type: "non-veg", description: "Fiery Schezwan style chicken fried rice." },
  { id: "nvr5", name: "Egg Schezwan Fried Rice", price: 120, category: "Non-Veg Rice", type: "egg", description: "Spicy Schezwan fried rice with egg." },
  { id: "nvr6", name: "Mutton Fried Rice", price: 240, category: "Non-Veg Rice", type: "non-veg", description: "Rich wok fried rice tossed with shredded mutton." },

  // CONTINENTAL
  { id: "c1", name: "French Fries", price: 80, category: "Continental", type: "veg", description: "Crispy golden salted potato fries." },
  { id: "c2", name: "Peri Peri Fries", price: 90, category: "Continental", type: "veg", description: "French fries tossed in zesty spicy Peri Peri seasoning." },
  { id: "c3", name: "Potato Cheese Popz", price: 100, category: "Continental", type: "veg", description: "Crispy potato bites oozing with melted cheese." },
  { id: "c4", name: "Potato Garlic Popz", price: 100, category: "Continental", type: "veg", description: "Garlic flavored crunchy potato popz." },
  { id: "c5", name: "Veg Nuggets", price: 100, category: "Continental", type: "veg", description: "Golden crispy vegetable nuggets served with dip." },
  { id: "c6", name: "Smileys", price: 100, category: "Continental", type: "veg", description: "Fun smiley-shaped potato munchies." },
  { id: "c7", name: "Chicken Nuggets", price: 100, category: "Continental", type: "non-veg", description: "Crunchy golden chicken nuggets." },
  { id: "c8", name: "Masala Fries", price: 100, category: "Continental", type: "veg", description: "Fries coated in spicy Indian chat masala." },
  { id: "c9", name: "Bread Omlette", price: 60, category: "Continental", type: "egg", description: "Classic street-style fluffy egg omlette with bread." },
  { id: "c10", name: "Bread Omlette With Cheese", price: 80, category: "Continental", type: "egg", description: "Bread omlette loaded with melted cheese slice." },

  // MAGGIE
  { id: "mg1", name: "Veg Maggie", price: 80, category: "Maggie", type: "veg", description: "Hot noodles tossed with sautéed vegetables." },
  { id: "mg2", name: "Egg Maggie", price: 99, category: "Maggie", type: "egg", description: "Desi Maggie noodles cooked with scrambled egg." },
  { id: "mg3", name: "Chicken Maggie", price: 120, category: "Maggie", type: "non-veg", description: "Delicious Maggie noodles tossed with shredded chicken." },
  { id: "mg4", name: "Chicken Cheese Maggie", price: 140, category: "Maggie", type: "non-veg", description: "Chicken Maggie noodles topped with melted cheese." },
  { id: "mg5", name: "Paneer Maggie", price: 140, category: "Maggie", type: "veg", description: "Comforting Maggie noodles served with paneer cubes." },

  // BURGERS
  { id: "bg1", name: "Veg Burger", price: 85, category: "Burgers", type: "veg", description: "Classic vegetable patty burger with fresh lettuce and mayo." },
  { id: "bg2", name: "Chicken Burger", price: 110, category: "Burgers", type: "non-veg", description: "Crispy chicken patty burger with sauce and toppings." },
  { id: "bg3", name: "Paneer Burger", price: 129, category: "Burgers", type: "veg", description: "Grilled paneer patty burger loaded with special house sauce." },

  // MOCKTAILS
  { id: "mc1", name: "Blue curcao Mojito", price: 89, category: "Mocktails", type: "veg", isPopular: true, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80", description: "Refreshing blue curacao cooler with mint, lime, and sparkling soda." },
  { id: "mc2", name: "Kiwi mule", price: 89, category: "Mocktails", type: "veg", description: "Zesty kiwi punch blended with crushed ice and ginger soda." },
  { id: "mc3", name: "Mint Mojito", price: 79, category: "Mocktails", type: "veg", description: "Classic refreshing mint and lime cooler." },
  { id: "mc4", name: "Pineapple cobbler", price: 89, category: "Mocktails", type: "veg", description: "Tropical pineapple juice mocktail infused with citrus." },
  { id: "mc5", name: "watermelon Margarita", price: 89, category: "Mocktails", type: "veg", description: "Chilled fresh watermelon crush with a lime rim." },
  { id: "mc6", name: "Orange fizz", price: 89, category: "Mocktails", type: "veg", description: "Tangy orange juice splashed with fizzy soda." },
  { id: "mc7", name: "Black current mojito", price: 89, category: "Mocktails", type: "veg", description: "Blackcurrant syrup muddled with mint and soda." },
  { id: "mc8", name: "Rose milk", price: 80, category: "Mocktails", type: "veg", description: "Chilled fragrant rose syrup blended with sweet milk." },
  { id: "mc9", name: "Lassi", price: 50, category: "Mocktails", type: "veg", description: "Traditional sweet thick yogurt drink." },

  // MILKSHAKES
  { id: "ms1", name: "Vanilla Milkshake", price: 89, category: "Milkshakes", type: "veg", description: "Smooth classic vanilla bean milkshake." },
  { id: "ms2", name: "Chocolate milkshake", price: 100, category: "Milkshakes", type: "veg", description: "Rich creamy chocolate milkshake topped with cocoa powder." },
  { id: "ms3", name: "Pista Milkshake", price: 110, category: "Milkshakes", type: "veg", description: "Fragrant pistachio nut milkshake." },
  { id: "ms4", name: "Butterschotch Milkshake", price: 99, category: "Milkshakes", type: "veg", description: "Butterscotch shake with crunchy candy bits." },
  { id: "ms5", name: "Oreo Milkshake", price: 110, category: "Milkshakes", type: "veg", isPopular: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80", description: "Thick creamy shake loaded with crushed Oreo cookies." },
  { id: "ms6", name: "Kitkat Milkshake", price: 110, category: "Milkshakes", type: "veg", description: "Blended KitKat chocolate wafer shake." },
  { id: "ms7", name: "Hershley (Nutella) Milkshake", price: 140, category: "Milkshakes", type: "veg", isPopular: true, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80", description: "Decadent Nutella & Hershey's chocolate milkshake." },

  // VEG STARTERS
  { id: "vs_1", name: "Gobi Manchurian", price: 130, category: "Veg Starters", type: "veg", description: "Crispy cauliflower florets tossed in tangy Manchurian sauce." },
  { id: "vs_2", name: "Gobi Chilli", price: 140, category: "Veg Starters", type: "veg", description: "Fried gobi coated in spicy chili garlic sauce." },
  { id: "vs_3", name: "Gobi 65", price: 130, category: "Veg Starters", type: "veg", description: "South Indian style spiced crunchy cauliflower bites." },
  { id: "vs_4", name: "Panner Chilli", price: 190, category: "Veg Starters", type: "veg", description: "Cottage cheese cubes tossed with capsicum and chilies." },
  { id: "vs_5", name: "Panner Manchurian", price: 200, category: "Veg Starters", type: "veg", description: "Crispy paneer cubes glazed in soya garlic Manchurian sauce." },
  { id: "vs_6", name: "Veg Manchurian", price: 120, category: "Veg Starters", type: "veg", isPopular: true, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80", description: "Crispy vegetable dumplings tossed in dark soya Manchurian gravy." },
  { id: "vs_7", name: "Mushroom chilli", price: 140, category: "Veg Starters", type: "veg", description: "Fresh mushrooms tossed in a spicy chili glaze." },
  { id: "vs_8", name: "Baby corn Chilli", price: 140, category: "Veg Starters", type: "veg", description: "Crisp tender baby corn tossed in red chili garlic sauce." },
  { id: "vs_9", name: "Baby corn 65", price: 140, category: "Veg Starters", type: "veg", description: "Crispy fried baby corn in southern 65 spices." },
  { id: "vs_10", name: "Baby corn Manchurian", price: 150, category: "Veg Starters", type: "veg", description: "Baby corn tossed in sweet and tangy Manchurian sauce." },
  { id: "vs_11", name: "panner Majestic", price: 200, category: "Veg Starters", type: "veg", description: "Hyderabadi style dry paneer dish infused with curry leaves and yogurt." },
  { id: "vs_12", name: "Mushroom 65", price: 130, category: "Veg Starters", type: "veg", description: "Crispy fried mushrooms spiced with red chili batter." },
  { id: "vs_13", name: "Mushroom Manchurian", price: 130, category: "Veg Starters", type: "veg", description: "Mushrooms sautéed in savory soya sauce." },

  // HOT BEVERAGES
  { id: "hb1", name: "Water Tea", price: 15, category: "Hot Beverages", type: "veg", description: "Light black tea brewed with water." },
  { id: "hb2", name: "Tea", price: 15, category: "Hot Beverages", type: "veg", description: "Classic hot milk tea brewed with tea leaves." },
  { id: "hb3", name: "Ginger Tea", price: 20, category: "Hot Beverages", type: "veg", description: "Warm milk tea infused with crushed fresh ginger." },
  { id: "hb4", name: "Lemon Tea", price: 25, category: "Hot Beverages", type: "veg", description: "Refreshing hot black tea with fresh lemon juice." },
  { id: "hb5", name: "Green Tea", price: 25, category: "Hot Beverages", type: "veg", description: "Healthy antioxidant-rich green tea." },
  { id: "hb6", name: "Boost", price: 25, category: "Hot Beverages", type: "veg", description: "Hot malted chocolate drink." },
  { id: "hb7", name: "Horlics", price: 25, category: "Hot Beverages", type: "veg", description: "Classic nourishing hot Horlicks milk." },
  { id: "hb8", name: "Bournvita", price: 25, category: "Hot Beverages", type: "veg", description: "Hot chocolate flavored health drink." },
  { id: "hb9", name: "Hot Chocolote", price: 30, category: "Hot Beverages", type: "veg", description: "Rich, soothing hot cocoa beverage." },
  { id: "hb10", name: "Badam Milk", price: 30, category: "Hot Beverages", type: "veg", description: "Sweet almond flavored hot milk garnished with saffron." },
  { id: "hb11", name: "Milk", price: 20, category: "Hot Beverages", type: "veg", description: "Pure warm steamed milk." },
  { id: "hb12", name: "Black coffee", price: 15, category: "Hot Beverages", type: "veg", description: "Freshly brewed hot black coffee." },
  { id: "hb13", name: "Honey Black Coffee", price: 20, category: "Hot Beverages", type: "veg", description: "Black coffee sweetened with natural honey." },
  { id: "hb14", name: "Black Tea", price: 15, category: "Hot Beverages", type: "veg", description: "Steeped black tea without milk." },

  // NON-VEG CURRY
  { id: "nvc1", name: "Chicken Masala", price: 180, category: "Non-Veg Curry", type: "non-veg", description: "Classic chicken gravy cooked with traditional Indian spices." },
  { id: "nvc2", name: "Kadai Chicken", price: 190, category: "Non-Veg Curry", type: "non-veg", description: "Chicken pieces tossed with onions, capsicum, and fresh kadai masala." },
  { id: "nvc3", name: "Chicken Kholapuri", price: 180, category: "Non-Veg Curry", type: "non-veg", description: "Fiery spicy chicken curry prepared Kolhapuri style." },
  { id: "nvc4", name: "Chicken Chettinadu", price: 220, category: "Non-Veg Curry", type: "non-veg", description: "South Indian Chettinad chicken curry with black pepper and coconut." },
  { id: "nvc5", name: "Moghlai Chicken", price: 210, category: "Non-Veg Curry", type: "non-veg", description: "Creamy Mughal chicken gravy enriched with cashews and eggs." },
  { id: "nvc6", name: "Butter Chicken", price: 220, category: "Non-Veg Curry", type: "non-veg", description: "Tender chicken simmered in rich creamy tomato butter gravy." },
  { id: "nvc7", name: "Hyderabadi Chicken", price: 200, category: "Non-Veg Curry", type: "non-veg", description: "Authentic Hyderabadi spicy green & brown chicken curry." },
  { id: "nvc8", name: "Kaju Chicken Masala", price: 230, category: "Non-Veg Curry", type: "non-veg", description: "Chicken cooked in a luxurious cashew nut gravy." },
  { id: "nvc9", name: "Egg bhurji Masala", price: 110, category: "Non-Veg Curry", type: "egg", description: "Spiced scrambled eggs cooked in onion tomato gravy." },
  { id: "nvc10", name: "Mutton Masala", price: 289, category: "Non-Veg Curry", type: "non-veg", description: "Succulent mutton pieces slow cooked in spiced onion tomato gravy." },
  { id: "nvc11", name: "Mutton Kadai", price: 310, category: "Non-Veg Curry", type: "non-veg", description: "Mutton cooked with capsicum and ground kadai spices." },
  { id: "nvc12", name: "Mutton Jaipuri", price: 350, category: "Non-Veg Curry", type: "non-veg", description: "Rich Rajasthani spiced tender mutton curry." },
  { id: "nvc13", name: "Mutton Kolhapuri", price: 310, category: "Non-Veg Curry", type: "non-veg", description: "Spicy Kolhapuri mutton gravy loaded with chili flavors." },
  { id: "nvc14", name: "Mutton Special Hyderabadi", price: 350, category: "Non-Veg Curry", type: "non-veg", description: "Chef's signature spicy Hyderabadi style mutton gravy." },

  // NON-VEG STARTERS
  { id: "nvs_1", name: "Chicken Lollipop", price: 200, category: "Non-Veg Starters", type: "non-veg", description: "Deep fried marinated chicken drumettes served crisp." },
  { id: "nvs_2", name: "Chicken Chilli", price: 180, category: "Non-Veg Starters", type: "non-veg", description: "Wok-tossed chicken chunks with bell peppers and green chilies." },
  { id: "nvs_3", name: "Chicken 65", price: 190, category: "Non-Veg Starters", type: "non-veg", isPopular: true, image: "https://images.unsplash.com/photo-1610057099443-f63a1520e53a?auto=format&fit=crop&w=600&q=80", description: "Famous South Indian spicy deep-fried chicken starter." },
  { id: "nvs_4", name: "Chicken Manjestic", price: 210, category: "Non-Veg Starters", type: "non-veg", description: "Tender fried chicken strips coated in yogurt and mint green masala." },
  { id: "nvs_5", name: "Dragon Chicken", price: 250, category: "Non-Veg Starters", type: "non-veg", description: "Spicy fried chicken strips tossed in sweet chili cashew sauce." },
  { id: "nvs_6", name: "555 Chicken", price: 250, category: "Non-Veg Starters", type: "non-veg", description: "Crispy chicken tossed in a spicy garlic and chili marinade." },
  { id: "nvs_7", name: "Chicken Kunppao", price: 270, category: "Non-Veg Starters", type: "non-veg", description: "Kung Pao style chicken tossed with peanuts and dried red chilies." },
  { id: "nvs_8", name: "Chicken Manchurian", price: 200, category: "Non-Veg Starters", type: "non-veg", description: "Fried chicken bites glazed in savory Manchurian gravy." },
  { id: "nvs_9", name: "Honey Chicken", price: 240, category: "Non-Veg Starters", type: "non-veg", description: "Crispy chicken strips coated in sweet honey chili glaze." },
  { id: "nvs_10", name: "Garlic Chicken", price: 240, category: "Non-Veg Starters", type: "non-veg", description: "Juicy chicken bits sautéed with loads of roasted garlic." },
  { id: "nvs_11", name: "Lemon Chicken", price: 250, category: "Non-Veg Starters", type: "non-veg", description: "Crispy chicken tossed in a refreshing tangy lemon sauce." },
  { id: "nvs_12", name: "Kaju Chicken", price: 250, category: "Non-Veg Starters", type: "non-veg", description: "Fried chicken stir-fried with crunchy roasted cashew nuts." },
  { id: "nvs_13", name: "Pepper chicken", price: 250, category: "Non-Veg Starters", type: "non-veg", description: "South Indian style chicken starter loaded with freshly cracked black pepper." },
  { id: "nvs_14", name: "Green Leaf Special Chicken", price: 300, category: "Non-Veg Starters", type: "non-veg", isPopular: true, description: "Green Leaf chef's secret special fried chicken preparation." },
  { id: "nvs_15", name: "Mutton Chukka", price: 320, category: "Non-Veg Starters", type: "non-veg", description: "Pan-roasted mutton fry coated in crushed spicy South Indian masala." },
  { id: "nvs_16", name: "Mutton Ghee Roast", price: 340, category: "Non-Veg Starters", type: "non-veg", description: "Tender mutton slow cooked in aromatic pure ghee and red chili paste." },
  { id: "nvs_17", name: "Mutton Kaju fry", price: 350, category: "Non-Veg Starters", type: "non-veg", description: "Crispy mutton pieces tossed with roasted cashew nuts." },
  { id: "nvs_18", name: "Mutton Pepper fry", price: 350, category: "Non-Veg Starters", type: "non-veg", description: "Tender mutton tossed with freshly ground pepper and curry leaves." }
];

// Chef's Picks specifically requested by the prompt
export const CHEFS_PICKS = [
  MENU_ITEMS.find(item => item.name === "Paneer Butter Masala"),
  MENU_ITEMS.find(item => item.name === "Kadai Paneer"),
  MENU_ITEMS.find(item => item.name === "Chicken Dum Biryani"),
  MENU_ITEMS.find(item => item.name === "Chicken 65"),
  MENU_ITEMS.find(item => item.name === "Mutton Fry Piece Biryani"),
  MENU_ITEMS.find(item => item.name === "Veg Manchurian"),
].filter(Boolean);
