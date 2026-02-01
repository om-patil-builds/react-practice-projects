import jsPDF from "jspdf";
import "jspdf-autotable";

const generateOrderPDF = ({ storeInfo, customer, cart, total }) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text(storeInfo.name, 14, 20);

  doc.setFontSize(11);
  doc.text(`Phone: ${storeInfo.phone}`, 14, 28);
  doc.text(`Address: ${storeInfo.address}`, 14, 34);

  // Line
  doc.line(14, 38, 196, 38);

  // Customer Info
  doc.setFontSize(13);
  doc.text("Customer Details", 14, 48);

  doc.setFontSize(11);
  doc.text(`Name: ${customer.name}`, 14, 56);
  doc.text(`Mobile: ${customer.phone}`, 14, 62);
  doc.text(`Village: ${customer.village}`, 14, 68);

  // Table Data
  const tableData = cart.map((item, index) => [
    index + 1,
    item.name,
    item.cartQty,
    `₹${item.price}`,
    `₹${item.price * item.cartQty}`,
  ]);

  doc.autoTable({
    startY: 78,
    head: [["#", "Product", "Qty", "Price", "Total"]],
    body: tableData,
  });

  // Total
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(14);
  doc.text(`Grand Total: ₹${total}`, 14, finalY);

  // Footer
  doc.setFontSize(10);
  doc.text(
    "Thank you for shopping with us!",
    14,
    finalY + 10
  );

  // Download
  doc.save("KrushiKendra_Order.pdf");
};

export default generateOrderPDF;
