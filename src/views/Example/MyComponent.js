import React from "react";
class MyComponent extends React.Component {
  // Phải có render()
  render() {
    return <div>Hello my component Tan Dung IT</div>;
  }
}
//Để sử dụng được bên trong cái App.js kia thì phải có dòng này
export default MyComponent;
//export defaut là mặc định trả ra 1 cái class
// còn export {} là trả ra nhiều cái
