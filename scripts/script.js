const products = [
  {
    name: "Dell VOSTRO 3510-A",
    imageSrc: "./Assets/images/1.jpg",
    videoSrc: "./Assets/videos/1.mp4",
    cpu: "Core i7",
    ramSize: "16 گیگابایت",
    ramType: "DDR4",
    screenSize: "15.6 اینچ",
    screenResolution: "Full HD",
    graphicVendor: "NVIDIA",
  },
  {
    name: "Asus VivoBook Pro K3400PH-KM041",
    imageSrc: "./Assets/images/2.jpg",
    videoSrc: "./Assets/videos/2.mp4",
    cpu: "Core i5",
    ramSize: "8 گیگابایت",
    ramType: "DDR4",
    screenSize: "14 اینچ",
    screenResolution: "Full HD",
    graphicVendor: "NVIDIA",
  },
  {
    name: "Asus TUF Gaming F17 FX706HE-AA",
    imageSrc: "./Assets/images/3.jpg",
    videoSrc: "./Assets/videos/3.mp4",
    cpu: "Core i5",
    ramSize: "16 گیگابایت",
    ramType: "DDR4",
    screenSize: "17.3 اینچ",
    screenResolution: "Full HD",
    graphicVendor: "NVIDIA",
  },
  {
    name: "Lenovo IdeaPad Gaming 3-LE",
    imageSrc: "./Assets/images/4.jpg",
    videoSrc: "./Assets/videos/4.mp4",
    cpu: "Core i5",
    ramSize: "16 گیگابایت",
    ramType: "DDR4",
    screenSize: "15.6 اینچ",
    screenResolution: "Full HD",
    graphicVendor: "NVIDIA",
  },
  {
    name: "Acer Aspire5 a514-54",
    imageSrc: "./Assets/images/5.jpg",
    videoSrc: "./Assets/videos/5.mp4",
    cpu: "Core i5",
    ramSize: "8 گیگابایت",
    ramType: "DDR4",
    screenSize: "14 اینچ",
    screenResolution: "Full HD",
    graphicVendor: "NVIDIA",
  },
  {
    name: "Asus TUF Dash F15 FX516PM-AD",
    imageSrc: "./Assets/images/6.jpg",
    videoSrc: "./Assets/videos/6.mp4",
    cpu: "Core i7",
    ramSize: "24 گیگابایت",
    ramType: "DDR4",
    screenSize: "15.6 اینچ",
    screenResolution: "Full HD",
    graphicVendor: "NVIDIA",
  },
  {
    name: "Lenovo IdeaPad 1 - A",
    imageSrc: "./Assets/images/7.jpg",
    videoSrc: "./Assets/videos/7.mp4",
    cpu: "Celeron",
    ramSize: "4 گیگابایت",
    ramType: "DDR4",
    screenSize: "11.6 اینچ",
    screenResolution: "HD",
    graphicVendor: "Intel",
  },
  {
    name: "Lenovo V15 IGL",
    imageSrc: "./Assets/images/8.jpg",
    videoSrc: "./Assets/videos/8.mp4",
    cpu: "Celeron",
    ramSize: "4 گیگابایت",
    ramType: "DDR4",
    screenSize: "15.6 اینچ",
    screenResolution: "HD",
    graphicVendor: "Intel",
  },
];

const productTable = document.getElementById("product-table");
const videoTitle = document.getElementById("video-title");
const videoDiv = document.getElementById("video-box");
const filterBtn = document.getElementById("filter-btn");

for (const product of products) {
  const trElement = document.createElement("tr");
  trElement.setAttribute("data-name", product.name); // Add custom attribute
  trElement.className = "m-t-16";

  const tdElement1 = document.createElement("td");
  tdElement1.innerText = product.name;
  trElement.append(tdElement1);

  const tdElement2 = document.createElement("td");
  tdElement2.classList = "w-20";

  const imgElement = document.createElement("img");
  imgElement.src = product.imageSrc;
  imgElement.classList = "w-50";

  tdElement2.append(imgElement);
  trElement.append(tdElement2);

  const tdElement3 = document.createElement("td");
  tdElement3.innerText = product.cpu;
  trElement.append(tdElement3);

  const tdElement4 = document.createElement("td");
  tdElement4.innerText = product.ramSize;
  trElement.append(tdElement4);

  const tdElement5 = document.createElement("td");
  tdElement5.innerText = product.ramType;
  trElement.append(tdElement5);

  const tdElement6 = document.createElement("td");
  tdElement6.innerText = product.graphicVendor;
  trElement.append(tdElement6);

  const tdElement7 = document.createElement("td");
  tdElement7.innerText = product.screenSize;
  trElement.append(tdElement7);

  const tdElement8 = document.createElement("td");
  tdElement8.innerText = product.screenResolution;
  trElement.append(tdElement8);

  trElement.setAttribute(
    "onclick",
    `switchVideo('${product.name}', '${product.videoSrc}')`
  );

  productTable.querySelector("tbody").append(trElement);
}

function switchVideo(name, videoSource) {
  const rows = document.querySelectorAll("tr");
  rows.forEach((row) => (row.className = "m-t-16"));
  event.target.parentElement.className = "m-t-16 selected";
  videoDiv.innerHTML = "";
  videoTitle.innerText = `ویدیوی معرفی ${name}`;

  const videoElement = document.createElement("video");
  videoElement.className = "w-100";
  videoElement.controls = true;
  videoElement.autoplay = true;
  videoElement.src = videoSource;

  videoDiv.append(videoElement);
  window.scrollTo(0, 0);
}

// Filter products based on selected options
filterBtn.addEventListener("click", () => {
  const cpuFilter = document.getElementById("cpu-filter").value;
  const ramSizeFilter = document.getElementById("ram-size-filter").value;
  const ramTypeFilter = document.getElementById("ram-type-filter").value;
  const screenSizeFilter = document.getElementById("screen-size-filter").value;
  const screenResolutionFilter = document.getElementById(
    "screen-resolution-filter"
  ).value;

  const rows = document.querySelectorAll("tr[data-name]");
  rows.forEach((row) => (row.style.display = "none"));

  for (const product of products) {
    const trElement = productTable.querySelector(
      `tr[data-name="${product.name}"]`
    );
    const cpuMatch = cpuFilter === "" || product.cpu === cpuFilter;
    const ramSizeMatch =
      ramSizeFilter === "" || product.ramSize === ramSizeFilter;
    const ramTypeMatch =
      ramTypeFilter === "" || product.ramType === ramTypeFilter;
    const screenSizeMatch =
      screenSizeFilter === "" || product.screenSize === screenSizeFilter;
    const screenResolutionMatch =
      screenResolutionFilter === "" ||
      product.screenResolution === screenResolutionFilter;

    if (
      cpuMatch &&
      ramSizeMatch &&
      ramTypeMatch &&
      screenSizeMatch &&
      screenResolutionMatch
    ) {
      trElement.style.display = "";
    }
  }
});
