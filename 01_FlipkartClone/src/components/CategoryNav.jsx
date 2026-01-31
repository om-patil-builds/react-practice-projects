import { ChevronDown } from "lucide-react";

const categories = [
  { name: "Top Offers", image: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" },
  { name: "Grocery", image: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" },
  { name: "Mobile", image: "https://rukminim1.flixcart.com/flap/80/80/image/c12afc7e335a65c7.png?q=100" },
  { name: "Fashion", image: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100", hasDropdown: true },
  { name: "Electronics", image: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100", hasDropdown: true },
  { name: "Home", image:"https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100", hasDropdown: true },
  { name: "Appliences", image: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100", hasDropdown: true },
  { name: "travels", image: "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" , hasDropdown: true },
  { name: "Beauty,Toys & More", image: "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" },
];

const CategoryNav = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-15 py-4 overflow-x-auto">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center min-w-20">
              <img src={category.image} alt={category.name} className="w-16 h-16 object-contain" />
              <div className="flex items-center gap-1 text-sm font-medium">
                {category.name}
                {category.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;