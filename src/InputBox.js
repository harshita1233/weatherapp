import React from 'react'
import { Input } from "antd";

const { Search } = Input;

export default function InputBox({onSearch}) {
	
	return (
    <div>
      <Search
        style={{ width: 280 }}
        placeholder="Search with Zip Code"
        enterButton="Search"
        size="large"
        bordered
        defaultValue="10001"
        onSearch={(value)=>onSearch(value)}
      />
    </div>
  );
}
