import React from "react";

export default function OrderInvoiceTemplate({
  customer,
  cart,
  cartTotal,
  totalItems,
}) {
  return (
    <>
      {/* Invoice hidden for PDF */}
      <div
        id="invoice"
        style={{ display: "none" }}
        className="bg-white p-8 min-h-[297mm] w-[210mm] mx-auto font-sans"
      >
        {/* Header Section */}
        <div className="text-center border-b-4 border-green-600 pb-4 mb-6">
          <h1 className="text-3xl font-extrabold text-green-800 tracking-tight uppercase mb-1">
            Laxminarayan Agro Centre
          </h1>
          <p className="text-lg text-gray-600 font-medium">Dharngaon</p>
          <p className="text-xs text-gray-500 mt-1">
            Quality Agricultural Products
          </p>
        </div>

        {/* Bill Info */}
        <div className="flex justify-between items-start mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
              Bill To:
            </h3>
            <p className="text-gray-800">
              <span className="font-semibold">Name:</span>{" "}
              {customer.name || "N/A"}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Village:</span>{" "}
              {customer.village || "N/A"}
            </p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Date:</span>{" "}
              {new Date().toLocaleDateString("en-IN")}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Contact:</span>{" "}
              {customer.phone || "N/A"}
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div className="mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left text-sm font-bold uppercase tracking-wider border border-green-700 w-[40%]">
                  Product Name
                </th>
                <th className="py-3 px-4 text-center text-sm font-bold uppercase tracking-wider border border-green-700 w-[15%]">
                  Qty
                </th>
                <th className="py-3 px-4 text-center text-sm font-bold uppercase tracking-wider border border-green-700 w-[20%]">
                  Weight/Unit
                </th>
                <th className="py-3 px-4 text-right text-sm font-bold uppercase tracking-wider border border-green-700 w-[25%]">
                  Amount (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-4 text-sm text-gray-800 border border-gray-300 font-medium">
                    {item.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 border border-gray-300 text-center">
                    {item.cartQty}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 border border-gray-300 text-center">
                    {item.weight || item.unit || "-"}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 border border-gray-300 text-right font-semibold">
                    ₹{(item.price * item.cartQty).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Section */}
        <div className="flex justify-end mb-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 w-64">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Total Items:</span>
              <span className="font-bold text-gray-800">{totalItems}</span>
            </div>
            <div className="flex justify-between items-center border-t border-green-300 pt-2">
              <span className="text-lg font-bold text-green-800">
                Grand Total:
              </span>
              <span className="text-xl font-extrabold text-green-800">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t-2 border-green-600">
          <div className="flex justify-between items-center text-xs text-gray-600">
            <div>
              <p className="font-bold text-gray-800 mb-1">
                Proprietor: [Owner Name]
              </p>
              <p>Thank you for your business!</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800 mb-1">
                Contact: +91 XXXXX XXXXX
              </p>
              <p>Laxminarayan Agro Centre, Dharngaon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
