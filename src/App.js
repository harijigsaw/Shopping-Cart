import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const INITIAL_PRODUCT_LIST = [
  {
    name: "Motivational Poster Frame",
    poster: "https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg",
    price: "₹874",
    summary:
      "For Home & Office Decor: An Aesthetic Wall Decorations Paintings For Living Room, Bedroom, Kitchen, Office, Hotel, Restaurant, Dining Area, Kids Room, Bathroom, Bar, Gym, etc. A Great Gift For Art Lovers, Decorators, Interior Designers, Family, Friends And More",
    rating: 4,
  },
  {
    name: "Apple iPhone 15 Pro Max (256 GB)",
    poster:
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹1,56,990",
    summary:
      "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    rating: 3.9,
  },
  {
    name: "Apple 2022 MacBook Pro Laptop with M2 chip",
    poster: "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
    price: "₹1,40,990",
    summary:
      "SUPERCHARGED BY M2 – The 13-inch MacBook Pro laptop is a portable powerhouse. Get more done faster with a next-generation 8-core CPU, 10-core GPU and up to 24GB of unified memory.",
    rating: 4.9,
  },
  {
    name: " iPhone 15 (128 GB)",
    poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    price: "₹77,900 ",
    rating: 3,
    summary:
      "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
  },
  {
    name: "iPhone 15 Pro (128 GB) ",
    poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    price: "₹1,34,900 ",
    rating: 3.5,
    summary:
      " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
  },
  {
    name: "Samsung Galaxy S23 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    rating: 4.7,
    summary:
      "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever.",
  },
];
function App() {
  const productList = INITIAL_PRODUCT_LIST;
  return (
    <div className="App">

     <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Shopping-Cart</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
     </nav>

        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

        <div className="product-list">
         {productList.map((product) => (
          <Product product={product} />
          ))}
        </div>

        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Shopping-Cart Website 2023</p></div>
        </footer>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} />
      <div className="product-spec">
        <h3 className="product-name">{product.name} </h3>
        <p className="product-rating">{product.rating}</p>
      </div>
      <p className="product-summary">{product.summary}</p>
      <div className="priceStyle">
        Price: <p className="product-price"> {product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default App;
