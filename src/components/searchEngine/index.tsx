import React, { useState } from 'react';
import { Input, Select } from 'antd';
import './index.less';
import { CommonProps } from '../utils';

const { Search } = Input;
const prefixCls = 'searchEngine';

export type SearchEngineProps = CommonProps & {};

const searchMap = [
  {
    label: 'Google',
    value: 'google',
    icon: `google.png`,
    prefixUrl: 'https://www.google.com/search?q=',
  },
  {
    label: '百度',
    value: 'baidu',
    icon: `baidu.png`,
    prefixUrl: 'http://www.baidu.com/s?wd=',
  },
  {
    label: '必应',
    value: 'bing',
    icon: `bing.png`,
    prefixUrl: 'https://www.bing.com/search?q=',
  },
  {
    label: 'Github',
    value: 'github',
    icon: `github.png`,
    prefixUrl: 'https://github.com/search?q=',
  },
  {
    label: '知乎',
    value: 'zhihu',
    icon: `zhihu.png`,
    prefixUrl: 'https://www.zhihu.com/search?type=content&q=',
  },
];

const SearchEngine = (props: SearchEngineProps) => {
  const [searchIndex, setSearchIndex] = useState<number>(0);
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);
  const onSearch = (value: string) => {
    const searchUrl = `${searchMap[searchIndex].prefixUrl}${value}`;
    window.open(searchUrl);
  };
  const clickImgBox = () => {
    setDropDownVisible(!dropDownVisible);
  };
  const clickDropDownBox = (value: string) => {
    setSearchIndex(searchMap.findIndex(f => f.value === value));
    setDropDownVisible(!dropDownVisible);
  };
  const imgBox = (iconUrl: string, needDropDown?: boolean, clickFn?: any) => {
    return (
      <div
        className={`${prefixCls}-input-group-imgBox`}
        onClick={
            clickFn
        }
      >
        <img
          src={require(`../../image/${iconUrl}`)}
          alt=""
          className={`${prefixCls}-input-group-imgBox-icon`}
        />
        <img
          src={require(`../../image/dropDown.png`)}
          alt=""
          className={`${prefixCls}-input-group-imgBox-dropDown`}
          style={{ display: needDropDown ? 'inline' : 'none' }}
        />
      </div>
    );
  };
  const dropDownBox = () => {
    return (
      <div className={`${prefixCls}-input-group-dropBox`}>
        {searchMap.map((item) => {
          return (
            <div style={{ marginLeft: 10 }} key={item.value}>
              {imgBox(item.icon, false, ()=>{clickDropDownBox(item.value)})}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div {...props}>
      <Input.Group className={`${prefixCls}-input-group`}>
        {imgBox(searchMap[searchIndex].icon, true, clickImgBox)}
        <Search
          placeholder="输入并搜索"
          onSearch={onSearch}
          enterButton
          size="large"
          className={`${prefixCls}-input-group-search`}
        />
      </Input.Group>
      <div style={{ display: dropDownVisible ? 'inline' : 'none' }}>
        {dropDownBox()}
      </div>
    </div>
  );
};

export default SearchEngine;
