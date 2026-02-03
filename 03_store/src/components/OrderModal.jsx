import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { X } from "lucide-react";

const OrderModal = ({
  cart,
  cartTotal,
  totalItems,
  handleOrderSubmit,
  setShowOrderModal,
  handleDownloadPDF
  showOrderModal,
}) => {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    village: "",
  });

  const handleDownloadPDF = () => {
    const element = document.getElementById("invoice");
    if (!element) return;

    // Temporarily show the div
    element.style.display = "block";

    const opt = {
      margin: [10, 0, 10, 0],
      filename: `${customer.name || "Invoice"}_Invoice.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        element.style.display = "none";
      });
  };

  return (
    <div className="fixed z-100 inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md h-screen w-screen">
      {/* Customer Info Inputs */}
     <div className="bg-white p-8 relative h-auto w-full md:w-[50vw] flex flex-col gap-4 md:w-80 rounded-2xl">
        <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Customer Name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          required
        />

        <input
          type="text"
          placeholder="Village Name"
          value={customer.village}
          onChange={(e) =>
            setCustomer({ ...customer, village: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
          required
        />
      </div>

      <button
        type="button"
        onClick={handleDownloadPDF}
        disabled={!customer.name || cart.length === 0}
        className="flex-1 bg-green-600 text-white py-6 rounded-xl font-bold hover:bg-green-700 active:bg-green-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600"
      >
        Download Invoice PDF
      </button>

      <div
        className="absolute top-2 right-2 bg-black/20 text-white hover:text-amber-100"
        onClick={() => setShowOrderModal(false)}
      >
        <X size={20} />
      </div>
     </div>
    </div>
  );
};

export default OrderModal;
