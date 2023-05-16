import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchBar from "../../../general/molecules/search-bar/searchBar";

type UnitOptions = {
  key: string;
  value: string;
};

const MOCK_UNITS = [
  {
    key: "UN_LW_P_STRN",
    value: "Sterne Leonis",
  },
  {
    key: "UN_LW_P_STRN_01",
    value: "Sterne (Knight of Ruin)",
  },
  {
    key: "UN_LW_P_STRN_02",
    value: "Sterne (Wing of Destiny)",
  },
];

const UnitSearch = () => {
  const [selectedUnitKey, setSelectedUnitKey] = useState<string>("");

  console.log(selectedUnitKey);

  return (
    <Dialog open>
      <DialogTitle>Unit Search</DialogTitle>
      <SearchBar />
      <List>
        {MOCK_UNITS.map(({ key, value }: UnitOptions, idx: number) => (
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
