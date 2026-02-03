# PDF Bill Generation Feature

## Overview
This feature allows customers to generate a professional PDF invoice/bill when they complete their order. The bill includes all essential store and order information.

## How It Works

### 1. **User Flow**
1. Customer adds products to cart
2. Customer clicks "Checkout" from the cart
3. Order modal appears with a form
4. Customer fills in their details:
   - Customer Name
   - Mobile Number
   - Village Name
5. Customer clicks "Download Invoice PDF"
6. A professional PDF bill is automatically generated and downloaded

### 2. **PDF Content**

The generated PDF includes:

#### Header Section
- **Store Name**: LAXMINARAYAN AGRO CENTRE
- **Location**: Dharangaon
- **Tagline**: Quality Agricultural Products

#### Bill Information
- **Customer Name**: From the form input
- **Village**: From the form input
- **Date**: Current date (auto-generated)
- **Contact**: Customer's mobile number

#### Order Details Table
The table includes:
- **Product Name**: Name of each product ordered
- **Quantity (Qty)**: Number of units ordered
- **Weight/Unit**: Product weight or unit size
- **Amount (₹)**: Individual product total (price × quantity)

#### Total Section
- **Total Items**: Total number of items ordered
- **Grand Total**: Final amount in ₹ (Rupees)

#### Footer
Left side:
- **Proprietor**: Pradip Patil
- **Thank you message**
- **Quality Agricultural Products**

Right side:
- **Contact**: +91 7666126076
- **Address**: Sonavad Road, Chh. Shivaji Maharaj Complex, Tal-Dharangaon, District Jalgaon, Maharashtra
- **Store Hours**: Open 7 Days: 8:00 AM - 8:00 PM

## Technical Implementation

### Files Involved

1. **OrderModal.jsx** - Main component that:
   - Displays the customer information form
   - Handles PDF generation logic
   - Uses html2pdf.js library

2. **OrderInvoiceTemplate.jsx** - Template component that:
   - Defines the PDF layout and styling
   - Hidden from view but rendered for PDF generation
   - Contains all invoice formatting

### Dependencies
- **html2pdf.js**: Library used to convert HTML to PDF
- Already installed in package.json

### Key Features
- ✅ Professional invoice layout
- ✅ Automatic filename generation (CustomerName_Invoice.pdf)
- ✅ High-quality PDF (scale: 2 for better resolution)
- ✅ A4 size format
- ✅ Proper margins and formatting
- ✅ Table format for order details
- ✅ Complete store information
- ✅ Customer information

## Customization

To modify the invoice:

1. **Change Store Info**: Edit values in `OrderInvoiceTemplate.jsx` footer section
2. **Modify Layout**: Update the HTML structure in `OrderInvoiceTemplate.jsx`
3. **Change Styling**: Modify Tailwind classes in the template
4. **PDF Settings**: Adjust options in `OrderModal.jsx` handleDownloadPDF function:
   ```javascript
   const opt = {
     margin: [10, 0, 10, 0],  // [top, left, bottom, right] in mm
     filename: `${customer.name || "Invoice"}_Invoice.pdf`,
     image: { type: "jpeg", quality: 0.98 },
     html2canvas: { scale: 2, useCORS: true },
     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
   };
   ```

## Usage Example

```javascript
// When customer clicks checkout:
1. Cart → Checkout Button → Opens OrderModal
2. User fills form with customer details
3. Click "Download Invoice PDF"
4. PDF is generated and automatically downloaded

// The PDF will be named: "CustomerName_Invoice.pdf"
```

## Validation

The "Download Invoice PDF" button is disabled when:
- Customer name is empty
- Cart is empty

This ensures that every generated invoice has valid data.

## Troubleshooting

**Issue**: PDF not generating
- Check browser console for errors
- Ensure html2pdf.js is properly installed
- Verify the invoice element ID exists

**Issue**: PDF missing information
- Check that customer form is filled
- Verify cart has items
- Check OrderInvoiceTemplate receives correct props

**Issue**: PDF formatting issues
- Adjust scale in html2canvas options
- Check CSS styling in OrderInvoiceTemplate
- Verify Tailwind classes are properly applied
