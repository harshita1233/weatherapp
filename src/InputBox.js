import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default function InputBox({ onSearch, onChange, placeholder }) {
  return (
    <div>
      <Search
        style={{ width: 280 }}
        enterButton="Search"
        size="large"
        bordered
        defaultValue="10001"
        onSearch={(value) => onSearch(value)}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
