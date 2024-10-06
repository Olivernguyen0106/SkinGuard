export const skinCancer = [
    {
        id: 5,
        label: "Melanoma",
        cause: "caused by DNA damage in skin cells, often due to ultraviolet (UV) radiation from sunlight or tanning beds. This damage can lead to mutations in the DNA of melanocytes, triggering abnormal cell growth.",
        effect: "Risk factors include UV radiation exposure, fair skin, numerous moles, and genetic predisposition",
        signs: [
            {id:1, content: 'A (Asymmetry): One half of the mole does not match the other.'},
            {id:2, content: 'B (Border): Irregular, ragged, or blurred edges.'},
            {id:3, content: 'C (Color): Multiple colors or an uneven distribution of color.'},
            {id:4, content: 'D (Diameter): Larger than 6mm (about the size of a pencil eraser).'},
            {id:5, content: 'E (Evolving): Changes in size, shape, or color over time.'}
        ],
        avoid: [
            {id:1, content: 'Limit Sun Exposure: Avoid excessive sun exposure, especially between 10 a.m. and 4 p.m.'},
            {id:2, content: 'Use Sunscreen: Apply a broad-spectrum sunscreen with at least SPF 30, and reapply every two hours.'},
            {id:3, content: 'Wear Protective Clothing: Use hats, sunglasses, and clothing that covers the skin.'}
        ],
      },
    {id: 2, label: "Benign Keratosis-Like Lesions",
        cause: "Primarily caused by factors such as aging, cumulative sun exposure, and genetic predisposition. Sun damage plays a significant role in the development of these lesions, especially in fair-skinned individuals.",
        effect: "They can cause discomfort if irritated, itchy, or if they catch on clothing. In rare cases, these lesions can become inflamed or infected, but they do not pose a health risk",
        signs: [
            {id:1, content: 'Appearance: Small, raised, and scaly patches that can range in color from light tan to dark brown or black.'},
            {id:2, content: 'Texture: They may feel rough, waxy, or wart-like.'},
            {id:3, content: 'Borders: Often have well-defined, sometimes irregular, edges.'},
            {id:4, content: 'Size: Can vary from a few millimeters to more than a centimeter in diameter.'}
        ],
        avoid: [
            {id:1, content: 'Protect Skin from UV Exposure: Use sunscreen with at least SPF 30 and wear protective clothing.'},
            {id:2, content: 'Avoid Tanning Beds: UV radiation from tanning beds can damage skin and promote lesion formation.'},
            {id:3, content: 'Maintain Skin Health: Use moisturizers to keep skin hydrated, as dry skin may contribute to lesion formation'}
        ],
    },
    {id: 1, label: "Basal Cell Carcinoma", 
        cause: "Primarily caused by long-term exposure to ultraviolet (UV) radiation from the sun or tanning beds. UV rays damage the DNA in skin cells, leading to abnormal growth of basal cells. Other risk factors include fair skin, a history of sunburns, genetic predisposition, exposure to radiation, and immune suppression",
        effect: "Basal Cell Carcinoma (BCC) primarily affects the skin and surrounding tissues. While it rarely spreads (metastasizes) to other parts of the body, it can cause significant local damage if left untreated. BCC can invade nearby skin, bones, and nerves, potentially leading to disfigurement, especially if it occurs near sensitive areas like the eyes, ears, or nose",
        signs: [
            {id:1, content: 'A pearly or waxy bump, often with visible blood vessels.'},
            {id:2, content: 'A flat, flesh-colored, or brown scar-like lesion.'},
            {id:3, content: 'A sore that bleeds, scabs, heals, and then reopens.'},
            {id:4, content: 'Red or pink growths with raised edges.'}
        ],
        avoid: [
            {id:1, content: 'Limit Sun Exposure: Avoid the sun between 10 a.m. and 4 p.m. when UV rays are strongest.'},
            {id:2, content: 'Use Sunscreen: Apply broad-spectrum sunscreen with an SPF of at least 30, even on cloudy days.'},
            {id:3, content: 'Wear Protective Clothing: Use hats, sunglasses, and clothing that covers exposed skin.'},
            {id:4, content:' Avoid Tanning Beds: UV radiation from tanning beds increases skin cancer risk.'}
        ],
    },
    {id: 0, label: "Actinic Keratoses", 
        cause: "Actinic Keratoses (AKs) are caused primarily by long-term exposure to ultraviolet (UV) radiation from the sun or tanning beds. UV rays damage the DNA in skin cells, leading to abnormal cell growth and the development of rough, scaly patches on the skin. People with fair skin, a history of sunburns, or a weakened immune system are at higher risk.",
        effect: "affect the skin, creating rough, scaly patches, usually on sun-exposed areas such as the face, ears, neck, scalp, and hands. While they are not cancerous, they indicate skin damage and have the potential to develop into squamous cell carcinoma if left untreated. AKs can cause discomfort, including itching, burning, or tenderness.",
        signs: [
            {id:1, content: 'Rough, scaly patches on the skin that can feel dry or like sandpaper.'},
            {id:2, content: 'Flat or slightly raised lesions, often less than an inch in diameter.'},
            {id:3, content: 'Color variations, including pink, red, brown, or flesh-colored.'},
            {ID:4, content: 'Lesions that may itch, burn, or become tender.'}
        ],
        avoid: [
            {id:1, content: 'Limit Sun Exposure: Avoid the sun between 10 a.m. and 4 p.m. when UV rays are strongest.'},
            {id:2, content: 'Use Sunscreen: Apply broad-spectrum sunscreen with an SPF of at least 30, even on cloudy days.'},
            {id:3, content: 'Wear Protective Clothing: Use hats, sunglasses, and clothing that covers exposed skin.'},
            {ID:4, content: 'Avoid Tanning Beds: UV radiation from tanning beds increases skin cancer risk.'}
        ],
    },
    {id : 6, label: "Vascular Lesions", 
        cause: "Caused by abnormalities in blood vessels, including congenital conditions, sun damage, injury, hormonal changes, or aging. These lesions can develop when blood vessels dilate or form improperly, leading to visible marks on the skin",
        effect: "lead to visible effects on the skin, including red, purple, or blue marks, which can vary in size and shape. Depending on the type and location, they might cause cosmetic concerns, discomfort, swelling, or a sensation of warmth. In some cases, such as with larger or deeper lesions, they can lead to complications like bleeding, ulceration, or interfere with normal function, especially if located near vital structures.",
        signs: [
            {id:1, content: 'Color: Red, purple, or blue marks on the skin.'},
            {id:2, content: 'Shape: Spots, patches, or clusters of veins'},
            {id:3, content: 'Texture: May be flat or raised, sometimes warm to the touch.'},
            {id:4, content: 'Size: Can range from small dots to large patches.'},
            {id:5, content: 'Symptoms: Some vascular lesions may cause discomfort, pain, or swelling.'}
        ],
        avoid: [
            {id:1, content: 'Limit Sun Exposure: Avoid the sun between 10 a.m. and 4 p.m. when UV rays are strongest.'},
            {id:2, content: 'Avoid Extreme Temperatures: Limit exposure to hot water, saunas, and extreme cold to protect blood vessels.'},
            {id:3, content: 'Wear Compression Stockings: If prone to varicose veins, wear compression stockings to improve blood flow.'},
            {ID:4, content: 'Limit Alcohol Consumption: Excessive alcohol can cause blood vessels to dilate.'}
        ],
    },
    {id: 3, label: "Dermatofibroma", 
        cause: "It often develops as a reaction to minor skin injuries, such as insect bites, trauma, or a thorn prick. It is a benign skin growth resulting from an overgrowth of fibrous tissue in the dermis",
        effect: " While typically harmless, they can cause discomfort, itching, or tenderness, especially if located in areas prone to friction. They do not pose a health risk or spread to other parts of the body. ",
        signs: [
            {id:1, content: 'A small, firm, raised nodule on the skin, usually less than 1 cm in diameter.'},
            {id:2, content: 'Colors ranging from pink to brown or reddish-brown.'},
            {id:3, content: 'The surface is smooth, but the lesion feels hard to the touch.'},
            {id:4, content: 'Often painless but may be itchy or tender, especially when pressed or irritated.'}
        ],
        avoid: [
            {id:1, content: 'Minimizing skin injuries, such as avoiding insect bites, using proper protection during outdoor activities,'},
            {id:2, content: 'Treating minor skin trauma promptly'},
        ],
    },
    {id: 4, label: "Melanocytic Nevi", 
        cause: "Primarily caused by the proliferation of melanocytes, the cells responsible for producing pigment in the skin. This can occur due to a combination of genetic factors and sun exposure, especially in childhood. Hormonal changes during puberty or pregnancy can also stimulate the formation of new nevi or changes in existing ones.",
        effect: "Melanocytic nevi (moles) are usually benign and have little effect on the body. However, they can sometimes change in size, color, or shape, which may indicate an increased risk of melanoma. Most moles do not cause health problems, but they can become irritated, especially if located in areas subject to friction.",
        signs: [
            {id:1, content: 'Round or oval-shaped spots on the skin.'},
            {id:2, content: 'Varying colors, typically tan, brown, black, or flesh-colored.'},
            {id:3, content: 'Defined borders and a smooth surface.'},
            {id:4, content: 'Can be flat or raised and range in size.'}
        ],
        avoid: [
            {id:1, content: 'Limit Sun Exposure: Use sunscreen with at least SPF 30 and wear protective clothing.'},
            {id:2, content: 'Avoid Tanning Beds: UV radiation can trigger the development of new moles.'},
            {id:3, content: 'Use Sunscreen: Apply broad-spectrum sunscreen with an SPF of at least 30, even on cloudy days.'},
            {id:4, content: 'Wear Protective Clothing: Use hats, sunglasses, and clothing that covers exposed skin.'},

        ],
    },
]