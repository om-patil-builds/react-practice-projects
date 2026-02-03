import React from "react";

export default function OrderInvoiceTemplate({
  customer,
  cart,
  cartTotal,
  totalItems,
}) {
  const styles = {
    container: {
      display: "none",
      backgroundColor: "#ffffff",
      padding: "32px",
      minHeight: "297mm",
      width: "210mm",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      borderBottom: "4px solid #059669",
      paddingBottom: "16px",
      marginBottom: "24px",
    },
    headerTitle: {
      fontSize: "30px",
      fontWeight: "800",
      color: "#065f46",
      letterSpacing: "0.025em",
      textTransform: "uppercase",
      marginBottom: "4px",
    },
    headerSubtitle: {
      fontSize: "18px",
      color: "#4b5563",
      fontWeight: "500",
    },
    headerTagline: {
      fontSize: "12px",
      color: "#6b7280",
      marginTop: "4px",
    },
    billInfo: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "24px",
      backgroundColor: "#f9fafb",
      padding: "16px",
      borderRadius: "8px",
    },
    billInfoLeft: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    billInfoRight: {
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    billToTitle: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#374151",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "8px",
    },
    billText: {
      color: "#1f2937",
      fontSize: "14px",
    },
    billLabel: {
      fontWeight: "600",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "24px",
    },
    tableHeaderRow: {
      backgroundColor: "#059669",
      color: "#ffffff",
    },
    tableHeader: {
      padding: "12px 16px",
      fontSize: "14px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      border: "1px solid #047857",
    },
    tableHeaderLeft: {
      textAlign: "left",
    },
    tableHeaderCenter: {
      textAlign: "center",
    },
    tableHeaderRight: {
      textAlign: "right",
    },
    tableRowEven: {
      backgroundColor: "#ffffff",
    },
    tableRowOdd: {
      backgroundColor: "#f9fafb",
    },
    tableCell: {
      padding: "12px 16px",
      fontSize: "14px",
      color: "#1f2937",
      border: "1px solid #d1d5db",
    },
    tableCellCenter: {
      textAlign: "center",
    },
    tableCellRight: {
      textAlign: "right",
      fontWeight: "600",
    },
    tableCellMedium: {
      fontWeight: "500",
    },
    totalSection: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "32px",
    },
    totalBox: {
      backgroundColor: "#f0fdf4",
      border: "2px solid #bbf7d0",
      borderRadius: "8px",
      padding: "16px",
      width: "256px",
    },
    totalRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
    },
    totalLabel: {
      fontSize: "14px",
      color: "#4b5563",
    },
    totalValue: {
      fontWeight: "700",
      color: "#1f2937",
    },
    grandTotalRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #86efac",
      paddingTop: "8px",
    },
    grandTotalLabel: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#065f46",
    },
    grandTotalValue: {
      fontSize: "20px",
      fontWeight: "800",
      color: "#065f46",
    },
    footer: {
      marginTop: "auto",
      paddingTop: "24px",
      borderTop: "2px solid #059669",
    },
    footerContent: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "12px",
      color: "#4b5563",
    },
    footerLeft: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    footerRight: {
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    footerBold: {
      fontWeight: "700",
      color: "#1f2937",
      marginBottom: "4px",
    },
    footerSmall: {
      fontSize: "11px",
      color: "#6b7280",
      marginTop: "8px",
    },
  };

  return (
    <>
      {/* Invoice hidden for PDF */}
      <div id="invoice" style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Laxminarayan Agro Centre</h1>
          <p style={styles.headerSubtitle}>Dharngaon</p>
          <p style={styles.headerTagline}>Quality Agricultural Products</p>
        </div>

        {/* Bill Info */}
        <div style={styles.billInfo}>
          <div style={styles.billInfoLeft}>
            <h3 style={styles.billToTitle}>Bill To:</h3>
            <p style={styles.billText}>
              <span style={styles.billLabel}>Name:</span>{" "}
              {customer.name || "N/A"}
            </p>
            <p style={styles.billText}>
              <span style={styles.billLabel}>Village:</span>{" "}
              {customer.village || "N/A"}
            </p>
          </div>
          <div style={styles.billInfoRight}>
            <p style={styles.billText}>
              <span style={styles.billLabel}>Date:</span>{" "}
              {new Date().toLocaleDateString("en-IN")}
            </p>
            <p style={styles.billText}>
              <span style={styles.billLabel}>Contact:</span>{" "}
              {customer.phone || "N/A"}
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th
                  style={{
                    ...styles.tableHeader,
                    ...styles.tableHeaderLeft,
                    width: "40%",
                  }}
                >
                  Product Name
                </th>
                <th
                  style={{
                    ...styles.tableHeader,
                    ...styles.tableHeaderCenter,
                    width: "15%",
                  }}
                >
                  Qty
                </th>
                <th
                  style={{
                    ...styles.tableHeader,
                    ...styles.tableHeaderCenter,
                    width: "20%",
                  }}
                >
                  Weight/Unit
                </th>
                <th
                  style={{
                    ...styles.tableHeader,
                    ...styles.tableHeaderRight,
                    width: "25%",
                  }}
                >
                  Amount (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item.id}
                  style={
                    index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd
                  }
                >
                  <td style={{ ...styles.tableCell, ...styles.tableCellMedium }}>
                    {item.name}
                  </td>
                  <td
                    style={{ ...styles.tableCell, ...styles.tableCellCenter }}
                  >
                    {item.cartQty}
                  </td>
                  <td
                    style={{ ...styles.tableCell, ...styles.tableCellCenter }}
                  >
                    {item.weight || item.unit || "-"}
                  </td>
                  <td style={{ ...styles.tableCell, ...styles.tableCellRight }}>
                    ₹{(item.price * item.cartQty).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Section */}
        <div style={styles.totalSection}>
          <div style={styles.totalBox}>
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total Items:</span>
              <span style={styles.totalValue}>{totalItems}</span>
            </div>
            <div style={styles.grandTotalRow}>
              <span style={styles.grandTotalLabel}>Grand Total:</span>
              <span style={styles.grandTotalValue}>
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerLeft}>
              <p style={styles.footerBold}>Proprietor: Pradip Patil</p>
              <p>Thank you for your business!</p>
              <p style={styles.footerSmall}>Quality Agricultural Products</p>
            </div>
            <div style={styles.footerRight}>
              <p style={styles.footerBold}>Contact: +91 7666126076</p>
              <p>Sonavad Road, Chh. Shivaji Maharaj Complex</p>
              <p>Tal-Dharangaon, District Jalgaon, Maharashtra</p>
              <p style={{ ...styles.footerSmall, marginTop: "4px" }}>
                Open 7 Days: 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
