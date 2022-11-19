import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchEngine = () => {
  const onSearch = (value: string) => {
    window.open(`https://www.google.com/search?q=${value}`)
  };
  return <Search placeholder="输入并搜索" onSearch={onSearch} enterButton />;
};

export default SearchEngine;
