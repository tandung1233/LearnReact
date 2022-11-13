import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent"; //Sử dụng cái MyComponent vừa tự định nghĩa
//Đây gọi là cú pháp JSX: chính là cái function(hàm) thay vì 1 biến thì nó trả về HTML
//2 Cách khai báo components : class component / function component (function, arrow)
// Lý do có 2 cách khai báo
// + Nếu sử dụng function component không dùng hook cha nhận được gì thì render như vậy không sử lý logic gì cả
// + Khi sử dụng class component sử lý logic,.. xử lý các kiểu thì sử dụng class component
// Dấu hiệu nhận biết component là hàm đó return 1 đống HTML
//Gọi là function components
//function App() {
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with React.js (Hoi Dan IT)</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Cách sử dụng component giống hết như ta sử dụng 1 thẻ div bình thường */}
        <MyComponent />
        {/* Khai báo như này  <MyComponent /> có nghĩa là cái này không có con <MyComponent ></MyComponent> khai báo kiểu này nghĩa là cái này có con và chúng ta muốn render con nữa */}
      </header>
    </div>
  );
};

export default App;
