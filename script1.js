const crafts = {
  block: {
    title: "Block Printing – Bagru, Rajasthan",
    description: `
      In Bagru, Rajasthan, artisans carve motifs into teakwood blocks using chisels.
      Natural dyes from turmeric, indigo, and pomegranate are mixed in earthen pots.
      Cotton fabric is laid flat, and each block is pressed with rhythmic precision.
      Multiple layers are printed separately, requiring perfect alignment.
      The final fabric is sun-dried and ironed before sale.
      Block printing is not just a technique — it’s a language of heritage, spoken through patterns and pigments.
    `,
  },
  wood: {
    title: "Woodworking – Gujarat",
    description: `
      Craftsmen in Gujarat shape teak and rosewood using hand planes and chisels.
      Wood is dried for weeks to prevent cracking.
      Designs are sketched and carved, then polished with neem oil.
      Finished items include doors, panels, and furniture.
      Each piece reflects devotion and tradition.
    `,
  },
  embroidery: {
    title: "Embroidery – Kutch, Gujarat",
    description: `
      In Kutch, embroidery is storytelling through thread.
      Women stretch cotton or silk over frames and stitch motifs by hand.
      Threads are dyed with natural pigments.
      Mirrors and beads are added for sparkle.
      Final pieces are used in garments and wall hangings.
    `,
  },
  basket: {
    title: "Basket Weaving – Assam",
    description: `
      Bamboo from Assam is soaked and split into strips.
      Weaving begins from the center, spiraling outward.
      Patterns are formed by alternating strip thickness.
      Finished baskets are sun-dried and used for storage or rituals.
    `,
  },
  jewelry: {
    title: "Jewelry Making – Tamil Nadu",
    description: `
      Gold from Tamil Nadu is melted in clay crucibles.
      Artisans shape it using hammers and files.
      Designs reflect temple architecture and nature.
      Stones are set using wax molds and fine tools.
      Jewelry here is worn not just for beauty, but for blessings.
    `,
  },
  leather: {
    title: "Leather Crafting – Rajasthan",
    description: `
      Leather from Rajasthan is vegetable-tanned and cut with metal stencils.
      Holes are punched with chisels and stitched by hand.
      Embossing is done with heated stamps.
      Items are polished with mustard oil and dried in shade.
    `,
  },
  metal: {
    title: "Metalwork – Odisha",
    description: `
      Copper and brass from Odisha are shaped into vessels.
      Designs are drawn with chalk and engraved using chisels.
      Polishing is done with tamarind and ash.
      These items are used in rituals and festivals.
    `,
  },
  pottery: {
    title: "Pottery Painting – Telangana",
    description: `
      Clay from Telangana is kneaded and wheel-thrown.
      Natural pigments from turmeric and charcoal are used for painting.
      Brushes made from coconut fiber apply floral designs.
      Pots are fired in open kilns and cooled slowly.
    `,
  },
};

function showDetails(key) {
  const craft = crafts[key];
  const content = `
    <h2>${craft.title}</h2>
    <p>${craft.description.replace(/\n/g, "<br>")}</p>
  `;
  document.getElementById("details-content").innerHTML = content;
  document.getElementById("details").classList.remove("hidden");
}
