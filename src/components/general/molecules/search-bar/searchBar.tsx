import { ChangeEvent, useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloseIcon from "@mui/icons-material/Close";
import { debounce } from "lodash";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const debounceUpdateDebouncedValue = debounce(() => {
      setDebouncedValue(value);
    }, 500);

    debounceUpdateDebouncedValue();

    return () => {
      debounceUpdateDebouncedValue.cancel();
    };
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleClear = () => {
    setValue("");
    setDebouncedValue("");
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
