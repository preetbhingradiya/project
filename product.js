const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

let products = [
  {
    id: 1,
    title: "Himalaya Erina-Ep Powder 150 gm",
    description: "Mkt: Himalaya Wellness Company",
    price: 196.0,
    discountPercentage: 218.0,
    brand: "Veterinary",
    category: "Petcare",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/844107/himalaya_erina_ep_powder_150_gm_0.jpg",
  },
  {
    id: 2,
    title: "Himalaya Himcal Pet 200 ml",
    description: "Mkt: Himalaya Wellness Company",
    price: 135,
    discountPercentage: 150,
    brand: "Veterinary",
    category: "Petcare",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/844110/himalaya_himcal_pet_200_ml_0.jpg",
  },
  {
    id: 3,
    title: "Himalaya Anxocare Vet Tablets 60's",
    description: "Mkt: Himalaya Wellness Company",
    price: 157.5,
    discountPercentage: 175,
    brand: "Veterinary",
    category: "Petcare",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/844103/himalaya_anxocare_vet_tablets_60_s_0.jpg",
  },
  {
    id: 4,
    title: "Himalaya Furglow Oral Coat Conditioner 200 ml",
    description: "Mkt: Himalaya Wellness Company",
    price: 288,
    discountPercentage: 320.0,
    brand: "Veterinary",
    category: "Petcare",
    thumbnail:
      "	https://www.netmeds.com/images/product-v1/150x150/844099/himalaya_furglow_oral_coat_conditioner_200_ml_0.jpg",
  },
  {
    id: 5,
    title: "Dr. Reckeweg R41 Fortivirone Drops 22 ml",
    description: "Mkt: Dr. Roshanlal Aggarwal & Sons P. Ltd",
    price: 299.5,
    discountPercentage: 270.0,
    brand: "Ayush",
    category: "Homeopathy",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/826106/dr_reckeweg_r41_fortivirone_drops_22_ml_0.jpg",
  },
  {
    id: 6,
    title: "Dr. Reckeweg Calcarea Phosphorica 6X Tablet 20 gm",
    description: "Mkt: Dr. Roshanlal Aggarwal & Sons P. Ltd",
    price: 157.5,
    discountPercentage: 185,
    brand: "Ayush",
    category: "Homeopathy",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/826188/dr_reckeweg_calcarea_phosphorica_6x_tablet_20_gm_0.jpg",
  },
  {
    id: 7,
    title: "SBL CLEARSTONE DROPS 30ML",
    description: "Mkt: Dr. Roshanlal Aggarwal & Sons P. Ltd",
    price: 131.75,
    discountPercentage: 155.0,
    brand: "Ayush",
    category: "Homeopathy",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/821958/sbl_clearstone_drops_30ml_0.jpg",
  },
  {
    id: 8,
    title: "Hapdco Aqui Plus Cream 25 gm",
    description: "Mkt: Dr. Roshanlal Aggarwal & Sons P. Ltd",
    price: 99,
    discountPercentage: 110.0,
    brand: "Ayush",
    category: "Homeopathy",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/831707/hapdco_aqui_plus_cream_25_gm_0.jpg",
  },
  {
    id: 9,
    title: "Himrop Vet Liquid 1 litre",
    description: "Mkt: Himalaya Wellness Company",
    price: 234,
    discountPercentage: 260.0,
    brand: "Veterinary",
    category: "Farm Animals",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/1099072/himrop_vet_liquid_1_litre_585335_0_2.jpg",
  },
  {
    id: 10,
    title: "Himrop Plus Vet Liquid 1 litre",
    description: "Mkt: Himalaya Wellness Company",
    price: 292.5,
    discountPercentage: 325.0,
    brand: "Veterinary",
    category: "Farm Animals",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/1099065/subclin_feed_supplement_250_gm_585330_0_3.jpg",
  },
  {
    id: 11,
    title: "Vet Mankind Mastafast Powder - Pineapple 50 gm",
    description: "Mkt: Vet Mankind",
    price: 76,
    discountPercentage: 90.0,
    brand: "Veterinary",
    category: "Farm Animals",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/1098990/vet_mankind_mastafast_powder_pineapple_50_gm_583179_0_0.jpg",
  },
  {
    id: 12,
    title: "Vet Mankind Calcimust Strong RF Liquid 1 litre",
    description: "Mkt: Vet Mankind",
    price: 148.2,
    discountPercentage: 190.0,
    brand: "Veterinary",
    category: "Farm Animals",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/1098075/vet_mankind_calcimust_strong_rf_liquid_1_litre_583145_0_0.jpg",
  },
  {
    id: 13,
    title: "Dabur Pudin Hara Pearls Capsule 10's",
    description: "Mkt: Dabur India Ltd",
    price: 28,
    discountPercentage: 30.2,
    brand: "Ayush",
    category: "Ayurvedic",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/15917/dabur_pudin_hara_pearls_capsule_10_s_0.jpg",
  },
  {
    id: 14,
    title: "Himalaya Liv.52 Tablet 100's",
    description: "Mkt: The Himalaya Drug Company",
    price: 124.5,
    discountPercentage: 150.6,
    brand: "Ayush",
    category: "Ayurvedic",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/341494/liv_52_tablet_100_s_0.jpg",
  },
  {
    id: 15,
    title: "Galact Granules - Elaichi Flavour 200gm",
    description: "Mkt: The Himalaya Drug Company",
    price: 336.8,
    discountPercentage: 420,
    brand: "Ayush",
    category: "Ayurvedic",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/390287/galact_granules_200gm_0.jpg",
  },
  {
    id: 16,
    title: "Himalaya Confido Tablet 60's",
    description: "Mkt: The Himalaya Drug Company",
    price: 144.5,
    discountPercentage: 170,
    brand: "Ayush",
    category: "Ayurvedic",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/303384/confido_tablet_60_s_0.jpg",
  },
  {
    id: 17,
    title: "Revital H Capsule 10'S",
    description: "Mkt: Sun Pharmaceutical Industries Ltd",
    price: 91,
    discountPercentage: 110,
    brand: "Fitness",
    category: "Family Nutrition",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/113742/revital_h_capsule_10s_37290_0_1.jpg",
  },
  {
    id: 18,
    title: "Oil Free Moisturizer 100ml",
    description: "Mkt: Sun Pharmaceutical Industries Ltd",
    price: 298.23,
    discountPercentage: 236,
    brand: "Fitness",
    category: "Family Nutrition",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg",
  },
  {
    id: 19,
    title: "Softovac Powder 100gm",
    description: "Mkt: Lupin Ltd",
    price: 166.5,
    discountPercentage: 185,
    brand: "Fitness",
    category: "Family Nutrition",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/354963/softovac_powder_100gm_0.jpg",
  },
  {
    id: 20,
    title: "Softovac SF Sugar Free Powder 100gm",
    description: "Mkt: Lupin Ltd",
    price: 184,
    discountPercentage: 205,
    brand: "Fitness",
    category: "Family Nutrition",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/354472/softovac_sf_powder_100gm_0.jpg",
  },
  {
    id: 21,
    title: "Nestle Nan Pro 1 (Upto 6 Months) Powder 400 gm (Refill Pack)",
    description: "Mkt: Nestle India Ltd",
    price: 785,
    discountPercentage: 990,
    brand: "Mom & Baby",
    category: "Baby Care",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/13454/nestle_nan_pro_1_upto_6_months_powder_400_gm_refill_pack_106712_0_1.jpg",
  },
  {
    id: 22,
    title:
      "Nestle Lactogen Stage 1 (Upto 6 Months) Powder 400 gm (Refill Pack)",
    description: "Mkt: Nestle India Ltd",
    price: 440,
    discountPercentage: 500.5,
    brand: "Mom & Baby",
    category: "Baby Care",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/13449/nestle_lactogen_stage_1_upto_6_months_powder_400_gm_refill_pack_32219_0_2.jpg",
  },
  {
    id: 23,
    title: "Nestle Lactogen Stage 2 (6 Months+) Powder 400 gm (Refill Pack)",
    description: "Mkt: Nestle India Ltd",
    price: 312.75,
    discountPercentage: 324,
    brand: "Mom & Baby",
    category: "Baby Care",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/13470/nestle_cerelac_stage_4_12_months_powder_300_gm_multigrain_fruits_refill_pack_32238_0_1.jpg",
  },
  {
    id: 24,
    title: "Nestle Nan Excella Pro 2 (6 Months+) Powder 400 gm (Refill Pack)",
    description: "Mkt: Nestle India Ltd",
    price: 899,
    discountPercentage: 920,
    brand: "Mom & Baby",
    category: "Baby Care",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/410889/nestle_nan_excella_pro_2_6_months_powder_400_gm_refill_pack_0_0.jpg",
  },
  {
    id: 25,
    title: "COQ LC Tablet 10'S",
    description: "Mkt: Universal Nutriscience Private Limited",
    price: 790.48,
    discountPercentage: 964,
    brand: "Fitness",
    category: "Vitamins And Supplements",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/412011/coq_lc_tablet_10s_53524_0_2.jpg",
  },
  {
    id: 26,
    title: "COQ 300mg Softgel 15'S",
    description: "Mkt: Universal Nutriscience Private Limited",
    price: 1488.3,
    discountPercentage: 1815.0,
    brand: "Fitness",
    category: "Vitamins And Supplements",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/409597/coq_300mg_softgel_15_s_0.jpg",
  },
  {
    id: 27,
    title: "COQ 30mg Capsule 10'S",
    description: "Mkt: Universal Nutriscience Private Limited",
    price: 355.54,
    discountPercentage: 433,
    brand: "Fitness",
    category: "Vitamins And Supplements",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/325547/coq_30mg_capsule_10s_39957_0_1.jpg",
  },
  {
    id: 28,
    title: "Ostocalcium Plus Chewable Tablet 30's",
    description: "Mkt: Gsk",
    price: 167.31,
    discountPercentage: 194.84,
    brand: "Fitness",
    category: "Vitamins And Supplements",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/851151/ostocalcium_plus_chewable_tablet_30s_588028_0_1.jpg",
  },
  {
    id: 29,
    title: "Whisper Choice Ultra Sanitary Pads (XL) 6's",
    description: "Mkt: Procter & Gamble",
    price: 45.6,
    discountPercentage: 48,
    brand: "Mom & Baby",
    category: "Feminine Hygiene",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/15041/whisper_choice_ultra_sanitary_pads_xl_6_s_0.jpg",
  },
  {
    id: 30,
    title: "Stayfree Secure Cottony with Wings Sanitary Pads (XL) 6's",
    description: "Mkt: Johnson & Johnson Pvt Ltd",
    price: 36.4,
    discountPercentage: 40.0,
    brand: "Mom & Baby",
    category: "Feminine Hygiene",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/801428/stayfree_secure_cottony_with_wings_sanitary_pads_xl_6s_56490_0_1.jpg",
  },
  {
    id: 31,
    title: "Whisper Choice Wings Sanitary Pad 20's",
    description: "Mkt: Procter & Gamble",
    price: 93.06,
    discountPercentage: 99,
    brand: "Mom & Baby",
    category: "Feminine Hygiene",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/412464/whisper_choice_wings_sanitary_pad_20s_0_1.jpg",
  },
  {
    id: 32,
    title: "Stayfree Secure Cottony Soft 20's",
    description: "Mkt: Johnson & Johnson Pvt Ltd",
    price: 85.5,
    discountPercentage: 90,
    brand: "Mom & Baby",
    category: "Feminine Hygiene",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/100405/stayfree_secure_cottony_soft_20_s_0.jpg",
  },
  {
    id: 33,
    title: "Gizmoswala Magic Vibrator Massager - Pink",
    description: "Mkt: NM Gadlawala Ventures Private Ltd.",
    price: 4037.5,
    discountPercentage: 4700,
    brand: "Sexual Wellness",
    category: "Massagers/Vibrators",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/962422/gizmoswala_magic_vibrator_massager_pink_1s_0_0.jpg",
  },
  {
    id: 34,
    title: "Gizmoswala Happy Bunny Rabbit Vibrator Massager - Pink",
    description: "Mkt: NM Gadlawala Ventures Private Ltd.",
    price: 4122.5,
    discountPercentage: 4850.5,
    brand: "Sexual Wellness",
    category: "Massagers/Vibrators",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/962421/gizmoswala_happy_bunny_rabbit_vibrator_massager_pink_1s_0_0.jpg",
  },
  {
    id: 35,
    title:
      "So Sweet 100% Natural Sugarfree Sweetener Stevia Liquid (Pack of 10) 1000 Drops 50 ml",
    description: "Mkt: Herboveda India",
    price: 412.5,
    discountPercentage: 550,
    brand: "Treatments",
    category: "Diabetes Care",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/828506/so_sweet_100_natural_sugarfree_sweetener_stevia_liquid_pack_of_10_1000_drops_50_ml_0_1.jpg",
  },
  {
    id: 36,
    title: "So Sweet 100% Natural Sugarfree Sweetener Spoonable Powder 200 gm",
    description: "Mkt: Herboveda India",
    price: 240,
    discountPercentage: 320,
    brand: "Treatments",
    category: "Diabetes Care",
    thumbnail:
      "https://www.netmeds.com/images/product-v1/150x150/828488/so_sweet_100_natural_sugarfree_sweetener_spoonable_powder_200_gm_0.jpg",
  },
];

const product = (data) => {
  // let store = JSON.parse(localStorage.getItem("cart-add")) || [];

  document.querySelector(".main").innerHTML = "";

  data.map((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "page");

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "pro-img");
    let img = document.createElement("img");
    img.src = ele.thumbnail;
    imgdiv.append(img);

    let title = document.createElement("h4");
    title.innerHTML = ele.title;

    let catdiv = document.createElement("div");
    catdiv.setAttribute("class", "categories");
    let cat1 = document.createElement("a");
    cat1.innerHTML = ele.brand;
    cat1.setAttribute("class", "brand");
    let cat2 = document.createElement("a");
    cat2.innerHTML = ele.category;
    cat2.setAttribute("class", "cate");
    catdiv.append(cat1, cat2);

    let span = document.createElement("span");
    span.innerHTML = ele.description;

    let pridiv = document.createElement("div");
    pridiv.setAttribute("class", "price");
    let span1 = document.createElement("span");
    span1.innerHTML = "Best price* ";
    span1.setAttribute("class", "best-pri");
    let span2 = document.createElement("span");
    span2.innerHTML = `Rs.${ele.price}`;
    span2.setAttribute("class", "sec-pri");
    pridiv.append(span1, span2);

    let prdiv = document.createElement("div");
    prdiv.setAttribute("class", "price-2");
    let span3 = document.createElement("span");
    span3.innerHTML = "MRP";
    span3.setAttribute("class", "best-pri-2");
    let span4 = document.createElement("span");
    span4.innerHTML = `DiscountRs.${ele.discountPercentage}`;
    span4.setAttribute("class", "sec-pri-2");
    prdiv.append(span3, span4);

    div.append(imgdiv, title, catdiv, span, pridiv, prdiv);
    document.querySelector(".main").append(div);


    let store = JSON.parse(localStorage.getItem("cart-add")) || [];
    let exit = false;
      store.map((val) => {
        if (ele.id == val.id) {
          exit = true;
          let qtydiv = document.createElement("div");
          qtydiv.setAttribute("class", "set");
          let incre = document.createElement("button");
          incre.innerHTML = "+";
          incre.setAttribute("class", "incre");
          let quntity = document.createElement("p");
          quntity.innerHTML = val.qty;
          quntity.setAttribute("class", "qty");
          let desc = document.createElement("button");
          desc.innerHTML = "-";
          desc.setAttribute("class", "desc");
          qtydiv.append(desc, quntity, incre);
          div.append(qtydiv);
   
          incre.addEventListener("click", () => {
            let store = JSON.parse(localStorage.getItem("cart-add")) || [];

            store.map((val, index) => {
              if (val.id == ele.id) {
                store[index].qty += 1;
                quntity.innerHTML = val.qty;
                localStorage.setItem("cart-add", JSON.stringify(store));
              }
            });
          });

          desc.addEventListener("click", () => {
            let store = JSON.parse(localStorage.getItem("cart-add")) || [];

            store.map((val, index) => {
              if (val.id == ele.id) {
                store[index].qty -= 1;
                quntity.innerHTML = val.qty;
                localStorage.setItem("cart-add", JSON.stringify(store));
              }
            });
            if(quntity.innerHTML==0){
              qtydiv.remove()
              let adddiv = document.createElement("div");
              adddiv.setAttribute("class", "add-btn");
              let btn = document.createElement("button");
              btn.innerHTML = "ADD TO CART";
              btn.setAttribute("class", "add-cart");
              adddiv.append(btn);
              div.append(adddiv);
              localStorage.setItem("cart-add", JSON.stringify(store));

            }
          });
        } 
      });
      if(!exit) {
        let adddiv = document.createElement("div");
        adddiv.setAttribute("class", "add-btn");
        let btn = document.createElement("button");
        btn.innerHTML = "ADD TO CART";
        btn.setAttribute("class", "add-cart");
        adddiv.append(btn);
        div.append(adddiv);

        btn.addEventListener("click", () => {
          let store = JSON.parse(localStorage.getItem("cart-add")) || [];
          let exit = false;

          store.map((temp) => {
            if (temp.id == ele.id) {
              localStorage.setItem("cart-add", JSON.stringify(store));
              exit = true;
            }
          });
          if (!exit) {
            store.push({ ...ele, qty: 1 });
            localStorage.setItem("cart-add", JSON.stringify(store));
            alert("ADD TO CART");
          }
        });
      }
  });
};
product(products);

const filter = () => {
  document.getElementById("Petcare").addEventListener("click", () => {
    let store = products.filter((val) => val.category == "Petcare");
    product(store);
  });

  document.getElementById("Animals").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Farm Animals");
    product(store);
  });

  document.getElementById("Homeopathy").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Homeopathy");
    product(store);
  });

  document.getElementById("Ayurvedic").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Ayurvedic");
    product(store);
  });

  document.getElementById("Vitamins").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter(
      (val) => val.category == "Vitamins And Supplements"
    );
    product(store);
  });

  document.getElementById("Family").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Family Nutrition");
    product(store);
  });

  document.getElementById("baby").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Baby Care");
    product(store);
  });

  document.getElementById("feminine").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Feminine Hygiene");
    product(store);
  });

  document.getElementById("mess").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Massagers/Vibrators");
    product(store);
  });

  document.getElementById("care").addEventListener("click", (e) => {
    e.preventDefault();
    let store = products.filter((val) => val.category == "Diabetes Care");
    product(store);
  });
};
filter();

const sort = () => {
  document.querySelector(".high").addEventListener("click", (e) => {
    products.sort((a, b) => b.price - a.price);
    product(products);
  });

  document.querySelector(".low").addEventListener("click", (e) => {
    products.sort((a, b) => a.price - b.price);
    product(products);
  });
};
sort();

const brand = () => {
  document.getElementById("hadpaco").addEventListener("click", () => {
    let temp = products.filter((vel) => vel.title.includes("Hapdco"));
    product(temp);
  });

  document.getElementById("reckeweg").addEventListener("click", () => {
    let temp = products.filter((vel) => vel.title.includes("Reckeweg"));
    product(temp);
  });

  document.getElementById("nestle").addEventListener("click", () => {
    let temp = products.filter((vel) => vel.title.includes("Nestle"));
    product(temp);
  });

  document.getElementById("himalaya").addEventListener("click", () => {
    let temp = products.filter((vel) => vel.title.includes("Himalaya"));
    product(temp);
  });

  document.getElementById("stayfree").addEventListener("click", () => {
    let temp = products.filter((vel) => vel.title.includes("Whisper"));
    product(temp);
  });

  document.getElementById("coq").addEventListener("click", () => {
    let temp = products.filter((vel) => vel.title.includes("COQ"));
    product(temp);
  });
};
brand();
