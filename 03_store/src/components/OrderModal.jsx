import React, { useState } from "react";


const OrderModal = () => {
    const [customer, setCustomer] = useState({
  name: "",
  phone: "",
  village: "",
});

  return (
    <div className="space-y-3 mb-6">
  <input
    type="text"
    placeholder="Customer Name"
    value={customer.name}
    onChange={(e) =>
      setCustomer({ ...customer, name: e.target.value })
    }
    className="w-full px-4 py-3 border rounded-xl"
    required
  />

  <input
    type="tel"
    placeholder="Mobile Number"
    value={customer.phone}
    onChange={(e) =>
      setCustomer({ ...customer, phone: e.target.value })
    }
    className="w-full px-4 py-3 border rounded-xl"
    required
  />

  <input
    type="text"
    placeholder="Village Name"
    value={customer.village}
    onChange={(e) =>
      setCustomer({ ...customer, village: e.target.value })
    }
    className="w-full px-4 py-3 border rounded-xl"
    required
  />
</div>

  )
}

export default OrderModal