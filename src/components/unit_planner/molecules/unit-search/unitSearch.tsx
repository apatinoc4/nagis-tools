import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchBar from "../../../general/molecules/search-bar/searchBar";
import useGetUnitsBySearchTerm from "../../hooks/useGetUnitsBySearchTerm";

import "./unitSearch.scss";

type UnitOptions = {
  key: string;
  value: string;
};

interface UnitSearchProps {
  isSearchOpen: boolean;
  setSearchOpen: (isSearchOpen: boolean) => void;
  setSelectedUnitKey: (unitKey: string) => void;
  selectedUnitKey: string;
}

const UnitSearch = (props: UnitSearchProps) => {
  const { isSearchOpen, setSearchOpen, selectedUnitKey, setSelectedUnitKey } =
    props;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchResults = useGetUnitsBySearchTerm(searchTerm);

  return (
    <Dialog
      className="unitCard-search"
      onClose={() => setSearchOpen(false)}
      open={isSearchOpen}
    >
      <div className="m-unitSearch-closeButton">
        <IconButton edge="end" onClick={() => setSearchOpen(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogTitle>UNIT SEARCH</DialogTitle>
      <SearchBar setSearchTerm={setSearchTerm} />
      <List>
        {searchResults?.map(({ key, value }: UnitOptions, idx: number) => (
          <ListItemButton
            key={idx}
            selected={selectedUnitKey === key}
            onClick={() => setSelectedUnitKey(key)}
          >
            <ListItemIcon>
              {selectedUnitKey === key && <CheckIcon />}
            </ListItemIcon>
            <ListItemText primary={value} />
          </ListItemButton>
        ))}
      </List>
    </Dialog>
  );
};

export default UnitSearch;
