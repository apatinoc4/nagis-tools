import { ChangeEvent, useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloseIcon from "@mui/icons-material/Close";
import { debounce } from "lodash";

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { setSearchTerm } = props;
  const [value, setValue] = useState("");

  useEffect(() => {
    const debounceUpdateDebouncedValue = debounce(() => {
      setSearchTerm(value);
    }, 500);

    debounceUpdateDebouncedValue();

    return () => {
      debounceUpdateDebouncedValue.cancel();
    };
  }, [setSearchTerm, value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleClear = () => {
    setValue("");
    setSearchTerm("");
  };

  return (
    <OutlinedInput
      className="searchBar"
      value={value}
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="end">
          <IconButton edge="start" onClick={handleClear}>
            <CloseIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
