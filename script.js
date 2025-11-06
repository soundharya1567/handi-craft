const crafts = {
  block: {
    title: "Block Printing – Bagru, Rajasthan",
    description: `
      In Bagru, Rajasthan, artisans carve motifs into teakwood blocks using chisels.
      Natural dyes from turmeric, indigo, and pomegranate are mixed in earthen pots.
      Cotton fabric is laid flat, and each block is pressed with rhythmic precision.
    `,
  },
  wood: {
    title: "Woodworking – Gujarat",
    description: `
      Craftsmen in Gujarat shape teak and rosewood using hand planes and chisels.
      Designs are sketched and carved, then polished with neem oil.
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
