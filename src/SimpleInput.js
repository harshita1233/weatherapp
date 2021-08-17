import React from "react";
import { Input } from "antd";

export default function SimpleInput({ onChange, placeholder, defaultValue }) {
  return (
    <div>
      <Input
        style={{ width: 280 }}
        enterButton="Search"
        size="small"
        bordered
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
