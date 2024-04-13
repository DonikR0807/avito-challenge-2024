import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface FiltersInterface {
  label: string,
  value: string,
  onChange: (event: SelectChangeEvent) => void,
  optionsList: Array<string | number>
}

function FiltersSelect({ label, value, onChange, optionsList }: FiltersInterface) {
  return (
    <FormControl
      size="small"
      sx={{
        width: '100%',
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        autoWidth={false}
        label={label}
        value={value}
        onChange={onChange}
      >
        {optionsList.map((value, index) => {
          return (
            <MenuItem value={value} key={index}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  )
}

export default FiltersSelect