import React, { useState } from 'react';
import { Input, Button, Space, message } from 'antd';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  loading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onClear, loading = false }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
    } else {
      message.warning('Please enter a search term');
    }
  };

  const handleClear = () => {
    setSearchValue('');
    onClear();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Space.Compact style={{ width: '100%', maxWidth: 400 }}>
      <Input
        placeholder="🔍 Search tasks by name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        loading={loading}
        aria-label="Search tasks"
        style={{ flex: 1, borderRadius: '8px 0 0 8px' }}
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={handleSearch}
        loading={loading}
        aria-label="Search"
        style={{ borderRadius: '0' }}
      >
        Search
      </Button>
      <Button
        icon={<ClearOutlined />}
        onClick={handleClear}
        aria-label="Clear search"
        style={{ borderRadius: '0 8px 8px 0' }}
      >
        Clear
      </Button>
    </Space.Compact>
  );
};

export default SearchBar;


