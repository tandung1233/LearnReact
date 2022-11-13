import React from "react";
class MyComponent extends React.Component {
  //Cái state(object) này thay đổi thì lập tức dữ liệu thay đối realtime
  state = {
    name: "Tấn Dũng",
    channel: "hihi IT",
  };
  /*
    Cú pháp JSX cho phép 1 hàm của JS trả ra 1 đống HTML, điểm mạnh là có thể render ra 1 biến
    =>JSX => return block(khối chỉ có 1 lớp bọc) nhưng có cách sử dụng <React.Fragment></React.Fragment> để sử dụng in ra 2 khối
  */
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // Phải có render()
  render() {
    //Sử dụng JS bên JSX, dấu {} thể hiện ta đang muốn sử dụng JS
    let name = "Tấn Dũng MTP";
    return (
      //Sử dụng React.Fragment nếu muốn in 2 khối code
      //class phải đặt là className vì nếu đặt class thôi bị trùng không tốt
      <React.Fragment>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          {/* Dùng code Js bên trong HTML */}
          {console.log("Tên là: ", name)}
          Hello my componentm My name is {name}
        </div>
        <div className="second">Hello div 2</div>
        <div className="second">Helo state tên: {this.state.name} </div>
        <div className="second">Trạng thái: {this.state.channel} </div>
      </React.Fragment>
    );
  }
}
//Để sử dụng được bên trong cái App.js kia thì phải có dòng này
export default MyComponent;
//export defaut là mặc định trả ra 1 cái class
// còn export {} là trả ra nhiều cái
