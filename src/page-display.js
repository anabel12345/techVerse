let height;
let width;
// change height of page based on the number of array elements
function resizePage(scaleFactorWidth, scaleFactorHeight, doc, minWidth, minHeight) {
  const document = doc;
  width = scaleFactorWidth * window.innerWidth;
  height = scaleFactorHeight * window.innerHeight;
  if (width < minWidth) {
    width = minWidth;
  }
  if (height < minHeight) {
    height = minHeight;
  }
  document.style.height = `${height}px`;
  document.style.width = `${width}px`;
}

// center the page
function centerPage() {
  window.scrollTo((width - window.innerWidth) / 2, (height - window.innerHeight) / 2);
}

// make page draggable
function draggable(doc) {
  let clicked = false; let
    clickY; let
    clickX;
  doc.addEventListener('mousemove', (e) => {
    if (clicked) {
      window.scrollTo(window.scrollX + (clickX - e.pageX), window.scrollY + (clickY - e.pageY));
    }
  });
  doc.addEventListener('mousedown', (e) => {
    clicked = true;
    clickY = e.pageY;
    clickX = e.pageX;
  });
  doc.addEventListener('mouseout', () => {
    clicked = false;
  });
  doc.addEventListener('mouseup', () => {
    clicked = false;
  });
}

export { resizePage, centerPage, draggable };
