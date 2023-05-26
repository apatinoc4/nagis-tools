import { ChangeEvent, useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
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
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end" onClick={handleClear}>
            <CloseIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
