import { Select, SelectProps } from "antd"
import RcSelect, { Option as RcOption } from "rc-select"

const { Option } = Select

const handleChange: SelectProps["onChange"] = (value) => {
  console.log(`selected ${value}`)
}

export function CustomSelect() {
  return (
    <>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        // prefixCls="qwe"
        dropdownClassName="dropdown"
        className="
          box-border
          m-0
          p-0
          text-black/80
          text-sm
          tabular-nums
          list-none
          relative
          inline-block
          cursor-pointer
          "
      >
        {Array(5)
          .fill(0)
          .map((v, i) => (
            <Option key={i} value={i}>
              {i}
            </Option>
          ))}
      </Select>
      <RcSelect prefixCls="asd">
        {Array(5)
          .fill(0)
          .map((v, i) => (
            <RcOption key={i} value={i}>
              {i}
            </RcOption>
          ))}
      </RcSelect>
    </>
  )
}
